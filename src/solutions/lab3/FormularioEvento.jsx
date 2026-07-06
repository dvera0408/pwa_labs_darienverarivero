// src/solutions/lab3/FormularioEvento.jsx
import { useState } from 'react'
import Alerta from './Alerta.jsx'
import BotonAccion from './BotonAccion.jsx'

const ESTADO_INICIAL = {
  titulo: '',
  fecha: '',
  categoria: '',
  descripcion: '',
  esPublico: true,
}

export default function FormularioEvento() {
  const [form, setForm] = useState(ESTADO_INICIAL)
  const [errores, setErrores] = useState({})
  const [confirmado, setConfirmado] = useState(false)
  const [eventos, setEventos] = useState([])
  const [ultimoEvento, setUltimoEvento] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
  }

  const validar = () => {
    const nuevosErrores = {}
    const hoy = new Date().toISOString().split('T')[0]

    if (form.titulo.trim().length < 5) nuevosErrores.titulo = 'El título debe tener al menos 5 caracteres'
    if (!form.fecha) nuevosErrores.fecha = 'La fecha no puede estar vacía'
    else if (form.fecha < hoy) nuevosErrores.fecha = 'La fecha no puede ser pasada'
    if (!form.categoria) nuevosErrores.categoria = 'Debes seleccionar una categoría'
    if (form.descripcion.trim().length < 20) nuevosErrores.descripcion = 'La descripción debe tener al menos 20 caracteres'

    setErrores(nuevosErrores)
    return Object.keys(nuevosErrores).length === 0
  }

const handleSubmit = (e) => {
  e.preventDefault();
  if (!validar()) return;

  setUltimoEvento({ ...form });

  setEventos((prev) => [...prev, form]);
  setConfirmado(true);
  setForm(ESTADO_INICIAL);
  setTimeout(() => setConfirmado(false), 4000);
};

  const camposVacios =
    !form.titulo || !form.fecha || !form.categoria || !form.descripcion

  return (
    <div className="demo-card">
      <h2>Registro de evento</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        <label>
          Título
          <input className="input" name="titulo" value={form.titulo} onChange={handleChange} />
        </label>
        {errores.titulo && <Alerta tipo="error" titulo={errores.titulo} />}

        <label>
          Fecha
          <input className="input" type="date" name="fecha" value={form.fecha} onChange={handleChange} />
        </label>
        {errores.fecha && <Alerta tipo="error" titulo={errores.fecha} />}

        <label>
          Categoría
          <select className="input" name="categoria" value={form.categoria} onChange={handleChange}>
            <option value="">Selecciona una opción</option>
            <option value="conferencia">Conferencia</option>
            <option value="taller">Taller</option>
            <option value="seminario">Seminario</option>
            <option value="otro">Otro</option>
          </select>
        </label>
        {errores.categoria && <Alerta tipo="error" titulo={errores.categoria} />}

        <label>
          Descripción
          <textarea className="input" name="descripcion" rows={3} value={form.descripcion} onChange={handleChange} />
        </label>
        {errores.descripcion && <Alerta tipo="error" titulo={errores.descripcion} />}

        <label style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <input type="checkbox" name="esPublico" checked={form.esPublico} onChange={handleChange} />
          Evento público
        </label>

        <div>
          <BotonAccion texto="Registrar evento" variante="primario" disabled={camposVacios} />
        </div>
      </form>

    {confirmado && ultimoEvento && (
      <Alerta tipo="exito" titulo="Evento registrado con éxito">
        <p>
          <strong>{ultimoEvento.titulo}</strong> — {ultimoEvento.fecha} —{' '}
          {ultimoEvento.categoria} —{' '}
          {ultimoEvento.esPublico ? 'Público' : 'Privado'}
        </p>
     </Alerta>
    )}

      {eventos.length > 0 && (
        <>
          <h3 style={{ marginTop: 20 }}>Eventos registrados en esta sesión</h3>
          <ul>
            {eventos.map((ev, i) => (
              <li key={i}>
                <strong>{ev.titulo}</strong> — {ev.fecha} — {ev.categoria} —{' '}
                {ev.esPublico ? 'Público' : 'Privado'}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  )
}
