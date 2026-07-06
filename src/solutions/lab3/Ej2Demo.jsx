// src/solutions/lab3/Ej2Demo.jsx
import { useState } from 'react'
import Modal from './Modal.jsx'
import BotonAccion from './BotonAccion.jsx'
import Contador from './Contador.jsx'

export default function Ej2Demo() {
  const [modalAbierto, setModalAbierto] = useState(false)

  return (
    <div className="demo-card">
      <h4 className="seccion-titulo">Modal + BotonAccion</h4>
      <BotonAccion texto="Abrir modal" variante="primario" onClick={() => setModalAbierto(true)} />

      <Modal titulo="Confirmación" abierto={modalAbierto}>
        <p>Este es el contenido del modal, controlado por estado en el componente padre.</p>
        <BotonAccion texto="Cerrar" variante="secundario" onClick={() => setModalAbierto(false)} />
      </Modal>

      <h4 className="seccion-titulo" style={{ marginTop: 24 }}>Contador</h4>
      <Contador />
    </div>
  )
}
