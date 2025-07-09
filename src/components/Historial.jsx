import { useEffect, useState } from "react"
import { obtenerEntrenamientos } from "../services/entrenamientos"
import { useAuth } from "../context/AuthContext.jsx"

function Historial() {
  const [rutinas, setRutinas] = useState([])
  const { usuario } = useAuth()

  useEffect(() => {
    if (usuario) {
      obtenerEntrenamientos(usuario).then(setRutinas)
    }
  }, [usuario])

  return (
    <section>
      <h2>📊 Mi historial de entrenamientos</h2>
      {rutinas.length === 0 ? (
        <p>Aún no registraste entrenamientos.</p>
      ) : (
        <div style={{ display: "grid", gap: "1rem" }}>
          {rutinas.map((r, i) => (
            <div
              key={r.id || i}
              style={{
                backgroundColor: "#1a1a1a",
                padding: "1rem",
                borderRadius: "12px",
                color: "#fff",
                border: "1px solid #333"
              }}
            >
              <p style={{ marginBottom: "0.5rem" }}>
                📅 {new Date(r.fecha).toLocaleDateString()} — 🕒{' '}
                {new Date(r.fecha).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </p>
              <ul style={{ paddingLeft: "1.2rem" }}>
                {(r.rutina?.length ? r.rutina : r.rutina?.ejercicios || []).map((ej, idx) => (
                  <li key={idx}>
                    {ej.nombre} — <strong>{ej.repeticiones}</strong>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}

export default Historial
