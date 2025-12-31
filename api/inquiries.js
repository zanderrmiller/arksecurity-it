import { createClient } from '@supabase/supabase-js';
import jwt from 'jsonwebtoken';

const supabase = createClient(
  process.env.VITE_SUPABASE_URL,
  process.env.VITE_SUPABASE_SERVICE_KEY
);

const JWT_SECRET = process.env.JWT_SECRET || 'your-super-secret-jwt-key-change-in-production';

// Verify JWT from cookie
const verifyToken = (req) => {
  const cookies = req.headers.cookie || '';
  const token = cookies
    .split(';')
    .find(c => c.trim().startsWith('adminToken='))
    ?.split('=')[1];

  if (!token) return null;

  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (err) {
    return null;
  }
};

export default async function handler(req, res) {
  // Get the origin from the request
  const origin = req.headers.origin || req.headers.referer?.split('/').slice(0, 3).join('/');
  
  // Set CORS headers with proper origin
  res.setHeader('Access-Control-Allow-Origin', origin || '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, x-admin-password');
  res.setHeader('Access-Control-Allow-Credentials', 'true');

  // Handle OPTIONS request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Verify JWT token
  const decoded = verifyToken(req);
  if (!decoded) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    if (req.method === 'GET') {
      // Get all inquiries
      const { data, error } = await supabase
        .from('contact_submissions')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        return res.status(400).json({ error: error.message });
      }

      return res.status(200).json(data);
    } else if (req.method === 'POST') {
      // Update inquiry status
      const { id, status } = req.body;

      if (!id || !['new', 'completed'].includes(status)) {
        return res.status(400).json({ error: 'Invalid request' });
      }

      const { data, error } = await supabase
        .from('contact_submissions')
        .update({ status })
        .eq('id', id)
        .select();

      if (error) {
        return res.status(400).json({ error: error.message });
      }

      return res.status(200).json(data[0]);
    } else if (req.method === 'DELETE') {
      // Delete inquiry
      const { id } = req.body;

      if (!id) {
        return res.status(400).json({ error: 'ID required' });
      }

      const { error } = await supabase
        .from('contact_submissions')
        .delete()
        .eq('id', id);

      if (error) {
        return res.status(400).json({ error: error.message });
      }

      return res.status(200).json({ message: 'Deleted successfully' });
    } else {
      return res.status(405).json({ error: 'Method not allowed' });
    }
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
