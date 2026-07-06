// src/solutions/lab5/pages/NotasFinal.jsx
import { Link } from 'react-router-dom';
import { useNotas } from '../hooks/useNotas.js';
import { useToast } from '../hooks/useToast.js';

const CATEGORIAS = [
  { valor: 'todas', etiqueta: 'Todas' },
  { valor: 'personal', etiqueta: 'Personal' },
  { valor: 'trabajo', etiqueta: 'Trabajo' },
  { valor: 'estudio', etiqueta: 'Estudio' },
  { valor: 'ideas', etiqueta: 'Ideas' },
];

const COLOR_CATEGORIA = {
  personal: '#7db8f0',
  trabajo: '#f0a868',
  estudio: '#5eead4',
  ideas: '#c792ea',
};

function truncar(texto, limite = 100) {
  return texto.length > limite ? texto.slice(0, limite) + '...' : texto;
}

export default function NotasFinal() {
  const { notas, filtroCategoria, busqueda, cambiarFiltro, cambiarBusqueda, toggleFijada } = useNotas();
  const notificar = useToast();

  const termino = busqueda.toLowerCase();
  const filtradas = notas.filter((n) => {
    const coincideCategoria = filtroCategoria === 'todas' || n.categoria === filtroCategoria;
    const coincideBusqueda =
      n.titulo.toLowerCase().includes(termino) || n.contenido.toLowerCase().includes(termino);
    return coincideCategoria && coincideBusqueda;
  });

  const fijadas = filtradas.filter((n) => n.fijada);
  const resto = filtradas.filter((n) => !n.fijada);

  const handleTogglePin = (e, nota) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFijada(nota.id);
    notificar(nota.fijada ? 'Nota desfijada' : 'Nota fijada', 'info');
  };

  const Tarjeta = ({ nota }) => (
    <Link
      to={`/notas/${nota.id}`}
      className="nota-card"
      style={{ borderLeft: `4px solid ${COLOR_CATEGORIA[nota.categoria]}` }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <strong>
          {nota.fijada && '📌 '}
          {nota.titulo}
        </strong>
        <button
          onClick={(e) => handleTogglePin(e, nota)}
          style={{ background: 'none', border: 'none', color: 'var(--warning)' }}
        >
          {nota.fijada ? '★' : '☆'}
        </button>
      </div>
      <p className="muted" style={{ margin: '4px 0' }}>{truncar(nota.contenido)}</p>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12 }}>
        <span className="badge">{nota.categoria}</span>
        <span className="muted">{new Date(nota.fechaCreacion).toLocaleDateString()}</span>
      </div>
    </Link>
  );

  return (
    <div>
      <h3>Notas</h3>
      <div style={{ display: 'flex', gap: 8, marginBottom: 12, flexWrap: 'wrap' }}>
        <input
          className="input"
          placeholder="Buscar en título o contenido..."
          value={busqueda}
          onChange={(e) => cambiarBusqueda(e.target.value)}
        />
        <select className="input" value={filtroCategoria} onChange={(e) => cambiarFiltro(e.target.value)}>
          {CATEGORIAS.map((c) => (
            <option key={c.valor} value={c.valor}>
              {c.etiqueta}
            </option>
          ))}
        </select>
      </div>

      <p className="muted">
        {filtradas.length} de {notas.length} notas
      </p>

      {filtradas.length === 0 ? (
        <p className="muted">No hay notas que coincidan con los filtros.</p>
      ) : (
        <div>
          {fijadas.length > 0 && (
            <>
              <h4 style={{ margin: '4px 0 8px' }}>Fijadas</h4>
              <div className="notas-grid">
                {fijadas.map((n) => (
                  <Tarjeta key={n.id} nota={n} />
                ))}
              </div>
            </>
          )}
          {resto.length > 0 && (
            <>
              <h4 style={{ margin: '16px 0 8px' }}>Otras notas</h4>
              <div className="notas-grid">
                {resto.map((n) => (
                  <Tarjeta key={n.id} nota={n} />
                ))}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
