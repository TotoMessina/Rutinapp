import { useState, useEffect } from "react"
import Header from "../components/Header"
import Formulario from "../components/Formulario"
import SelectorDificultad from "../components/SelectorDificultad"
import { useAuth } from "../context/AuthContext.jsx"
import { Link } from "react-router-dom"

function Home() {
  const [modoOscuro, setModoOscuro] = useState(() => {
    const guardado = localStorage.getItem("modoOscuro")
    return guardado ? guardado === "true" : true
  })
  const { usuario } = useAuth()

  useEffect(() => {
    localStorage.setItem("modoOscuro", modoOscuro)
  }, [modoOscuro])

  return (
    <div className={`container-principal ${modoOscuro ? "oscuro" : "claro"}`}>
      <Header modoOscuro={modoOscuro} setModoOscuro={setModoOscuro} />
      {usuario ? (
        <>
          <Formulario />
          <SelectorDificultad modoOscuro={modoOscuro} />
        </>
      ) : (
        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
          <p>Debes iniciar sesión para generar tu rutina personalizada.</p>
          <Link to="/registro">¿No tienes cuenta? Regístrate aquí</Link>
        </div>
      )}
    </div>
  )
}

export default Home
