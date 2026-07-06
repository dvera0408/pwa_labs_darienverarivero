// src/solutions/lab5/pages/DetalleNotaFinal.jsx
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useNotas } from '../hooks/useNotas.js';
import { useToast } from '../hooks/useToast.js';

export default function DetalleNotaFinal() {
  const { id } = useParams();
  const { notas, eliminarNota } = useNotas();
  const notificar = useToast();
  const navigate = useNavigate();

  const nota = notas.find((n) => n.id === id);

  if (!nota) {
    return (
      <div>
        <p>Nota no encontrada</p>
        <Link to=".." className="btn btn-secundario">Volver a notas</Link>
      </div>
    );
  }

  const handleEliminar = () => {
    if (window.confirm('¿Seguro que deseas eliminar esta nota?')) {
      eliminarNota(nota.id);
      notificar('Nota eliminada', 'info');
      navigate('..'); // sube a /notas
    }
  };

  return (
    <div>
      <h3>{nota.fijada && '📌 '}{nota.titulo}</h3>
      <p className="badge">{nota.categoria}</p>
      <p>{nota.contenido}</p>
      <p className="muted">Creada el {new Date(nota.fechaCreacion).toLocaleString()}</p>
      <p className="muted">{nota.fijada ? 'Esta nota está fijada' : 'Esta nota no está fijada'}</p>

      <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
        <Link to=".." className="btn btn-secundario">Volver a notas</Link>
        <Link to="editar" className="btn btn-primario">Editar</Link>
        <button className="btn btn-peligro" onClick={handleEliminar}>Eliminar</button>
      </div>
    </div>
  );
}
