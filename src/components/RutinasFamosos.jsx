import rutinasFamosos from '../data/rutinasFamosos'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'
import { guardarEntrenamiento } from '../services/entrenamientos'

function RutinasFamosos() {
  const navigate = useNavigate()
  const { usuario } = useAuth()

  const handleClick = async (r) => {
    localStorage.setItem('rutinaFamosa', JSON.stringify(r))
    if (usuario) {
      await guardarEntrenamiento(r.ejercicios, usuario)
    }
    navigate('/resultado')
  }

  return (
    <div>
      {rutinasFamosos.map(r => (
        <button key={r.id} onClick={() => handleClick(r)}>
          {r.nombre}
        </button>
      ))}
    </div>
  )
}

export default RutinasFamosos
