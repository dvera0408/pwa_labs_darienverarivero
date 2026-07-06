// src/solutions/lab5/Ej2DemoLab5.jsx
import { useState } from 'react';
import { NotasProvider } from './context/NotasProvider.jsx';
import Inicio from './pages/Inicio.jsx';
import NoEncontrada from './pages/NoEncontrada.jsx';

// Placeholders como componentes estables
function NotasPlaceholder() {
  return <p>Página de notas</p>;
}
function NuevaNotaPlaceholder() {
  return <p>Formulario de nueva nota</p>;
}

function DemoLayout({ currentPage, onNavigate, children }) {
  const linkStyle = (page) => ({
    padding: '6px 12px',
    borderRadius: 6,
    fontWeight: 600,
    color: currentPage === page ? '#0b1710' : 'var(--text)',
    background: currentPage === page ? 'var(--accent)' : 'transparent',
    border: 'none',
    cursor: 'pointer',
  });

  return (
    <div style={{ border: '1px solid var(--border)', borderRadius: 12, overflow: 'hidden' }}>
      <header style={{ background: 'var(--bg-panel-2)', padding: '14px 18px' }}>
        <h2 style={{ margin: '0 0 10px' }}>📒 MisNotas (demo)</h2>
        <nav style={{ display: 'flex', gap: 8 }}>
          <button style={linkStyle('/')} onClick={() => onNavigate('/')}>
            Inicio
          </button>
          <button style={linkStyle('/notas')} onClick={() => onNavigate('/notas')}>
            Notas
          </button>
          <button style={linkStyle('/notas/nueva')} onClick={() => onNavigate('/notas/nueva')}>
            Nueva nota
          </button>
        </nav>
      </header>

      <main style={{ padding: 18, minHeight: 260 }}>{children}</main>

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

export default function Ej2DemoLab5() {
  const [currentPage, setCurrentPage] = useState('/');

  const pages = {
    '/': <Inicio />,                          // ✅ Elemento JSX
    '/notas': <NotasPlaceholder />,           // ✅ Elemento JSX
    '/notas/nueva': <NuevaNotaPlaceholder />, // ✅ Elemento JSX
  };

  const PaginaActiva = pages[currentPage] || <NoEncontrada />;

  return (
    <div className="demo-card">
      <p className="muted">
        Navegación entre Inicio, Notas y Nueva nota usando estado local (sin Router).
      </p>
      <NotasProvider>
        <DemoLayout currentPage={currentPage} onNavigate={setCurrentPage}>
          {PaginaActiva}
        </DemoLayout>
      </NotasProvider>
    </div>
  );
}
