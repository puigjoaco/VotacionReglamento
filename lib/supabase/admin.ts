import { createClient } from '@supabase/supabase-js';

// Cliente administrativo con SERVICE_ROLE_KEY para operaciones que requieren bypass de RLS
// IMPORTANTE: Solo usar en el servidor, nunca exponer al cliente
export function createAdminClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

  if (!serviceRoleKey) {
    throw new Error('SUPABASE_SERVICE_ROLE_KEY no está configurada');
  }

  return createClient(supabaseUrl, serviceRoleKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  });
}
