// src/pages/Home.jsx
import { Link } from 'react-router-dom'
import { labs } from '../data/labsData.js'

export default function Home() {
  return (
    <div className="page">
      <div className="hero">
        <p className="hero-eyebrow">Programación Web Avanzada</p>
        <h1 className="hero-title">Lab Explorer</h1>
        <p className="hero-sub">
          Selecciona un laboratorio para ver sus ejercicios y la solución funcional que se
          entregó para cada uno.
        </p>
      </div>

      <div className="lab-grid">
        {labs.map((lab) => (
          <Link key={lab.id} to={`/lab/${lab.id}`} className="lab-tile" style={{ '--tile-color': lab.color }}>
            <div className="lab-tile-numero">LABORATORIO {lab.numero}</div>
            <h3 className="lab-tile-titulo">{lab.titulo}</h3>
            <p className="lab-tile-desc">{lab.descripcion}</p>
            <div className="lab-tile-count">{lab.exercises.length} ejercicios</div>
          </Link>
        ))}
      </div>
    </div>
  )
}
