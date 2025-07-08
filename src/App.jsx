import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Resultado from './pages/Resultado'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resultado" element={<Resultado />} />
      </Routes>
    </Router>
  )
}

export default App
