import jwt from 'jsonwebtoken';

const ADMIN_PASSWORD = process.env.VITE_ADMIN_PASSWORD;
const JWT_SECRET = process.env.JWT_SECRET || 'your-super-secret-jwt-key-change-in-production';

// In-memory rate limiting (tracks failed attempts by IP)
const failedAttempts = new Map();
const MAX_ATTEMPTS = 5;
const LOCKOUT_TIME = 15 * 60 * 1000; // 15 minutes

const getClientIP = (req) => {
  return req.headers['x-forwarded-for']?.split(',')[0] || 
         req.headers['x-real-ip'] || 
         req.socket?.remoteAddress || 
         'unknown';
};

const isBlocked = (ip) => {
  const record = failedAttempts.get(ip);
  if (!record) return false;

  const now = Date.now();
  // If lockout period has passed, clear the record
  if (now - record.firstAttempt > LOCKOUT_TIME) {
    failedAttempts.delete(ip);
    return false;
  }

  // If max attempts reached, still blocked
  return record.attempts >= MAX_ATTEMPTS;
};

const recordFailedAttempt = (ip) => {
  const now = Date.now();
  const record = failedAttempts.get(ip);

  if (record) {
    record.attempts += 1;
    record.lastAttempt = now;
  } else {
    failedAttempts.set(ip, {
      attempts: 1,
      firstAttempt: now,
      lastAttempt: now
    });
  }
};

const clearFailedAttempts = (ip) => {
  failedAttempts.delete(ip);
};

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', 'true');

  // Handle OPTIONS request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'POST') {
    const clientIP = getClientIP(req);

    // Check if IP is blocked
    if (isBlocked(clientIP)) {
      return res.status(429).json({ 
        error: 'Too many failed attempts. Please try again in 15 minutes.' 
      });
    }

    const { password } = req.body;

    // Verify password
    if (password === ADMIN_PASSWORD) {
      // Clear failed attempts on successful login
      clearFailedAttempts(clientIP);

      // Create JWT token that expires in 30 minutes
      const token = jwt.sign(
        { admin: true },
        JWT_SECRET,
        { expiresIn: '30m' }
      );

      // Set HTTP-only cookie (can't be accessed by JavaScript)
      res.setHeader(
        'Set-Cookie',
        `adminToken=${token}; HttpOnly; Secure; SameSite=Strict; Path=/; Max-Age=1800`
      );

      return res.status(200).json({ 
        message: 'Login successful'
      });
    } else {
      // Record failed attempt
      recordFailedAttempt(clientIP);
      const record = failedAttempts.get(clientIP);

      return res.status(401).json({ 
        error: 'Invalid password',
        attemptsRemaining: MAX_ATTEMPTS - record.attempts
      });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}

