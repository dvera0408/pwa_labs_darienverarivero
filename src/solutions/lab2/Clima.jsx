// src/solutions/lab2/Clima.jsx
export default function Clima() {
  const temperatura = 18

  let sensacion
  let recomendacion

  if (temperatura < 15) {
    sensacion = 'frío'
    recomendacion = 'Lleva abrigo'
  } else if (temperatura <= 25) {
    sensacion = 'agradable'
    recomendacion = 'Disfruta el día'
  } else {
    sensacion = 'caluroso'
    recomendacion = 'Mantente hidratado'
  }

  return (
    <div className="demo-card">
      <h2>Estado del clima</h2>
      <p>Temperatura: {temperatura}°C</p>
      <p>Sensación térmica: {sensacion}</p>
      <p>Recomendación: {recomendacion}</p>
    </div>
  )
}
