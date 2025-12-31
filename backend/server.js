import express from 'express';
import cors from 'cors';
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Supabase client with service role key (server-side only)
const supabase = createClient(
  process.env.VITE_SUPABASE_URL,
  process.env.VITE_SUPABASE_SERVICE_KEY
);

const ADMIN_PASSWORD = process.env.VITE_ADMIN_PASSWORD;

// Middleware to verify admin password
const verifyAdminPassword = (req, res, next) => {
  const password = req.headers['x-admin-password'];
  
  if (!password || password !== ADMIN_PASSWORD) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  
  next();
};

// GET all inquiries
app.get('/api/inquiries', verifyAdminPassword, async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('contact_submissions')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      return res.status(400).json({ error: error.message });
    }

    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// UPDATE inquiry status
app.post('/api/inquiries/:id/status', verifyAdminPassword, async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!['new', 'completed'].includes(status)) {
      return res.status(400).json({ error: 'Invalid status' });
    }

    const { data, error } = await supabase
      .from('contact_submissions')
      .update({ status })
      .eq('id', id)
      .select();

    if (error) {
      return res.status(400).json({ error: error.message });
    }

    res.json(data[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE inquiry
app.delete('/api/inquiries/:id', verifyAdminPassword, async (req, res) => {
  try {
    const { id } = req.params;

    const { error } = await supabase
      .from('contact_submissions')
      .delete()
      .eq('id', id);

    if (error) {
      return res.status(400).json({ error: error.message });
    }

    res.json({ message: 'Inquiry deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(PORT, () => {
  console.log(`✓ Admin API running on http://localhost:${PORT}`);
  console.log(`✓ Service role key is secure on the server`);
});
