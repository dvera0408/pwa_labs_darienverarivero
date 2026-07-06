// src/solutions/lab3/Modal.jsx
export default function Modal({ titulo, abierto, children }) {
  if (!abierto) return null

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,0.6)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
      }}
    >
      <div
        style={{
          background: 'var(--bg-panel)',
          border: '1px solid var(--border)',
          borderRadius: 12,
          padding: 24,
          minWidth: 300,
          maxWidth: '90vw',
          boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
        }}
      >
        <h3 style={{ marginTop: 0 }}>{titulo}</h3>
        {children}
      </div>
    </div>
  )
}
