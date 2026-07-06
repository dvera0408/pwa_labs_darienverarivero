// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import LabView from './pages/LabView.jsx';
import EjercicioView from './pages/EjercicioView.jsx';
import MisNotasApp from './solutions/lab5/MisNotasApp.jsx';
import './App.css';

export default function App() {
  return (
    <div className="app-shell">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lab/:labId" element={<LabView />} />
        <Route path="/lab/:labId/ejercicio/:exId" element={<EjercicioView />} />
        <Route path="/mis-notas/*" element={<MisNotasApp />} />
        <Route path="*" element={<div className="page"><p>Página no encontrada.</p></div>} />
      </Routes>
    </div>
  );
}
