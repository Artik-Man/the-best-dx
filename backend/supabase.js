import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.POSTGRES_SUPABASE_URL;
const supabaseKey = process.env.POSTGRES_NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);