import { supabase } from "../../backend/supabase.js";

export default async function handler(req, res) {
  // Параметры фильтрации (например, ?username=alice)
  const { username } = req.query;

  let query = supabase.from('profiles').select('*');

  if (username) {
    query = query.ilike('username', `%${username}%`);
  }

  const { data, error } = await query;

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  res.status(200).json(data);
}