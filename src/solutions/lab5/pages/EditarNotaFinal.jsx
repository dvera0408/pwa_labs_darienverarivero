// src/solutions/lab5/pages/EditarNotaFinal.jsx
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useNotas } from '../hooks/useNotas.js';
import { useToast } from '../hooks/useToast.js';
import FormularioNota from '../FormularioNota.jsx';

export default function EditarNotaFinal() {
  const { id } = useParams();
  const { notas, editarNota } = useNotas();
  const notificar = useToast();
  const navigate = useNavigate();

  const nota = notas.find((n) => n.id === id);

  if (!nota) {
    return (
      <div>
        <p>Nota no encontrada</p>
        <Link to="../.." className="btn btn-secundario">Volver</Link>
      </div>
    );
  }

  const guardar = (datos) => {
    editarNota(nota.id, datos);
    notificar('Nota actualizada', 'exito');
    navigate('..'); // vuelve al detalle de la nota
  };

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
        onCancelar={() => navigate('..')} // cancelar vuelve al detalle
      />
    </div>
  );
}
