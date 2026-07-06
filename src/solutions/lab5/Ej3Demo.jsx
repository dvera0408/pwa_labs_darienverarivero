// src/solutions/lab5/Ej3DemoLab5.jsx
import { useState } from 'react';
import { NotasProvider } from './context/NotasProvider.jsx';
import { useNotas } from './hooks/useNotas.js';
import Inicio from './pages/Inicio.jsx';
import NoEncontrada from './pages/NoEncontrada.jsx';

/* ---------- Componentes estables (definidos fuera del padre) ---------- */

function DetalleNotaDemo({ id, onBack }) {
  const { notas, eliminarNota } = useNotas();
  const nota = notas.find((n) => n.id === id);

  if (!nota) {
    return (
      <div>
        <p>Nota no encontrada</p>
        <button className="btn btn-secundario" onClick={onBack}>
          Volver a notas
        </button>
      </div>
    );
  }

  const handleEliminar = () => {
    if (window.confirm('¿Seguro que deseas eliminar esta nota?')) {
      eliminarNota(nota.id);
      onBack();
    }
  };

  return (
    <div>
      <h3>
        {nota.fijada && '📌 '}
        {nota.titulo}
      </h3>
      <p className="badge">{nota.categoria}</p>
      <p>{nota.contenido}</p>
      <p className="muted">
        Creada el {new Date(nota.fechaCreacion).toLocaleString()}
      </p>
      <p className="muted">
        {nota.fijada ? 'Esta nota está fijada' : 'Esta nota no está fijada'}
      </p>
      <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
        <button className="btn btn-secundario" onClick={onBack}>
          Volver a notas
        </button>
        <button className="btn btn-peligro" onClick={handleEliminar}>
          Eliminar
        </button>
      </div>
    </div>
  );
}

function NuevaNotaPlaceholder() {
  return <p>Formulario de nueva nota (se completa en el Ejercicio 4)</p>;
}

function NotasConDetalle({ onSelectNota }) {
  const { notas } = useNotas();

  return (
    <div>
      <h3>Notas</h3>
      <p className="muted">Haz clic en una nota para ver el detalle simulado.</p>
      {notas.length === 0 ? (
        <p className="muted">No hay notas.</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {notas.map((nota) => (
            <li
              key={nota.id}
              style={{
                padding: '10px',
                border: '1px solid var(--border)',
                borderRadius: 8,
                marginBottom: 8,
                cursor: 'pointer',
              }}
              onClick={() => onSelectNota(nota.id)}
            >
              <strong>
                {nota.fijada && '📌 '}
                {nota.titulo}
              </strong>
              <span className="badge" style={{ marginLeft: 8 }}>
                {nota.categoria}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
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

/* ---------- Componente principal ---------- */

export default function Ej3DemoLab5() {
  const [currentPage, setCurrentPage] = useState('/notas');
  const [selectedNoteId, setSelectedNoteId] = useState(null);

  const navigateTo = (page) => {
    setCurrentPage(page);
    if (page === '/notas') setSelectedNoteId(null);
  };

  const handleSelectNota = (id) => {
    setSelectedNoteId(id);
    setCurrentPage('/notas/detalle');
  };

  const pages = {
    '/': <Inicio />,
    '/notas': <NotasConDetalle onSelectNota={handleSelectNota} />,
    '/notas/nueva': <NuevaNotaPlaceholder />,
    '/notas/detalle': selectedNoteId ? (
      <DetalleNotaDemo id={selectedNoteId} onBack={() => navigateTo('/notas')} />
    ) : (
      <p>Selecciona una nota primero</p>
    ),
  };

  const PaginaActiva = pages[currentPage] || <NoEncontrada />;

  return (
    <div className="demo-card">
      <p className="muted">
        Navega entre Inicio, Notas y una nota de la lista para ver el detalle (sin Router).
      </p>
      <NotasProvider>
        <DemoLayout currentPage={currentPage} onNavigate={navigateTo}>
          {PaginaActiva}
        </DemoLayout>
      </NotasProvider>
    </div>
  );
}
