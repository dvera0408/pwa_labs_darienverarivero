// src/solutions/lab4/Ej4Demo.jsx
import { useLocalStorage } from './hooks/useLocalStorage.js'
import { useNotificacion } from './hooks/useNotificacion.js'
import Alerta from '../lab3/Alerta.jsx'
import BotonAccion from '../lab3/BotonAccion.jsx'

const TIPO_ALERTA = { exito: 'exito', error: 'error', info: 'info' }

export default function Ej4Demo() {
  const [notas, setNotas] = useLocalStorage('demo-notas-rapidas', [])
  const { notificacion, mostrar } = useNotificacion(3000)

  const agregarNota = () => {
    setNotas((prev) => [...prev, `Nota #${prev.length + 1}`])
    mostrar('Nota agregada correctamente', TIPO_ALERTA.exito)
  }

  const limpiarNotas = () => {
    setNotas([])
    mostrar('Notas eliminadas', TIPO_ALERTA.info)
  }

  return (
    <div className="demo-card">
      <h2>useLocalStorage + useNotificacion</h2>
      <p className="muted">
        "notas" persiste en localStorage bajo la clave <code>demo-notas-rapidas</code>. Recarga la
        página y seguirán ahí.
      </p>

      <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
        <BotonAccion texto="Agregar nota" variante="primario" onClick={agregarNota} />
        <BotonAccion texto="Limpiar todo" variante="peligro" onClick={limpiarNotas} />
      </div>

      {notificacion && <Alerta tipo={notificacion.tipo} titulo={notificacion.mensaje} />}

      {notas.length === 0 ? (
        <p className="muted">No hay notas guardadas todavía.</p>
      ) : (
        <ul>
          {notas.map((nota, i) => (
            <li key={i}>{nota}</li>
          ))}
        </ul>
      )}
    </div>
  )
}
