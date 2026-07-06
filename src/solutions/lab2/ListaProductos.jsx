// src/solutions/lab2/ListaProductos.jsx
const productos = [
  { id: 1, nombre: 'Teclado mecánico', precio: 45.5, disponible: true },
  { id: 2, nombre: 'Mouse inalámbrico', precio: 22, disponible: true },
  { id: 3, nombre: 'Monitor 27"', precio: 189.99, disponible: false },
  { id: 4, nombre: 'Webcam HD', precio: 33.75, disponible: true },
  { id: 5, nombre: 'Silla ergonómica', precio: 210, disponible: false },
]

export default function ListaProductos() {
  return (
    <div className="demo-card">
      <h2>Catálogo de productos</h2>
      <table className="tabla">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto) => (
            <tr key={producto.id}>
              <td>{producto.nombre}</td>
              <td>${producto.precio.toFixed(2)}</td>
              <td style={{ color: producto.disponible ? 'var(--success)' : 'var(--danger)' }}>
                {producto.disponible ? 'Disponible' : 'Agotado'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
