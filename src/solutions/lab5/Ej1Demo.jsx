// src/solutions/lab5/Ej1Demo.jsx
import { NotasProvider } from './context/NotasProvider.jsx'
import { useNotas } from './hooks/useNotas.js'
function ComponentePrueba() {
  const { notas, filtroCategoria, busqueda, agregarNota } = useNotas()

  return (
    <div className="demo-card">
      <h3>Prueba del contexto NotasContext</h3>
      <p>Total de notas en el estado global: <strong>{notas.length}</strong></p>
      <p className="muted">Filtro de categoría actual: {filtroCategoria} · Búsqueda: "{busqueda}"</p>
      <button
        className="btn btn-primario"
        onClick={() =>
          agregarNota({
            titulo: 'Nota de prueba',
            contenido: 'Generada desde el componente de prueba del Ejercicio 1.',
            categoria: 'ideas',
            fijada: false,
          })
        }
      >
        Agregar nota de prueba (AGREGAR_NOTA)
      </button>
    </div>
  )
}

export default function Ej1Demo() {
  return (
    <NotasProvider>
      <ComponentePrueba />
    </NotasProvider>
  )
}
