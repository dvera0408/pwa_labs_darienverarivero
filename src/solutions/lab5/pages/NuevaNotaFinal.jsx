// src/solutions/lab5/pages/NuevaNotaFinal.jsx
import { useNavigate } from 'react-router-dom';
import { useNotas } from '../hooks/useNotas.js';
import { useToast } from '../hooks/useToast.js';
import FormularioNota from '../FormularioNota.jsx';

export default function NuevaNotaFinal() {
  const { agregarNota } = useNotas();
  const notificar = useToast();
  const navigate = useNavigate();

  const guardar = (datos) => {
    agregarNota(datos);
    notificar('Nota agregada', 'exito');
    navigate('..'); // vuelve a /notas
  };

  return (
    <div>
      <h3>Nueva nota</h3>
      <FormularioNota
        textoBoton="Guardar nota"
        onGuardar={guardar}
        onCancelar={() => navigate('..')}
      />
    </div>
  );
}
