// src/solutions/lab3/Alerta.jsx
const CONFIG = {
  exito: { icono: '✅', color: '#1f3a2e', texto: '#7fe6a8' },
  advertencia: { icono: '⚠️', color: '#3a301a', texto: '#f0c168' },
  error: { icono: '⛔', color: '#3a1f1f', texto: '#f16c6c' },
  info: { icono: 'ℹ️', color: '#1a2b3a', texto: '#7db8f0' },
}

export default function Alerta({ tipo = 'info', titulo, children }) {
  const { icono, color, texto } = CONFIG[tipo] ?? CONFIG.info

  return (
    <div
      style={{
        background: color,
        color: texto,
        border: `1px solid ${texto}33`,
        borderRadius: 8,
        padding: '10px 14px',
        margin: '8px 0',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontWeight: 700 }}>
        <span>{icono}</span>
        <span>{titulo}</span>
      </div>
      {children && <div style={{ marginTop: 6, fontWeight: 400 }}>{children}</div>}
    </div>
  )
}
