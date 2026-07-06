// src/solutions/lab5/Layout.jsx
import { NavLink, Outlet } from 'react-router-dom';
import { useNotas } from './hooks/useNotas.js';

export default function Layout() {
  const { notas } = useNotas();

  const linkStyle = ({ isActive }) => ({
    padding: '6px 12px',
    borderRadius: 6,
    fontWeight: 600,
    color: isActive ? '#0b1710' : 'var(--text)',
    background: isActive ? 'var(--accent)' : 'transparent',
  });

  return (
    <div style={{ border: '1px solid var(--border)', borderRadius: 12, overflow: 'hidden' }}>
      <header style={{ background: 'var(--bg-panel-2)', padding: '14px 18px' }}>
        <h2 style={{ margin: '0 0 10px' }}>📒 MisNotas</h2>
        <nav style={{ display: 'flex', gap: 8 }}>
          {/* Rutas relativas: "" equivale a la raíz del contexto actual */}
          <NavLink to="" end style={linkStyle}>
            Inicio
          </NavLink>
          <NavLink to="notas" style={linkStyle}>
            Notas
          </NavLink>
          <NavLink to="notas/nueva" style={linkStyle}>
            Nueva nota
          </NavLink>
        </nav>
        <p className="muted" style={{ margin: '10px 0 0' }}>
          Total de notas: {notas.length}
        </p>
      </header>

      <main style={{ padding: 18, minHeight: 260 }}>
        <Outlet />
      </main>

      <footer
        style={{
          padding: '10px 18px',
          borderTop: '1px solid var(--border)',
          color: 'var(--text-faint)',
          fontSize: 13,
        }}
      >
        © 2026 MisNotas
      </footer>
    </div>
  );
}
