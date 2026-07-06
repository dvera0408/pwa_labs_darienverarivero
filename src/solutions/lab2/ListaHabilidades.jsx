// src/solutions/lab2/ListaHabilidades.jsx
export default function ListaHabilidades() {
  const habilidades = ['React', 'JavaScript', 'CSS', 'Node.js', 'Git', 'TypeScript']

  return (
    <div className="demo-card">
      <h2>Habilidades técnicas</h2>
      <p>Total de habilidades: {habilidades.length}</p>
      <ul>
        {habilidades.map((habilidad) => (
          <li key={habilidad}>{habilidad}</li>
        ))}
      </ul>
    </div>
  )
}
