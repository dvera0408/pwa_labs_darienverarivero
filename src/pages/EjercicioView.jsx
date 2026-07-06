// src/pages/EjercicioView.jsx
import { useState } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import { Component } from 'react'
import { getLab, getExercise } from '../data/labsData.js'
import { registry } from '../data/registry.jsx'
import { sourceRegistry } from '../data/sourceRegistry.js'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { error: null }
  }
  static getDerivedStateFromError(error) {
    return { error }
  }
  render() {
    if (this.state.error) {
      return (
        <div className="demo-card" style={{ borderColor: 'var(--danger)' }}>
          <p style={{ color: 'var(--danger)' }}>Ocurrió un error al renderizar esta vista previa.</p>
          <pre className="code-block">{String(this.state.error)}</pre>
        </div>
      )
    }
    return this.props.children
  }
}

export default function EjercicioView() {
  const { labId, exId } = useParams()
  const lab = getLab(labId)
  const ex = getExercise(labId, exId)
  const [tab, setTab] = useState('preview')
  const [archivoActivo, setArchivoActivo] = useState(0)

  if (!lab || !ex) return <Navigate to="/" replace />

  const Componente = ex.key ? registry[ex.key] : null
  const archivos = ex.key ? sourceRegistry[ex.key] ?? [] : []

  return (
    <div className="page">
      <div className="breadcrumb">
        <Link to="/">Laboratorios</Link>
        <span>/</span>
        <Link to={`/lab/${lab.id}`}>Laboratorio {lab.numero}</Link>
        <span>/</span>
        <span style={{ color: 'var(--text)' }}>{ex.titulo}</span>
      </div>

      <h1 className="hero-title" style={{ fontSize: 26 }}>{ex.titulo}</h1>
      <p className="hero-sub" style={{ marginBottom: 24 }}>{ex.resumen}</p>

      <div className="tabs">
        <button className={`tab-btn ${tab === 'preview' ? 'active' : ''}`} onClick={() => setTab('preview')}>
          Vista previa
        </button>
        <button className={`tab-btn ${tab === 'code' ? 'active' : ''}`} onClick={() => setTab('code')}>
          Código
        </button>
      </div>

      {tab === 'preview' ? (
        <div className="preview-frame">
          <ErrorBoundary key={`${labId}-${exId}`}>
            {Componente ? <Componente /> : <p>Sin vista previa disponible.</p>}
          </ErrorBoundary>
        </div>
      ) : (
        <div>
          {archivos.length > 1 && (
            <div className="file-tabs">
              {archivos.map((archivo, i) => (
                <button
                  key={archivo.nombre}
                  className={`file-tab ${archivoActivo === i ? 'active' : ''}`}
                  onClick={() => setArchivoActivo(i)}
                >
                  {archivo.nombre}
                </button>
              ))}
            </div>
          )}
          {archivos.length === 1 && <p className="muted" style={{ marginBottom: 8 }}>{archivos[0].nombre}</p>}
          <pre className="code-block">{archivos[archivoActivo]?.codigo ?? 'Sin código disponible.'}</pre>
        </div>
      )}
    </div>
  )
}
