// src/solutions/lab3/Ej1Demo.jsx
import Alerta from './Alerta.jsx'
import Acordeon from './Acordeon.jsx'

export default function Ej1Demo() {
  return (
    <div className="demo-card">
      <h4 className="seccion-titulo">Alerta — cuatro tipos</h4>
      <Alerta tipo="exito" titulo="Guardado correctamente">Los cambios se aplicaron sin errores.</Alerta>
      <Alerta tipo="advertencia" titulo="Revisa el formulario">Hay campos que requieren tu atención.</Alerta>
      <Alerta tipo="error" titulo="No se pudo conectar">Verifica tu conexión e inténtalo de nuevo.</Alerta>
      <Alerta tipo="info" titulo="Nueva versión disponible">Actualiza para ver las últimas mejoras.</Alerta>

      <h4 className="seccion-titulo" style={{ marginTop: 20 }}>Acordeón — instancias independientes</h4>
      <Acordeon titulo="¿Qué es Investigación de Operaciones?">
        <p>Es la aplicación de métodos analíticos para la toma de decisiones óptimas.</p>
      </Acordeon>
      <Acordeon titulo="¿Qué es una base de datos?">
        <p>Un conjunto organizado de datos estructurados y almacenados electrónicamente.</p>
      </Acordeon>
      <Acordeon titulo="¿Qué es React?">
        <p>Una librería de JavaScript para construir interfaces de usuario basadas en componentes.</p>
      </Acordeon>
    </div>
  )
}
