// src/solutions/lab2/EstadoPedido.jsx
export default function EstadoPedido() {
  const estado = 'enviado' // 'pendiente' | 'enviado' | 'entregado' | 'cancelado'

  return (
    <div className="demo-card">
      <h2>
        {estado === 'pendiente'
          ? '⏳'
          : estado === 'enviado'
          ? '🚚'
          : estado === 'entregado'
          ? '✅'
          : '❌'}{' '}
        {estado === 'pendiente'
          ? 'Tu pedido está siendo procesado'
          : estado === 'enviado'
          ? 'Tu pedido está en camino'
          : estado === 'entregado'
          ? 'Tu pedido ha sido entregado'
          : 'Tu pedido fue cancelado'}
      </h2>

      {estado === 'enviado' && <p>Tiempo estimado de entrega: 2-3 días hábiles</p>}
    </div>
  )
}
