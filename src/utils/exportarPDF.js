import jsPDF from 'jspdf'

export default function exportarPDF(rutina, nombre = "Mi Rutina") {
  const doc = new jsPDF()

  doc.setFontSize(18)
  doc.text(nombre, 20, 20)

  doc.setFontSize(12)
  rutina.forEach((ej, index) => {
    const y = 30 + index * 10
    doc.text(`${index + 1}. ${ej.nombre} - ${ej.repeticiones}`, 20, y)
  })

  doc.save(`${nombre.replace(/\s+/g, '_')}.pdf`)
}
