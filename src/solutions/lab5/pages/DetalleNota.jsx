// src/solutions/lab5/pages/DetalleNota.jsx
import { useParams, Link, useNavigate } from 'react-router-dom'
import { useNotas } from '../hooks/useNotas'

export default function DetalleNota() {
  const { id } = useParams()
  const { notas, eliminarNota } = useNotas()
  const navigate = useNavigate()

  const nota = notas.find((n) => n.id === id)

  if (!nota) {
    return (
      <div>
        <p>Nota no encontrada</p>
        <Link to="/notas" className="btn btn-secundario">Volver a notas</Link>
      </div>
    )
  }

  const handleEliminar = () => {
    if (window.confirm('¿Seguro que deseas eliminar esta nota?')) {
      eliminarNota(nota.id)
      navigate('/notas')
    }
  }

  return (
    <div>
      <h3>{nota.fijada && '📌 '}{nota.titulo}</h3>
      <p className="badge">{nota.categoria}</p>
      <p>{nota.contenido}</p>
      <p className="muted">Creada el {new Date(nota.fechaCreacion).toLocaleString()}</p>
      <p className="muted">{nota.fijada ? 'Esta nota está fijada' : 'Esta nota no está fijada'}</p>

      <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
        <Link to="/notas" className="btn btn-secundario">Volver a notas</Link>
        <Link to={`/notas/${nota.id}/editar`} className="btn btn-primario">Editar</Link>
        <button className="btn btn-peligro" onClick={handleEliminar}>Eliminar</button>
      </div>
    </div>
  )
}
