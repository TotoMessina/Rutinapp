export default function generarRutina(datos) {
  const { objetivo, tiempo, equipamiento } = datos

  // TODO: mejorar la lógica con IA o reglas
  const base = [
    { nombre: "Sentadillas", repeticiones: "3 x 15" },
    { nombre: "Flexiones", repeticiones: "3 x 10" },
    { nombre: "Planchas", repeticiones: "3 x 30s" }
  ]

  if (equipamiento.includes("mochila")) {
    base.push({ nombre: "Remo con mochila", repeticiones: "3 x 12" })
  }

  if (tiempo < 10) {
    return base.slice(0, 2)
  }

  return base
}
