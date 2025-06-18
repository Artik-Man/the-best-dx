import { supabase } from '../../backend/supabase';

export default async function handler(req, res) {
  const { id } = req.query;

  // 1. Получаем данные из таблицы `profiles`
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('user_id', id)
    .single();

  if (error) {
    return res.status(404).json({ error: 'User not found' });
  }

  res.status(200).json(data);
}