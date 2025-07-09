import { supabase } from "../supabaseClient"

export async function guardarEntrenamiento(rutina, usuario) {
  const userId = usuario?.id
  if (!userId) return { error: "Usuario no logueado" }
  const { error } = await supabase
    .from("entrenamientos")
    .insert({ user_id: userId, rutina })
  return { success: !error, error }
}

export async function obtenerEntrenamientos(usuario) {
  const userId = usuario?.id
  if (!userId) return []
  const { data } = await supabase
    .from("entrenamientos")
    .select("*")
    .eq("user_id", userId)
    .order("fecha", { ascending: false })
  return data || []
}
