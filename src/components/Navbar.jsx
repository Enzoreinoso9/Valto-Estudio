import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/Logo.png';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
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
          {location.pathname === '/' ? (
            <a href="#inicio" onClick={(e) => handleSmoothScroll(e, 'inicio')} className="navbar-logo-link">
              <img src={logo} alt="" className="navbar-logo-img" />
              <span>Valto Estudio</span>
            </a>
          ) : (
            <Link to="/" className="navbar-logo-link">
              <img src={logo} alt="" className="navbar-logo-img" />
              <span>Valto Estudio</span>
            </Link>
          )}
        </div>
        
        <ul className="navbar-links">
          <li>
            {location.pathname === '/' ? (
              <a
                href="#inicio"
                onClick={(e) => handleSmoothScroll(e, 'inicio')}
                className={activeSection === 'inicio' ? 'active' : ''}
              >
                Inicio
              </a>
            ) : (
              <Link to="/" onClick={() => setTimeout(() => {
                const element = document.getElementById('inicio');
                if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }, 100)}>Inicio</Link>
            )}
          </li>
          <li>
            {location.pathname === '/' ? (
              <a
                href="#quienes-somos"
                onClick={(e) => handleSmoothScroll(e, 'quienes-somos')}
                className={activeSection === 'quienes-somos' ? 'active' : ''}
              >
                Quiénes Somos
              </a>
            ) : (
              <Link to="/" onClick={() => setTimeout(() => {
                const element = document.getElementById('quienes-somos');
                if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }, 100)}>Quiénes Somos</Link>
            )}
          </li>
          <li
            className="dropdown"
            onMouseEnter={() => setShowProyectosMenu(true)}
            onMouseLeave={() => setShowProyectosMenu(false)}
          >
            {location.pathname === '/' ? (
              <a
                href="#proyectos"
                onClick={(e) => handleSmoothScroll(e, 'proyectos')}
                className={activeSection === 'proyectos' ? 'active' : ''}
              >
                Proyectos
              </a>
            ) : (
              <Link to="/" onClick={() => setTimeout(() => {
                const element = document.getElementById('proyectos');
                if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }, 100)}>Proyectos</Link>
            )}
            {showProyectosMenu && (
              <ul className="dropdown-menu">
                <li>
                  <Link to="/proyectos-finalizados">Finalizados</Link>
                </li>
                <li>
                  <Link to="/proyectos-en-ejecucion">En Ejecución</Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            {location.pathname === '/' ? (
              <a
                href="#integrantes"
                onClick={(e) => handleSmoothScroll(e, 'integrantes')}
                className={activeSection === 'integrantes' ? 'active' : ''}
              >
                Integrantes
              </a>
            ) : (
              <Link to="/" onClick={() => setTimeout(() => {
                const element = document.getElementById('integrantes');
                if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }, 100)}>Integrantes</Link>
            )}
          </li>
          <li>
            {location.pathname === '/' ? (
              <a
                href="#contacto"
                onClick={(e) => handleSmoothScroll(e, 'contacto')}
                className={activeSection === 'contacto' ? 'active' : ''}
              >
                Contacto
              </a>
            ) : (
              <Link to="/" onClick={() => setTimeout(() => {
                const element = document.getElementById('contacto');
                if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }, 100)}>Contacto</Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;


