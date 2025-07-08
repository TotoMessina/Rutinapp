import { useEffect, useState } from "react"
import Rutina from "../components/Rutina"
import RutinaFamosoVista from "../components/RutinaFamosoVista"

function Resultado() {
  const [rutinaFamosa, setRutinaFamosa] = useState(null)

  useEffect(() => {
    const rutinaGuardada = JSON.parse(localStorage.getItem("rutinaFamosa"))
    if (rutinaGuardada) {
      setRutinaFamosa(rutinaGuardada)
    }
  }, [])

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
