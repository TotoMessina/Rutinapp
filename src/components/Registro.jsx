import { useState } from "react"
import { supabase } from "../supabaseClient"
import { useNavigate } from "react-router-dom"

function Registro() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    nombre: "",
    apellido: "",
    edad: "",
    objetivo: ""
  })
  const [mensaje, setMensaje] = useState("")
  const [cargando, setCargando] = useState(false)
  const navigate = useNavigate()

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleRegistro = async (e) => {
    e.preventDefault()
    setCargando(true)
    setMensaje("")
    // 1. Registro en auth
    const { data, error } = await supabase.auth.signUp({
      email: form.email,
      password: form.password
    })

    if (error) {
      setMensaje(error.message)
      setCargando(false)
      return
    }

    // 2. Si el registro fue exitoso, guarda los datos extra en la tabla perfiles
    const user = data.user
    if (user) {
      const { error: errorPerfil } = await supabase
        .from("perfiles")
        .insert([{
          id: user.id,
          nombre: form.nombre,
          apellido: form.apellido,
          edad: form.edad,
          objetivo: form.objetivo
        }])
      if (errorPerfil) {
        setMensaje("Usuario creado, pero hubo un error guardando el perfil: " + errorPerfil.message)
        setCargando(false)
        return
      }
    }

    setMensaje("¡Registro exitoso! Revisa tu correo para confirmar la cuenta.")
    setForm({
      email: "",
      password: "",
      nombre: "",
      apellido: "",
      edad: "",
      objetivo: ""
    })
    setTimeout(() => navigate("/"), 2500)
    setCargando(false)
  }

  return (
    <form onSubmit={handleRegistro} style={{ maxWidth: 400, margin: "0 auto" }}>
      <h2>Crear cuenta</h2>
      <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
      <input type="password" name="password" placeholder="Contraseña" value={form.password} onChange={handleChange} required minLength={6} />
      <input type="text" name="nombre" placeholder="Nombre" value={form.nombre} onChange={handleChange} required />
      <input type="text" name="apellido" placeholder="Apellido" value={form.apellido} onChange={handleChange} required />
      <input type="number" name="edad" placeholder="Edad" value={form.edad} onChange={handleChange} required min={1} />
      <input type="text" name="objetivo" placeholder="Objetivo (ej: salud, estética, rendimiento...)" value={form.objetivo} onChange={handleChange} required />
      <button type="submit" disabled={cargando}>
        {cargando ? "Registrando..." : "Registrarse"}
      </button>
      {mensaje && <p style={{ marginTop: 10 }}>{mensaje}</p>}
    </form>
  )
}

export default Registro
