// src/solutions/lab5/context/ToastProvider.jsx
import { useNotificacion } from '../../lab4/hooks/useNotificacion.js'
import { ToastContext } from './ToastContext.jsx'

const COLORES = {
  exito: { bg: '#1f3a2e', text: '#7fe6a8' },
  info: { bg: '#1a2b3a', text: '#7db8f0' },
  error: { bg: '#3a1f1f', text: '#f16c6c' },
}

export function ToastProvider({ children }) {
  const { notificacion, mostrar, cerrar } = useNotificacion(3000)

  return (
    <ToastContext.Provider value={mostrar}>
      {children}
      {notificacion && (
        <div
          style={{
            position: 'fixed',
            bottom: 16,
            right: 16,
            background: COLORES[notificacion.tipo]?.bg ?? COLORES.info.bg,
            color: COLORES[notificacion.tipo]?.text ?? COLORES.info.text,
            padding: '10px 16px',
            borderRadius: 8,
            boxShadow: '0 10px 30px rgba(0,0,0,0.4)',
            zIndex: 2000,
            display: 'flex',
            alignItems: 'center',
            gap: 10,
          }}
        >
          <span>{notificacion.mensaje}</span>
          <button onClick={cerrar} style={{ background: 'none', border: 'none', color: 'inherit', fontWeight: 700 }}>
            ✕
          </button>
        </div>
      )}
    </ToastContext.Provider>
  )
}
