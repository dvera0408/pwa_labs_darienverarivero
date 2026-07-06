// src/solutions/lab5/pages/Inicio.jsx
import { useNotas } from '../hooks/useNotas.js'

export default function Inicio() {
  const { notas } = useNotas()

  const fijadas = notas.filter((n) => n.fijada).length
  const porCategoria = notas.reduce((acc, n) => {
    acc[n.categoria] = (acc[n.categoria] ?? 0) + 1
    return acc
  }, {})

  return (
    <div>
      <h3>Bienvenido a MisNotas</h3>
      <p className="muted">Tu espacio para organizar ideas, tareas y pendientes.</p>

      <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', marginTop: 12 }}>
        <div className="stat-box">
          <div className="stat-number">{notas.length}</div>
          <div className="muted">Notas totales</div>
        </div>
        <div className="stat-box">
          <div className="stat-number">{fijadas}</div>
          <div className="muted">Notas fijadas</div>
        </div>
      </div>

      <h4 style={{ marginTop: 20 }}>Notas por categoría</h4>
      <ul>
        {Object.entries(porCategoria).map(([categoria, cantidad]) => (
          <li key={categoria}>
            {categoria}: {cantidad}
          </li>
        ))}
      </ul>
    </div>
  )
}
