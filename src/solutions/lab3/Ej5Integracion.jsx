// src/solutions/lab3/Ej5Integracion.jsx
import Acordeon from './Acordeon.jsx'
import Ej1Demo from './Ej1Demo.jsx'
import Ej2Demo from './Ej2Demo.jsx'
import ListaContactos from './ListaContactos.jsx'
import FormularioEvento from './FormularioEvento.jsx'

// Equivalente al App.jsx del Ejercicio 5: cada sección va dentro de un
// Acordeon independiente. Solo la primera sección inicia expandida.
export default function Ej5Integracion() {
  return (
    <div>
      <Acordeon titulo="Ejercicio 1 — Alerta y Acordeón" iniciaAbierto>
        <Ej1Demo />
      </Acordeon>
      <Acordeon titulo="Ejercicio 2 — Modal, Botón y Contador">
        <Ej2Demo />
      </Acordeon>
      <Acordeon titulo="Ejercicio 3 — Lista de Contactos">
        <ListaContactos />
      </Acordeon>
      <Acordeon titulo="Ejercicio 4 — Formulario de Evento">
        <FormularioEvento />
      </Acordeon>
    </div>
  )
}
