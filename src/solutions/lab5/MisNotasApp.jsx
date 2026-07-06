// src/solutions/lab5/MisNotasApp.jsx
import { Routes, Route } from 'react-router-dom';
import { NotasProvider } from './context/NotasProvider.jsx';
import { ToastProvider } from './context/ToastProvider.jsx';
import Layout from './Layout.jsx';
import Inicio from './pages/Inicio.jsx';
import NotasFinal from './pages/NotasFinal.jsx';
import NuevaNotaFinal from './pages/NuevaNotaFinal.jsx';
import EditarNotaFinal from './pages/EditarNotaFinal.jsx';
import DetalleNotaFinal from './pages/DetalleNotaFinal.jsx';
import NoEncontrada from './pages/NoEncontrada.jsx';

export default function MisNotasApp() {
  return (
    <div className="demo-card">
      <p className="muted">
        Aplicación completa: estado global persistido en localStorage, rutas anidadas y
        notificaciones toast en cada acción (agregar, editar, eliminar, fijar/desfijar).
      </p>
      <NotasProvider>
        <ToastProvider>
          {/* Ruta raíz relativa vacía */}
          <Routes>
            <Route path="" element={<Layout />}>
              <Route index element={<Inicio />} />
              <Route path="notas" element={<NotasFinal />} />
              <Route path="notas/nueva" element={<NuevaNotaFinal />} />
              <Route path="notas/:id" element={<DetalleNotaFinal />} />
              <Route path="notas/:id/editar" element={<EditarNotaFinal />} />
              <Route path="*" element={<NoEncontrada />} />
            </Route>
          </Routes>
        </ToastProvider>
      </NotasProvider>
    </div>
  );
}
