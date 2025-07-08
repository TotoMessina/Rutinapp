import Header from "../components/Header"
import Formulario from "../components/Formulario"
import rutinasFamosos from "../data/rutinasFamosos"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import SelectorDificultad from "../components/SelectorDificultad"

function Home() {
  const navigate = useNavigate()

  const elegirRutinaFamosa = (rutina) => {
    localStorage.setItem("rutinaFamosa", JSON.stringify(rutina))
    navigate("/resultado")
  }

  return (
    <main>
      <Header />
      <Formulario />

      <section style={{ marginTop: "3rem" }}>
        <SelectorDificultad />
      </section>

      {/* Si quisieras mantener esta parte fija aparte del filtro */}
      {/* <section>
        <h2>O elegí una rutina famosa directamente</h2>
        <div className="famoso-grid">
          {rutinasFamosos.map((r) => (
            <div
              key={r.id}
              className="famoso-card"
              onClick={() => elegirRutinaFamosa(r)}
            >
              <h3>{r.nombre}</h3>
              <p>{r.descripcion}</p>
            </div>
          ))}
        </div>
      </section> */}
    </main>
  )
}

export default Home
