// src/pages/LabView.jsx
import { Link, useParams, Navigate } from 'react-router-dom'
import { getLab } from '../data/labsData.js'

export default function LabView() {
  const { labId } = useParams()
  const lab = getLab(labId)

  if (!lab) return <Navigate to="/" replace />

  return (
    <div className="page">
      <div className="breadcrumb">
        <Link to="/">Laboratorios</Link>
        <span>/</span>
        <span style={{ color: 'var(--text)' }}>Laboratorio {lab.numero}</span>
      </div>

      <p className="hero-eyebrow" style={{ color: lab.color }}>
        LABORATORIO {lab.numero}
      </p>
      <h1 className="hero-title">{lab.titulo}</h1>
      {lab.subtitulo && <p className="muted" style={{ marginTop: -6 }}>{lab.subtitulo}</p>}
      <p className="hero-sub" style={{ marginBottom: 28 }}>{lab.descripcion}</p>

      <div className="exercise-list">
        {lab.exercises.map((ex) => (
          <Link key={ex.id} to={`/lab/${lab.id}/ejercicio/${ex.id}`} className="exercise-row">
            <div>
              <p className="exercise-row-title">{ex.titulo}</p>
              <p className="exercise-row-summary">{ex.resumen}</p>
            </div>
            <span className="exercise-row-arrow">→</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
