// src/solutions/lab2/MensajeBienvenida.jsx
export default function MensajeBienvenida() {
  const usuario = { nombre: 'Darién', rol: 'admin' } // probar también con: null

  if (!usuario) {
    return (
      <div className="demo-card">
        <p>Por favor, inicia sesión para continuar</p>
      </div>
    )
  }

  return (
    <div className="demo-card">
      <h2>Bienvenido, {usuario.nombre}</h2>
      <p>Rol: {usuario.rol}</p>
      {usuario.rol === 'admin' && <p>Tienes acceso completo al sistema</p>}
    </div>
  )
}
