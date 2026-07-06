// src/solutions/lab3/Acordeon.jsx
import { useState } from 'react'

export default function Acordeon({ titulo, children, iniciaAbierto = false }) {
  const [expandido, setExpandido] = useState(iniciaAbierto)

  return (
    <div style={{ border: '1px solid var(--border)', borderRadius: 8, marginBottom: 10, overflow: 'hidden' }}>
      <button
        onClick={() => setExpandido((prev) => !prev)}
        style={{
          width: '100%',
          textAlign: 'left',
          background: 'var(--bg-panel-2)',
          color: 'var(--text)',
          border: 'none',
          padding: '10px 14px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontWeight: 600,
        }}
      >
        <span>{titulo}</span>
        <span>{expandido ? '▼' : '▶'}</span>
      </button>
      {expandido && <div style={{ padding: '12px 14px' }}>{children}</div>}
    </div>
  )
}
