import { useEffect, useState } from "react"
import Rutina from "../components/Rutina"
import RutinaFamosoVista from "../components/RutinaFamosoVista"
import { useAuth } from "../context/AuthContext.jsx"
import { Navigate } from "react-router-dom"

function Resultado() {
  const [rutinaFamosa, setRutinaFamosa] = useState(null)
  const { usuario, cargando } = useAuth()

  useEffect(() => {
    const rutinaGuardada = JSON.parse(localStorage.getItem("rutinaFamosa"))
    if (rutinaGuardada) {
      setRutinaFamosa(rutinaGuardada)
    }
  }, [])

  if (cargando) return <div>Cargando...</div>
  if (!usuario) return <Navigate to="/" replace />

  return (
    <main>
      {rutinaFamosa ? (
        <RutinaFamosoVista />
      ) : (
        <Rutina />
      )}
    </main>
  )
}

export default Resultado
