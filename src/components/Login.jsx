import { useState } from "react"
import { supabase } from "../supabaseClient"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext.jsx"

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [mensaje, setMensaje] = useState("")
  const navigate = useNavigate()
  const { usuario } = useAuth()

  const handleLogin = async (e) => {
    e.preventDefault()
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) {
      setMensaje(error.message)
    } else {
      setMensaje("Login exitoso")
      setEmail("")
      setPassword("")
      setTimeout(() => navigate("/historial"), 1000)
    }
  }

  if (usuario) {
    return <p>Ya has iniciado sesión.</p>
  }

  return (
    <form onSubmit={handleLogin}>
      <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
      <input type="password" placeholder="Contraseña" value={password} onChange={e => setPassword(e.target.value)} required />
      <button type="submit">Iniciar sesión</button>
      {mensaje && <p>{mensaje}</p>}
    </form>
  )
}

export default Login
