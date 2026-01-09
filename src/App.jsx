import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import ProyectosFinalizados from './pages/ProyectosFinalizados';
import ProyectosEnEjecucion from './pages/ProyectosEnEjecucion';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/proyectos-finalizados" element={<ProyectosFinalizados />} />
        <Route path="/proyectos-en-ejecucion" element={<ProyectosEnEjecucion />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
