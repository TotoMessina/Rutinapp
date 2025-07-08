import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

function RutinaFamosoVista() {
  const [rutina, setRutina] = useState(null)
  const [diaSeleccionado, setDiaSeleccionado] = useState(0)
  const navigate = useNavigate()

  useEffect(() => {
    const datos = JSON.parse(localStorage.getItem("rutinaFamosa"))
    if (!datos) return navigate("/")
    setRutina(datos)
  }, [])

  if (!rutina) return null

  return (
    <section>
      <h2>{rutina.nombre}</h2>
      <p>{rutina.descripcion}</p>

      <div style={{ display: 'flex', gap: '8px', marginTop: '16px', flexWrap: 'wrap' }}>
        {rutina.dias.map((dia, idx) => (
          <button
            key={idx}
            style={{
              padding: '0.5rem 1rem',
              borderRadius: '8px',
              backgroundColor: idx === diaSeleccionado ? '#00ff88' : '#1a1a1a',
              color: idx === diaSeleccionado ? '#000' : '#fff',
              border: '1px solid #333'
            }}
            onClick={() => setDiaSeleccionado(idx)}
          >
            {dia.dia}
          </button>
        ))}
      </div>

      <div style={{ marginTop: '2rem' }}>
        <h3>Ejercicios</h3>
        {rutina.dias[diaSeleccionado].ejercicios.map((ej, i) => (
          <div key={i} style={{ marginBottom: '8px' }}>
            <strong>{ej.nombre}</strong> — {ej.repeticiones}
          </div>
        ))}

        {rutina.dias[diaSeleccionado].extras && (
          <>
            <h4 style={{ marginTop: '1.5rem' }}>Extras</h4>
            <ul>
              {rutina.dias[diaSeleccionado].extras.map((extra, i) => (
                <li key={i}>{extra}</li>
              ))}
            </ul>
          </>
        )}
      </div>
    </section>
  )
}

export default RutinaFamosoVista
