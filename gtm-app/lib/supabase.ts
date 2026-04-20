import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
}

export type Profile = {
  id: string
  user_id: string
  perfil_tipo: string | null
  perfil_secundario: string | null
  señal_estrella: string | null
  señales_activas: string[] | null
  keywords: string[] | null
  icp: Record<string, unknown> | null
  credits: number
  created_at: string
  updated_at: string
}
