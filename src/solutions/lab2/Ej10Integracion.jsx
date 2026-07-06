// src/solutions/lab2/Ej10Integracion.jsx
import Perfil from './Perfil.jsx'
import Clima from './Clima.jsx'
import EstadoPedido from './EstadoPedido.jsx'
import MensajeBienvenida from './MensajeBienvenida.jsx'
import ListaHabilidades from './ListaHabilidades.jsx'
import ListaProductos from './ListaProductos.jsx'
import ListaTareas from './ListaTareas.jsx'
import Tarjeta from './Tarjeta.jsx'
import Dashboard from './Dashboard.jsx'

// Equivalente al App.jsx pedido en el Ejercicio 10: importa y organiza
// visualmente todos los componentes de los ejercicios anteriores.
export default function Ej10Integracion() {
  const secciones = [
    { titulo: 'Ejercicio 1 — Perfil', Componente: Perfil },
    { titulo: 'Ejercicio 2 — Clima', Componente: Clima },
    { titulo: 'Ejercicio 3 — Estado de Pedido', Componente: EstadoPedido },
    { titulo: 'Ejercicio 4 — Mensaje de Bienvenida', Componente: MensajeBienvenida },
    { titulo: 'Ejercicio 5 — Lista de Habilidades', Componente: ListaHabilidades },
    { titulo: 'Ejercicio 6 — Lista de Productos', Componente: ListaProductos },
    { titulo: 'Ejercicio 7 — Lista de Tareas', Componente: ListaTareas },
  ]

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      {secciones.map(({ titulo, Componente }) => (
        <section key={titulo}>
          <h4 className="seccion-titulo">{titulo}</h4>
          <Componente />
        </section>
      ))}

      <section>
        <h4 className="seccion-titulo">Ejercicio 8 — Tarjeta</h4>
        <Tarjeta />
      </section>

      <section>
        <h4 className="seccion-titulo">Ejercicio 9 — Dashboard</h4>
        <Dashboard />
      </section>
    </div>
  )
}
