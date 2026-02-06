import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Inicio from '../components/Inicio';
import Nosotros from '../components/Nosotros';
import Proyectos from '../components/Proyectos';
import Integrantes from '../components/Integrantes';
import Contacto from '../components/Contacto';
import Footer from '../components/Footer';

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#contacto') {
      const timer = setTimeout(() => {
        const el = document.getElementById('contacto');
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [location.pathname, location.hash]);

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
};

export default Home;

