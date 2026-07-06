// src/solutions/lab3/Contador.jsx
import { useState } from 'react'
import BotonAccion from './BotonAccion.jsx'
import Alerta from './Alerta.jsx'

export default function Contador() {
  const [valor, setValor] = useState(0)

  return (
    <div className="demo-card">
      <h2 style={{ fontSize: 40, margin: '0 0 12px' }}>{valor}</h2>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 12 }}>
        <BotonAccion
          texto="Decrementar"
          variante="secundario"
          disabled={valor === 0}
          onClick={() => setValor((v) => v - 1)}
        />
        <BotonAccion texto="Incrementar" variante="primario" onClick={() => setValor((v) => v + 1)} />
        <BotonAccion texto="Incrementar +5" variante="primario" onClick={() => setValor((v) => v + 5)} />
        <BotonAccion texto="Reiniciar" variante="peligro" onClick={() => setValor(() => 0)} />
      </div>

      {valor === 0 && <Alerta tipo="info" titulo="El contador está en cero" />}
      {valor > 10 && <Alerta tipo="advertencia" titulo="¡Valor alto!" />}
    </div>
  )
}
