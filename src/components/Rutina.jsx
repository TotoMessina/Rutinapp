import { useEffect, useState } from "react"
import generarRutina from "../utils/generadorRutina"
import exportarPDF from "../utils/exportarPDF"
import { guardarEntrenamiento } from "../services/entrenamientos"
import { useAuth } from "../context/AuthContext.jsx"

function Rutina() {
  const [rutina, setRutina] = useState([])
  const { usuario } = useAuth()

  useEffect(() => {
    const datos = JSON.parse(localStorage.getItem("datosRutina"))
    const rutinaFamosa = JSON.parse(localStorage.getItem("rutinaFamosa"))

    if (rutinaFamosa) {
      setRutina(rutinaFamosa.ejercicios)
    } else {
      const nuevaRutina = generarRutina(datos)
      setRutina(nuevaRutina)
    }
  }, [])

  useEffect(() => {
    if (rutina.length > 0 && usuario) {
      guardarEntrenamiento(rutina, usuario)
    }
  }, [rutina, usuario])

  return (
    <section>
      {rutina.length > 0 ? (
        <>
          {rutina.map((ej, idx) => (
            <div key={idx}>
              <h3>{ej.nombre}</h3>
              <p>{ej.repeticiones}</p>
            </div>
          ))}
          <button onClick={() => exportarPDF(rutina)}>Descargar PDF</button>
        </>
      ) : (
        <p>No hay rutina para mostrar.</p>
      )}
    </section>
  )
}

export default Rutina
