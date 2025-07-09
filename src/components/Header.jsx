import { useAuth } from '../context/AuthContext.jsx';
import Logout from './Logout';
import Login from './Login';

function Header({ modoOscuro, setModoOscuro }) {
  const { usuario } = useAuth();
  const toggleModo = () => {
    const nuevoModo = !modoOscuro
    setModoOscuro(nuevoModo)
    localStorage.setItem("modoOscuro", nuevoModo)
  }

  return (
    <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: "600" }}>Rutinapp 💪</h1>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        {usuario ? (
          <>
            <span style={{ color: modoOscuro ? '#fff' : '#000', fontWeight: 500 }}>
              {usuario.email}
            </span>
            <Logout />
          </>
        ) : (
          <Login />
        )}
        <button
          onClick={toggleModo}
          style={{
            backgroundColor: "transparent",
            border: "1px solid #555",
            borderRadius: "50%",
            width: "40px",
            height: "40px",
            fontSize: "1.2rem",
            color: modoOscuro ? "#fff" : "#000",
            cursor: "pointer",
            transition: "all 0.3s ease",
            justifyContent: "center",
            alignItems: "center",
            display: "flex"
          }}
          title="Cambiar modo"
        >
          {modoOscuro ? "☀️" : "🌙"}
        </button>
      </div>
    </header>
  )
}

export default Header
