// src/solutions/lab5/FormularioNota.jsx
import { useState } from 'react'

const CATEGORIAS = ['personal', 'trabajo', 'estudio', 'ideas']

export default function FormularioNota({
  valoresIniciales = { titulo: '', contenido: '', categoria: 'personal', fijada: false },
  textoBoton = 'Guardar',
  onGuardar,
  onCancelar,
}) {
  const [form, setForm] = useState(valoresIniciales)
  const [errores, setErrores] = useState({})

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
  }

  const validar = () => {
    const nuevosErrores = {}
    if (form.titulo.trim().length < 3) nuevosErrores.titulo = 'Mínimo 3 caracteres'
    if (form.contenido.trim().length < 10) nuevosErrores.contenido = 'Mínimo 10 caracteres'
    setErrores(nuevosErrores)
    return Object.keys(nuevosErrores).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validar()) return
    onGuardar(form)
  }

  const hayErrores = form.titulo.trim().length < 3 || form.contenido.trim().length < 10

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 10, maxWidth: 420 }}>
      <label>
        Título
        <input className="input" name="titulo" value={form.titulo} onChange={handleChange} />
      </label>
      {errores.titulo && <p style={{ color: 'var(--danger)', margin: 0 }}>{errores.titulo}</p>}

      <label>
        Contenido
        <textarea className="input" name="contenido" rows={4} value={form.contenido} onChange={handleChange} />
      </label>
      {errores.contenido && <p style={{ color: 'var(--danger)', margin: 0 }}>{errores.contenido}</p>}

      <label>
        Categoría
        <select className="input" name="categoria" value={form.categoria} onChange={handleChange}>
          {CATEGORIAS.map((c) => (
            <option key={c} value={c}>
              {c[0].toUpperCase() + c.slice(1)}
            </option>
          ))}
        </select>
      </label>

      <label style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <input type="checkbox" name="fijada" checked={form.fijada} onChange={handleChange} />
        Fijar nota
      </label>

      <div style={{ display: 'flex', gap: 8 }}>
        <button type="submit" className="btn btn-primario" disabled={hayErrores}>
          {textoBoton}
        </button>
        <button type="button" className="btn btn-secundario" onClick={onCancelar}>
          Cancelar
        </button>
      </div>
    </form>
  )
}
