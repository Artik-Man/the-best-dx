import { supabase } from '../backend/supabase';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email, password, username } = req.body;

  // 1. Регистрация в Supabase Auth
  const { data: authData, error: authError } = await supabase.auth.signUp({
    email,
    password,
  });

  if (authError) {
    return res.status(400).json({ error: authError.message });
  }

  // 2. Добавление метаданных в таблицу `profiles`
  const { data: profileData, error: profileError } = await supabase
    .from('profiles')
    .insert([{ user_id: authData.user.id, username }]);

  if (profileError) {
    return res.status(400).json({ error: profileError.message });
  }

  res.status(201).json({ user: authData.user });
}