// src/solutions/lab4/TemporizadorPomodoro.jsx
import { useState, useEffect, useRef } from 'react'

const TIEMPO_INICIAL = 1500 // 25 minutos

export default function TemporizadorPomodoro() {
  const [segundos, setSegundos] = useState(TIEMPO_INICIAL)
  const [activo, setActivo] = useState(false)
  const notificado = useRef(false)

  useEffect(() => {
    if (!activo) return undefined

    const intervalo = setInterval(() => {
      setSegundos((prev) => {
        if (prev <= 1) {
          clearInterval(intervalo)
          setActivo(false)
          if (!notificado.current) {
            notificado.current = true
            alert('¡Tiempo terminado!')
          }
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(intervalo)
  }, [activo])

  const iniciar = () => {
    if (segundos === 0) return
    notificado.current = false
    setActivo(true)
  }

  const pausar = () => setActivo(false)

  const reiniciar = () => {
    setActivo(false)
    notificado.current = false
    setSegundos(TIEMPO_INICIAL)
  }

  const mm = String(Math.floor(segundos / 60)).padStart(2, '0')
  const ss = String(segundos % 60).padStart(2, '0')

  return (
    <div className="demo-card">
      <h2>Temporizador Pomodoro</h2>
      <p style={{ fontSize: 48, fontFamily: 'var(--mono)', margin: '12px 0' }}>
        {mm}:{ss}
      </p>
      {segundos === 0 && <p style={{ color: 'var(--danger)' }}>¡Tiempo terminado!</p>}
      <div style={{ display: 'flex', gap: 8 }}>
        <button className="btn btn-primario" onClick={iniciar} disabled={activo || segundos === 0}>
          Iniciar
        </button>
        <button className="btn btn-secundario" onClick={pausar} disabled={!activo}>
          Pausar
        </button>
        <button className="btn btn-peligro" onClick={reiniciar}>
          Reiniciar
        </button>
      </div>
    </div>
  )
}
