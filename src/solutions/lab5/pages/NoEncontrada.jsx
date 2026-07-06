// src/solutions/lab5/pages/NoEncontrada.jsx
import { Link } from 'react-router-dom'

export default function NoEncontrada() {
  return (
    <div>
      <h3>404 — Página no encontrada</h3>
      <p className="muted">La ruta que buscas no existe.</p>
      <Link to="/" className="btn btn-primario" style={{ display: 'inline-block', marginTop: 8 }}>
        Volver al inicio
      </Link>
    </div>
  )
}
