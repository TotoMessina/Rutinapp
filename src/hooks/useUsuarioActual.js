import { useAuth } from '../context/AuthContext.jsx'

export default function useUsuarioActual() {
  // Por compatibilidad, pero se recomienda usar useAuth directamente
  const { usuario } = useAuth()
  return usuario
}
