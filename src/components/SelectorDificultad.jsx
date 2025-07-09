import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import rutinasFamosos from "../data/rutinasFamosos"
import { useAuth } from "../context/AuthContext.jsx"
import { guardarEntrenamiento } from "../services/entrenamientos"

const niveles = ["inicial", "baja", "media", "alta", "extrema"]
const colores = ["#00ff88", "#aaff44", "#ffff33", "#ff9933", "#ff3333"]

function SelectorDificultad({ modoOscuro }) {
  const [nivelSeleccionado, setNivelSeleccionado] = useState("media")
  const [fadeIn, setFadeIn] = useState(true)
  const navigate = useNavigate()
  const { usuario } = useAuth()

  const personajesNivel = rutinasFamosos.filter(p => p.dificultad === nivelSeleccionado)
  const colorActual = colores[niveles.indexOf(nivelSeleccionado)]

  const cambiarNivel = (e) => {
    setFadeIn(false)
    const index = parseInt(e.target.value)
    setTimeout(() => {
      setNivelSeleccionado(niveles[index])
      setFadeIn(true)
    }, 200)
  }

  const elegirRutinaFamosa = async (rutina) => {
    localStorage.setItem("rutinaFamosa", JSON.stringify(rutina))
    if (usuario) {
      await guardarEntrenamiento(rutina.ejercicios, usuario)
    }
    navigate("/resultado")
  }

  return (
    <section style={{ transition: 'all 0.5s ease' }}>
      <h2 style={{ color: modoOscuro ? '#fff' : '#000', transition: 'color 0.4s ease' }}>
        Elegí el nivel de dificultad
      </h2>

      <input
        type="range"
        min="0"
        max="4"
        step="1"
        value={niveles.indexOf(nivelSeleccionado)}
        onChange={cambiarNivel}
        style={{ width: '100%', accentColor: colorActual, transition: 'accent-color 0.5s ease' }}
      />

      <div style={{ marginTop: '1rem', color: colorActual, transition: 'color 0.3s ease' }}>
        <strong>Nivel seleccionado:</strong> {nivelSeleccionado.charAt(0).toUpperCase() + nivelSeleccionado.slice(1)}
      </div>

      <div
        className="famoso-grid"
        style={{
          marginTop: '2rem',
          opacity: fadeIn ? 1 : 0,
          transform: fadeIn ? 'scale(1)' : 'scale(0.95)',
          transition: 'opacity 0.4s ease, transform 0.4s ease'
        }}
      >
        {personajesNivel.map(p => (
          <div
            key={p.id}
            className="famoso-card"
            onClick={() => elegirRutinaFamosa(p)}
            style={{
              backgroundColor: '#1a1a1a',
              color: '#fff',
              borderRadius: '16px',
              padding: '1.5rem',
              border: '1px solid #333',
              boxShadow: `0 0 0 rgba(0,0,0,0)`,
              transition: 'transform 0.25s ease, box-shadow 0.4s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.boxShadow = `0 0 20px ${colorActual}`
              e.currentTarget.style.transform = 'scale(1.03)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.boxShadow = `0 0 0 rgba(0,0,0,0)`
              e.currentTarget.style.transform = 'scale(1)'
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
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '0.5rem' }}>
              {p.dias?.map((d, i) => (
                <span
                  key={i}
                  style={{
                    backgroundColor: colorActual,
                    color: '#000',
                    borderRadius: '999px',
                    padding: '4px 10px',
                    fontSize: '0.75rem',
                    fontWeight: '500'
                  }}
                >
                  {d.dia.split(' ')[0]}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default SelectorDificultad
