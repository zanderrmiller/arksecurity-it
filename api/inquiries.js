import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.VITE_SUPABASE_URL,
  process.env.VITE_SUPABASE_SERVICE_KEY
);

const ADMIN_PASSWORD = process.env.VITE_ADMIN_PASSWORD;

// Verify admin password from headers
const verifyAdminPassword = (req) => {
  const password = req.headers['x-admin-password'];
  return password === ADMIN_PASSWORD;
};

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, x-admin-password');

  // Handle OPTIONS request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Verify admin password
  if (!verifyAdminPassword(req)) {
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
