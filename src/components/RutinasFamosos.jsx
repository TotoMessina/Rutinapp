import rutinasFamosos from '../data/rutinasFamosos'

// En algún lugar de tu UI
rutinasFamosos.map(r => (
  <button key={r.id} onClick={() => {
    localStorage.setItem('rutinaFamosa', JSON.stringify(r))
    navigate('/resultado')
  }}>
    {r.nombre}
  </button>
))
