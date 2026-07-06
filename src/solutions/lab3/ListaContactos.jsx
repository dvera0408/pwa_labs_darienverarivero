// src/solutions/lab3/ListaContactos.jsx
import { useState } from 'react'
import Alerta from './Alerta.jsx'
import Modal from './Modal.jsx'
import BotonAccion from './BotonAccion.jsx'

const CONTACTOS_INICIALES = [
  { id: 1, nombre: 'Ana Torres', telefono: '8091234567', favorito: true },
  { id: 2, nombre: 'Luis Pérez', telefono: '8092345678', favorito: false },
  { id: 3, nombre: 'María Gómez', telefono: '8293456789', favorito: true },
  { id: 4, nombre: 'Carlos Ruiz', telefono: '8494567890', favorito: false },
  { id: 5, nombre: 'Sofía Díaz', telefono: '8095678901', favorito: false },
]

export default function ListaContactos() {
  const [contactos, setContactos] = useState(CONTACTOS_INICIALES)
  const [busqueda, setBusqueda] = useState('')
  const [soloFavoritos, setSoloFavoritos] = useState(false)
  const [contactoAEliminar, setContactoAEliminar] = useState(null)

  const termino = busqueda.toLowerCase()
  const filtrados = contactos
    .filter((c) => (soloFavoritos ? c.favorito : true))
    .filter(
      (c) =>
        c.nombre.toLowerCase().includes(termino) || c.telefono.toLowerCase().includes(termino)
    )

  const totalFavoritos = contactos.filter((c) => c.favorito).length

  const toggleFavorito = (id) => {
    setContactos((prev) => prev.map((c) => (c.id === id ? { ...c, favorito: !c.favorito } : c)))
  }

  const confirmarEliminar = () => {
    setContactos((prev) => prev.filter((c) => c.id !== contactoAEliminar.id))
    setContactoAEliminar(null)
  }

  return (
    <div className="demo-card">
      <h2>Lista de contactos</h2>
      <p>
        {totalFavoritos} de {contactos.length} son favoritos · {filtrados.length} resultado(s) de búsqueda
      </p>

      <div style={{ display: 'flex', gap: 8, marginBottom: 12, flexWrap: 'wrap' }}>
        <input
          type="text"
          placeholder="Buscar por nombre o teléfono..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          className="input"
        />
        <BotonAccion
          texto={soloFavoritos ? 'Mostrar todos' : 'Mostrar solo favoritos'}
          variante="secundario"
          onClick={() => setSoloFavoritos((v) => !v)}
        />
      </div>

      {filtrados.length === 0 ? (
        <Alerta tipo="info" titulo="No se encontraron contactos" />
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {filtrados.map((contacto) => (
            <li
              key={contacto.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                padding: '8px 0',
                borderBottom: '1px solid var(--border-soft)',
              }}
            >
              <button
                onClick={() => toggleFavorito(contacto.id)}
                style={{ background: 'none', border: 'none', fontSize: 18, color: 'var(--warning)' }}
                title="Alternar favorito"
              >
                {contacto.favorito ? '★' : '☆'}
              </button>
              <div style={{ flex: 1 }}>
                <div>{contacto.nombre}</div>
                <div className="muted">{contacto.telefono}</div>
              </div>
              <BotonAccion
                texto="Eliminar"
                variante="peligro"
                onClick={() => setContactoAEliminar(contacto)}
              />
            </li>
          ))}
        </ul>
      )}

      <Modal titulo="Confirmar eliminación" abierto={!!contactoAEliminar}>
        <p>¿Estás seguro de eliminar a {contactoAEliminar?.nombre}?</p>
        <div style={{ display: 'flex', gap: 8 }}>
          <BotonAccion texto="Cancelar" variante="secundario" onClick={() => setContactoAEliminar(null)} />
          <BotonAccion texto="Eliminar" variante="peligro" onClick={confirmarEliminar} />
        </div>
      </Modal>
    </div>
  )
}
