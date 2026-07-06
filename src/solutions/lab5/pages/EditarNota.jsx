// src/solutions/lab5/pages/EditarNota.jsx
import { useParams, useNavigate, Link } from 'react-router-dom'
import { useNotas } from '../hooks/useNotas.js'
import FormularioNota from '../FormularioNota.jsx'

export default function EditarNota() {
  const { id } = useParams()
  const { notas, editarNota } = useNotas()
  const navigate = useNavigate()

  const nota = notas.find((n) => n.id === id)

  if (!nota) {
    return (
      <div>
        <p>Nota no encontrada</p>
        <Link to="/notas" className="btn btn-secundario">Volver</Link>
      </div>
    )
  }

  const guardar = (datos) => {
    editarNota(nota.id, datos)
    navigate(`/notas/${nota.id}`)
  }

  return (
    <div>
      <h3>Editar nota</h3>
      <FormularioNota
        valoresIniciales={{
          titulo: nota.titulo,
          contenido: nota.contenido,
          categoria: nota.categoria,
          fijada: nota.fijada,
        }}
        textoBoton="Guardar cambios"
        onGuardar={guardar}
        onCancelar={() => navigate(`/notas/${nota.id}`)}
      />
    </div>
  )
}
