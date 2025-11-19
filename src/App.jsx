import Navbar from './components/Navbar';
import Inicio from './components/Inicio';
import Nosotros from './components/Nosotros';
import Proyectos from './components/Proyectos';
import Integrantes from './components/Integrantes';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Inicio />
      <Nosotros />
      <Proyectos />
      <Integrantes />
      <Contacto />
      <Footer />
    </>
  );
}

export default App;
