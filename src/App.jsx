import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Resultado from './pages/Resultado'
import Historial from './components/Historial'
import { AuthProvider } from './context/AuthContext.jsx'
import RutaPrivada from './components/RutaPrivada'
import Registro from './components/Registro'

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/resultado" element={<Resultado />} />
          <Route path="/historial" element={
            <RutaPrivada>
              <Historial />
            </RutaPrivada>
          } />
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App
