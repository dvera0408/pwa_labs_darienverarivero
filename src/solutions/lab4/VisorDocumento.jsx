// src/solutions/lab4/VisorDocumento.jsx
import { useState, useEffect } from 'react'

function ContadorTitulo() {
  const [contador, setContador] = useState(0)

  useEffect(() => {
    document.title = `Contador: ${contador} - Mi App`

    return () => {
      document.title = 'Mi App'
    }
  }, [contador])

  return (
    <div className="demo-card">
      <p>
        Valor actual: <strong>{contador}</strong>
      </p>
      <p className="muted">
        Revisa el título de la pestaña del navegador: cambia en tiempo real. Al "desmontar" este
        componente, el título vuelve a "Mi App" gracias a la función de limpieza de useEffect.
      </p>
      <div style={{ display: 'flex', gap: 8 }}>
        <button className="btn btn-secundario" onClick={() => setContador((c) => c - 1)}>
          Decrementar
        </button>
        <button className="btn btn-primario" onClick={() => setContador((c) => c + 1)}>
          Incrementar
        </button>
      </div>
    </div>
  )
}

export default function VisorDocumento() {
  const [visible, setVisible] = useState(true)

  return (
    <div className="demo-card">
      <h2>Visor de documento</h2>
      <button className="btn btn-peligro" onClick={() => setVisible((v) => !v)} style={{ marginBottom: 12 }}>
        {visible ? 'Simular desmontaje' : 'Volver a montar'}
      </button>
      {visible ? <ContadorTitulo /> : <p className="muted">Componente desmontado. El título ya se restauró.</p>}
    </div>
  )
}
