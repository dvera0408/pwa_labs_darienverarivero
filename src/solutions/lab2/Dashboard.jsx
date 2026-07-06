// src/solutions/lab2/Dashboard.jsx
export default function Dashboard() {
  const usuario = { nombre: 'Darién Vera', email: 'darien@correo.com', rol: 'Estudiante' }

  const notificaciones = [
    { id: 1, mensaje: 'Tu tarea de Investigación de Operaciones fue calificada', leida: false },
    { id: 2, mensaje: 'Nuevo mensaje en Equipo 5', leida: false },
    { id: 3, mensaje: 'Recordatorio: entrega de laboratorio mañana', leida: true },
    { id: 4, mensaje: 'Se actualizó el sílabo de Informática', leida: true },
  ]

  const actividadReciente = [
    { id: 1, accion: 'Subió el Laboratorio 4', fecha: '2026-07-03' },
    { id: 2, accion: 'Comentó en el foro de Bases de Datos', fecha: '2026-07-02' },
    { id: 3, accion: 'Actualizó su perfil', fecha: '2026-06-30' },
  ]

  const noLeidas = notificaciones.filter((n) => !n.leida).length

  return (
    <>
      <div className="demo-card">
        <h3>Información del usuario</h3>
        <p>Nombre: {usuario.nombre}</p>
        <p>Email: {usuario.email}</p>
        <p>Rol: {usuario.rol}</p>
      </div>

      <div className="demo-card">
        <h3>Notificaciones ({noLeidas} sin leer)</h3>
        {noLeidas === 0 ? (
          <p className="muted">No tienes notificaciones pendientes</p>
        ) : (
          <ul>
            {notificaciones.map((n) => (
              <li
                key={n.id}
                style={{
                  fontWeight: n.leida ? 400 : 700,
                  opacity: n.leida ? 0.6 : 1,
                }}
              >
                {n.mensaje}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="demo-card">
        <h3>Actividad reciente</h3>
        {actividadReciente.length === 0 ? (
          <p className="muted">No hay actividad reciente</p>
        ) : (
          <ul>
            {actividadReciente.map((a) => (
              <li key={a.id}>
                {a.accion} — <span className="muted">{a.fecha}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  )
}
