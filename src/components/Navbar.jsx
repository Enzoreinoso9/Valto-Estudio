import { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const [showProyectosMenu, setShowProyectosMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Detectar sección activa
      const sections = ['inicio', 'quienes-somos', 'proyectos', 'integrantes', 'contacto'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Llamar una vez al montar

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="#inicio" onClick={(e) => handleSmoothScroll(e, 'inicio')}>
            Valto Estudio
          </a>
        </div>
        
        <ul className="navbar-links">
          <li>
            <a
              href="#inicio"
              onClick={(e) => handleSmoothScroll(e, 'inicio')}
              className={activeSection === 'inicio' ? 'active' : ''}
            >
              Inicio
            </a>
          </li>
          <li>
            <a
              href="#quienes-somos"
              onClick={(e) => handleSmoothScroll(e, 'quienes-somos')}
              className={activeSection === 'quienes-somos' ? 'active' : ''}
            >
              Quiénes Somos
            </a>
          </li>
          <li
            className="dropdown"
            onMouseEnter={() => setShowProyectosMenu(true)}
            onMouseLeave={() => setShowProyectosMenu(false)}
          >
            <a
              href="#proyectos"
              onClick={(e) => handleSmoothScroll(e, 'proyectos')}
              className={activeSection === 'proyectos' ? 'active' : ''}
            >
              Proyectos
            </a>
            {showProyectosMenu && (
              <ul className="dropdown-menu">
                <li>
                  <a href="#proyectos" onClick={(e) => handleSmoothScroll(e, 'proyectos')}>
                    Obras
                  </a>
                </li>
                <li>
                  <a href="#proyectos" onClick={(e) => handleSmoothScroll(e, 'proyectos')}>
                    En Ejecución
                  </a>
                </li>
              </ul>
            )}
          </li>
          <li>
            <a
              href="#integrantes"
              onClick={(e) => handleSmoothScroll(e, 'integrantes')}
              className={activeSection === 'integrantes' ? 'active' : ''}
            >
              Integrantes
            </a>
          </li>
          <li>
            <a
              href="#contacto"
              onClick={(e) => handleSmoothScroll(e, 'contacto')}
              className={activeSection === 'contacto' ? 'active' : ''}
            >
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;


