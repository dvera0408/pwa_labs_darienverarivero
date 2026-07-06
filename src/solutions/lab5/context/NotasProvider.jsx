// src/solutions/lab5/context/NotasProvider.jsx
import { useReducer, useEffect } from 'react';
import { NotasContext } from './NotasContext';
import { useLocalStorage } from '../../lab4/hooks/useLocalStorage.js';

const CLAVE_STORAGE = 'misnotas-app';

function crearNotaInicial(titulo, contenido, categoria, fijada) {
  return {
    id: Date.now().toString() + Math.random().toString(36).slice(2, 7),
    titulo,
    contenido,
    categoria,
    fijada,
    fechaCreacion: new Date().toISOString(),
  };
}

const NOTAS_PRECARGADAS = [
  crearNotaInicial(
    'Repasar Two-Phase Simplex',
    'Revisar el método de las dos fases para el examen final de Informática, incluyendo el manejo de variables artificiales.',
    'estudio',
    true
  ),
  crearNotaInicial(
    'Seminario CDC y SCD',
    'Terminar la sección de técnicas de Change Data Capture del seminario del Equipo 5: log-based, timestamp-based, snapshot-based y trigger-based.',
    'trabajo',
    true
  ),
  crearNotaInicial(
    'Lista de compras',
    'Leche, huevos, café, pan integral y frutas para la semana.',
    'personal',
    false
  ),
  crearNotaInicial(
    'Idea: dashboard de laboratorios',
    'Crear una app en React que organice todos los laboratorios del curso por módulo y ejercicio.',
    'ideas',
    false
  ),
  crearNotaInicial(
    'Investigación de Operaciones — Solver',
    'Comparar los resultados obtenidos con Excel Solver contra LINGO 22.0 para el problema de asignación 11.1-2.',
    'estudio',
    false
  ),
];

const estadoPorDefecto = {
  notas: NOTAS_PRECARGADAS,
  filtroCategoria: 'todas',
  busqueda: '',
};

function notasReducer(state, action) {
  switch (action.type) {
    case 'AGREGAR_NOTA': {
      const nueva = crearNotaInicial(
        action.payload.titulo,
        action.payload.contenido,
        action.payload.categoria,
        action.payload.fijada
      );
      return { ...state, notas: [nueva, ...state.notas] };
    }
    case 'ELIMINAR_NOTA':
      return { ...state, notas: state.notas.filter((n) => n.id !== action.payload.id) };
    case 'EDITAR_NOTA':
      return {
        ...state,
        notas: state.notas.map((n) =>
          n.id === action.payload.id ? { ...n, ...action.payload.datos } : n
        ),
      };
    case 'TOGGLE_FIJADA':
      return {
        ...state,
        notas: state.notas.map((n) =>
          n.id === action.payload.id ? { ...n, fijada: !n.fijada } : n
        ),
      };
    case 'CAMBIAR_FILTRO':
      return { ...state, filtroCategoria: action.payload };
    case 'CAMBIAR_BUSQUEDA':
      return { ...state, busqueda: action.payload };
    default:
      return state;
  }
}

export function NotasProvider({ children }) {
  // 1. Leer estado persistido con el hook useLocalStorage
  const [estadoPersistido, setEstadoPersistido] = useLocalStorage(CLAVE_STORAGE, estadoPorDefecto);

  // 2. Inicializar el reducer con ese estado
  const [state, dispatch] = useReducer(notasReducer, estadoPersistido);

  // 3. Sincronizar cambios de estado → localStorage
  useEffect(() => {
    setEstadoPersistido(state);
  }, [state, setEstadoPersistido]);

  const value = {
    ...state,
    agregarNota: (datos) => dispatch({ type: 'AGREGAR_NOTA', payload: datos }),
    eliminarNota: (id) => dispatch({ type: 'ELIMINAR_NOTA', payload: { id } }),
    editarNota: (id, datos) => dispatch({ type: 'EDITAR_NOTA', payload: { id, datos } }),
    toggleFijada: (id) => dispatch({ type: 'TOGGLE_FIJADA', payload: { id } }),
    cambiarFiltro: (categoria) => dispatch({ type: 'CAMBIAR_FILTRO', payload: categoria }),
    cambiarBusqueda: (texto) => dispatch({ type: 'CAMBIAR_BUSQUEDA', payload: texto }),
  };

  return <NotasContext.Provider value={value}>{children}</NotasContext.Provider>;
}
