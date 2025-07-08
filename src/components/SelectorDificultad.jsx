import { useState } from "react"
import { useNavigate } from "react-router-dom"
import rutinasFamosos from "../data/rutinasFamosos"

const niveles = ["inicial", "baja", "media", "alta", "extrema"]

const colores = ["#00ff88", "#aaff44", "#ffff33", "#ff9933", "#ff3333"]

function SelectorDificultad() {
  const [nivelSeleccionado, setNivelSeleccionado] = useState("media")
  const navigate = useNavigate()

  const personajesNivel = rutinasFamosos.filter(p => p.dificultad === nivelSeleccionado)

  const cambiarNivel = (e) => {
    const index = parseInt(e.target.value)
    setNivelSeleccionado(niveles[index])
  }

  const elegirRutinaFamosa = (rutina) => {
    localStorage.setItem("rutinaFamosa", JSON.stringify(rutina))
    navigate("/resultado")
  }

  const colorActual = colores[niveles.indexOf(nivelSeleccionado)]

  return (
    <section>
      <h2 style={{ color: '#fff' }}>Elegí el nivel de dificultad</h2>
      <input
        type="range"
        min="0"
        max="4"
        step="1"
        value={niveles.indexOf(nivelSeleccionado)}
        onChange={cambiarNivel}
        style={{ width: '100%', accentColor: colorActual, transition: 'accent-color 0.5s ease' }}
      />
      <div style={{ marginTop: '1rem', transition: 'color 0.5s ease', color: colorActual }}>
        <strong>Nivel seleccionado:</strong> {nivelSeleccionado.charAt(0).toUpperCase() + nivelSeleccionado.slice(1)}
      </div>

      <div className="famoso-grid" style={{ marginTop: '2rem' }}>
        {personajesNivel.map(p => (
          <div
            key={p.id}
            className="famoso-card"
            onClick={() => elegirRutinaFamosa(p)}
            style={{
              cursor: 'pointer',
              boxShadow: `0 0 0 rgba(0,0,0,0)`,
              transition: 'box-shadow 0.3s ease'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.boxShadow = `0 0 20px ${colorActual}`
            }}
            onMouseLeave={e => {
              e.currentTarget.style.boxShadow = `0 0 0 rgba(0,0,0,0)`
            }}
          >
            <img
                src={`/src/assets/personajes/${p.id}.png`}
                alt={p.nombre}
                style={{
                    width: "100%",
                    borderRadius: "12px",
                    objectFit: "cover",
                    marginBottom: "0.5rem",
                    aspectRatio: "1.5/1"
                }}
            />
            <h3>{p.nombre}</h3>
            <p>{p.descripcion}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default SelectorDificultad