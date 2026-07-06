// src/solutions/lab2/Perfil.jsx
export default function Perfil() {
  const nombre = 'Darién Vera'
  const profesion = 'Desarrollador Frontend'
  const experiencia = 3
  const disponible = true

  return (
    <div className="demo-card">
      <h2>{nombre}</h2>
      <p>{profesion}</p>
      <p>{experiencia} años de experiencia</p>
      <p>{disponible ? 'Disponible para contratar' : 'No disponible'}</p>
    </div>
  )
}
