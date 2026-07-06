// src/solutions/lab2/Tarjeta.jsx
export default function Tarjeta() {
  const datos = {
    titulo: 'Curso de React Avanzado',
    descripcion: 'Domina hooks, context y patrones de composición para construir interfaces escalables.',
    etiquetas: ['React', 'Hooks', 'Frontend'],
    destacado: true,
  }

  return (
    <div
      style={{
        border: datos.destacado ? '2px solid var(--lab2)' : '1px solid var(--border)',
        background: datos.destacado ? 'rgba(240,168,104,0.08)' : 'var(--bg-card)',
        borderRadius: 12,
        padding: 20,
        boxShadow: '0 4px 14px rgba(0,0,0,0.25)',
        maxWidth: 360,
      }}
    >
      <h3 style={{ margin: '0 0 8px' }}>{datos.titulo}</h3>
      <p style={{ margin: '0 0 12px', color: 'var(--text-dim)' }}>{datos.descripcion}</p>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        {datos.etiquetas.map((etiqueta) => (
          <span
            key={etiqueta}
            style={{
              background: 'var(--accent-soft)',
              color: 'var(--accent)',
              borderRadius: 999,
              padding: '4px 10px',
              fontSize: 12,
              fontWeight: 600,
            }}
          >
            {etiqueta}
          </span>
        ))}
      </div>
    </div>
  )
}
