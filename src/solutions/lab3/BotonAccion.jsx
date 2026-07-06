// src/solutions/lab3/BotonAccion.jsx
const VARIANTES = {
  primario: { background: 'var(--accent)', color: '#0b1710' },
  secundario: { background: 'var(--bg-panel-2)', color: 'var(--text)', border: '1px solid var(--border)' },
  peligro: { background: 'var(--danger)', color: '#2a0d0d' },
}

export default function BotonAccion({ texto, variante = 'primario', disabled = false, onClick }) {
  const estilo = VARIANTES[variante] ?? VARIANTES.primario

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        ...estilo,
        border: estilo.border ?? 'none',
        borderRadius: 8,
        padding: '8px 16px',
        fontWeight: 600,
        opacity: disabled ? 0.45 : 1,
        cursor: disabled ? 'not-allowed' : 'pointer',
      }}
    >
      {texto}
    </button>
  )
}
