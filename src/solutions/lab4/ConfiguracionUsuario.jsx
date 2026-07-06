// src/solutions/lab4/ConfiguracionUsuario.jsx
import { useState, useEffect } from 'react'

const CLAVE = 'config-usuario'
const VALORES_POR_DEFECTO = { nombre: '', tema: 'claro', notificaciones: true }

function leerConfiguracionInicial() {
  try {
    const guardado = localStorage.getItem(CLAVE)
    return guardado ? JSON.parse(guardado) : VALORES_POR_DEFECTO
  } catch (error) {
    console.error('Error leyendo configuración de localStorage:', error)
    return VALORES_POR_DEFECTO
  }
}

export default function ConfiguracionUsuario() {
  const [config, setConfig] = useState(leerConfiguracionInicial)

  useEffect(() => {
    try {
      localStorage.setItem(CLAVE, JSON.stringify(config))
    } catch (error) {
      console.error('Error guardando configuración en localStorage:', error)
    }
  }, [config])

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setConfig((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
  }

  const restablecer = () => {
    localStorage.removeItem(CLAVE)
    setConfig(VALORES_POR_DEFECTO)
  }

  return (
    <div className="demo-card">
      <h2>Configuración de usuario</h2>
      <p className="muted">Los valores se guardan automáticamente en localStorage al modificarlos.</p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, maxWidth: 320 }}>
        <label>
          Nombre
          <input className="input" name="nombre" value={config.nombre} onChange={handleChange} />
        </label>

        <label>
          Tema
          <select className="input" name="tema" value={config.tema} onChange={handleChange}>
            <option value="claro">Claro</option>
            <option value="oscuro">Oscuro</option>
          </select>
        </label>

        <label style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <input type="checkbox" name="notificaciones" checked={config.notificaciones} onChange={handleChange} />
          Recibir notificaciones
        </label>

        <button className="btn btn-peligro" onClick={restablecer} style={{ alignSelf: 'flex-start' }}>
          Restablecer valores
        </button>
      </div>

      <h3 style={{ marginTop: 20 }}>Vista previa</h3>
      <pre className="code-block">{JSON.stringify(config, null, 2)}</pre>
    </div>
  )
}
