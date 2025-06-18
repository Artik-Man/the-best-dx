import { supabase } from '../../backend/supabase';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { user_id, bio } = req.body;

  const { data, error } = await supabase
    .from('profiles')
    .update({ bio })
    .eq('user_id', user_id);

  if (error) {
    return res.status(400).json({ error: error.message });
  }

  res.status(200).json({ success: true });
}