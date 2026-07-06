// src/solutions/lab2/ListaTareas.jsx
const tareas = [
  { id: 1, titulo: 'Revisar Pull Request', completada: false, prioridad: 'alta' },
  { id: 2, titulo: 'Actualizar dependencias', completada: false, prioridad: 'media' },
  { id: 3, titulo: 'Escribir pruebas unitarias', completada: false, prioridad: 'alta' },
  { id: 4, titulo: 'Diseñar mockup del dashboard', completada: true, prioridad: 'baja' },
  { id: 5, titulo: 'Configurar CI/CD', completada: true, prioridad: 'media' },
  { id: 6, titulo: 'Documentar API', completada: false, prioridad: 'baja' },
  { id: 7, titulo: 'Reunión con el equipo', completada: true, prioridad: 'media' },
]

export default function ListaTareas() {
  const pendientes = tareas.filter((t) => !t.completada)
  const completadas = tareas.filter((t) => t.completada)

  return (
    <div className="demo-card">
      <h2>Tareas pendientes ({pendientes.length})</h2>
      {pendientes.length === 0 ? (
        <p className="muted">No hay tareas pendientes</p>
      ) : (
        <ul>
          {pendientes.map((tarea) => (
            <li
              key={tarea.id}
              style={
                tarea.prioridad === 'alta'
                  ? { color: 'var(--danger)', fontWeight: 700 }
                  : undefined
              }
            >
              {tarea.titulo} <span className="badge">{tarea.prioridad}</span>
            </li>
          ))}
        </ul>
      )}

      <h2>Tareas completadas ({completadas.length})</h2>
      {completadas.length === 0 ? (
        <p className="muted">No hay tareas completadas</p>
      ) : (
        <ul>
          {completadas.map((tarea) => (
            <li key={tarea.id} style={{ textDecoration: 'line-through' }}>
              {tarea.titulo} <span className="badge">{tarea.prioridad}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
