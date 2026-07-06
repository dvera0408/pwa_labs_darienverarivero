// src/solutions/lab5/pages/NuevaNota.jsx
import { useNavigate } from 'react-router-dom'
import { useNotas } from '../hooks/useNotas.js'
import FormularioNota from '../FormularioNota.jsx'

export default function NuevaNota() {
  const { agregarNota } = useNotas()
  const navigate = useNavigate()

  const guardar = (datos) => {
    agregarNota(datos)
    navigate('/notas')
  }

  return (
    <div>
      <h3>Nueva nota</h3>
      <FormularioNota textoBoton="Guardar nota" onGuardar={guardar} onCancelar={() => navigate('/notas')} />
    </div>
  )
}
