// src/solutions/lab5/MisNotasDemo.jsx
import { useState } from 'react';
import { NotasProvider } from './context/NotasProvider.jsx';
import { ToastProvider } from './context/ToastProvider.jsx';
import { useNotas } from './hooks/useNotas.js';
import { useToast } from './hooks/useToast.js';
import FormularioNota from './FormularioNota.jsx';
import Inicio from './pages/Inicio.jsx';
import NoEncontrada from './pages/NoEncontrada.jsx';

/* ------------------------------------------------------------------ */
/*  Componentes de demostración (igual que en ejercicios anteriores)   */
/* ------------------------------------------------------------------ */

function NotasConDetalle({ onSelectNota }) {
  const { notas } = useNotas();
  return (
    <div>
      <h3>Notas</h3>
      <p className="muted">Haz clic en una nota para ver el detalle y editar.</p>
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

function DetalleNotaDemo({ id, onBack, onEditar }) {
  const { notas, eliminarNota } = useNotas();
  const notificar = useToast();
  const nota = notas.find((n) => n.id === id);

  if (!nota) {
    return (
      <div>
        <p>Nota no encontrada</p>
        <button className="btn btn-secundario" onClick={onBack}>Volver</button>
      </div>
    );
  }

  const handleEliminar = () => {
    if (window.confirm('¿Seguro que deseas eliminar esta nota?')) {
      eliminarNota(nota.id);
      notificar('Nota eliminada', 'info');
      onBack();
    }
  };

  return (
    <div>
      <h3>{nota.fijada && '📌 '}{nota.titulo}</h3>
      <p className="badge">{nota.categoria}</p>
      <p>{nota.contenido}</p>
      <p className="muted">Creada el {new Date(nota.fechaCreacion).toLocaleString()}</p>
      <p className="muted">{nota.fijada ? 'Esta nota está fijada' : 'Esta nota no está fijada'}</p>
      <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
        <button className="btn btn-secundario" onClick={onBack}>Volver a notas</button>
        <button className="btn btn-primario" onClick={() => onEditar(id)}>Editar</button>
        <button className="btn btn-peligro" onClick={handleEliminar}>Eliminar</button>
      </div>
    </div>
  );
}

function FormularioNotaDemo({ id, onGuardar, onCancelar }) {
  const { notas, agregarNota, editarNota } = useNotas();
  const notificar = useToast();
  const notaExistente = id ? notas.find((n) => n.id === id) : null;

  const guardar = (datos) => {
    if (notaExistente) {
      editarNota(notaExistente.id, datos);
      notificar('Nota actualizada', 'exito');
    } else {
      agregarNota(datos);
      notificar('Nota agregada', 'exito');
    }
    onGuardar();
  };

  return (
    <div>
      <h3>{notaExistente ? 'Editar nota' : 'Nueva nota'}</h3>
      <FormularioNota
        valoresIniciales={
          notaExistente
            ? {
                titulo: notaExistente.titulo,
                contenido: notaExistente.contenido,
                categoria: notaExistente.categoria,
                fijada: notaExistente.fijada,
              }
            : undefined
        }
        textoBoton={notaExistente ? 'Guardar cambios' : 'Guardar nota'}
        onGuardar={guardar}
        onCancelar={onCancelar}
      />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Layout de demostración (navegación con botones y estado)           */
/* ------------------------------------------------------------------ */

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

/* ------------------------------------------------------------------ */
/*  Componente principal que emula toda la app sin router              */
/* ------------------------------------------------------------------ */

export default function MisNotasDemo() {
  const [currentPage, setCurrentPage] = useState('/notas');
  const [selectedNoteId, setSelectedNoteId] = useState(null);

  const navigateTo = (page) => {
    setCurrentPage(page);
    if (page === '/notas') setSelectedNoteId(null);
  };

  const pages = {
    '/': <Inicio />,
    '/notas': (
      <NotasConDetalle
        onSelectNota={(id) => {
          setSelectedNoteId(id);
          setCurrentPage('/notas/detalle');
        }}
      />
    ),
    '/notas/nueva': (
      <FormularioNotaDemo
        id={null}
        onGuardar={() => navigateTo('/notas')}
        onCancelar={() => navigateTo('/notas')}
      />
    ),
    '/notas/detalle': selectedNoteId ? (
      <DetalleNotaDemo
        id={selectedNoteId}
        onBack={() => navigateTo('/notas')}
        onEditar={(id) => {
          setSelectedNoteId(id);
          setCurrentPage('/notas/editar');
        }}
      />
    ) : (
      <p>Selecciona una nota primero</p>
    ),
    '/notas/editar': selectedNoteId ? (
      <FormularioNotaDemo
        id={selectedNoteId}
        onGuardar={() => setCurrentPage('/notas/detalle')}
        onCancelar={() => setCurrentPage('/notas/detalle')}
      />
    ) : (
      <p>Nota no encontrada</p>
    ),
  };

  const PaginaActiva = pages[currentPage] || <NoEncontrada />;

  return (
    <div className="demo-card">
      <p className="muted">
        Aplicación completa con estado local simulado, persistencia y notificaciones.
      </p>
      <NotasProvider>
        <ToastProvider>
          <DemoLayout currentPage={currentPage} onNavigate={navigateTo}>
            {PaginaActiva}
          </DemoLayout>
        </ToastProvider>
      </NotasProvider>
    </div>
  );
}
