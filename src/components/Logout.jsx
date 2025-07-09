import { supabase } from "../supabaseClient"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext.jsx"

function Logout() {
  const navigate = useNavigate()
  const { usuario } = useAuth()

  const cerrarSesion = async () => {
    if (!usuario) return
    await supabase.auth.signOut()
    navigate("/")
  }

  return (
    <button onClick={cerrarSesion}>Cerrar sesión</button>
  )
}

export default Logout
