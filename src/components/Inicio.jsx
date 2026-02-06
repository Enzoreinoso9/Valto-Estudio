import { useEffect, useRef } from 'react';
import logo from '../assets/Logo.png';
import './Inicio.css';

const Inicio = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (section) {
      section.classList.add('animate-in');
    }
  }, []);

  const handleScrollToProyectos = (e) => {
    e.preventDefault();
    const proyectosSection = document.getElementById('proyectos');
    if (proyectosSection) {
      proyectosSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="inicio" className="inicio" ref={sectionRef}>
      <div className="inicio-overlay"></div>
      <div className="inicio-content">
        <div className="inicio-left">
          <h1 className="inicio-title">Arquitectura con propósito</h1>
          <p className="inicio-subtitle">
            Diseñamos espacios que transforman la forma en que vivimos y trabajamos
          </p>
          <button className="inicio-button" onClick={handleScrollToProyectos}>
            Ver Proyectos
          </button>
        </div>
        <div className="inicio-right">
          <div className="inicio-logo-large">
            <img src={logo} alt="Valto Estudio" className="inicio-logo-img" />
            <p>Estudio de Arquitectura</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Inicio;

