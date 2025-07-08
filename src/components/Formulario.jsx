import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Formulario() {
  const [formData, setFormData] = useState({
    edad: '',
    peso: '',
    objetivo: '',
    tiempo: '',
    equipamiento: ''
  })

  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    localStorage.setItem("datosRutina", JSON.stringify(formData))
    navigate("/resultado")
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="number" name="edad" placeholder="Edad" onChange={handleChange} required />
      <input type="number" name="peso" placeholder="Peso" onChange={handleChange} required />
      <select name="objetivo" onChange={handleChange} required>
        <option value="">Elegí tu objetivo</option>
        <option value="estética">Estética</option>
        <option value="salud">Salud</option>
        <option value="rendimiento">Rendimiento</option>
      </select>
      <input type="number" name="tiempo" placeholder="Minutos disponibles" onChange={handleChange} required />
      <input type="text" name="equipamiento" placeholder="¿Qué tenés para entrenar?" onChange={handleChange} required />
      <button type="submit">Generar rutina</button>
    </form>
  )
}

export default Formulario
