import { Link, useLocation } from 'react-router-dom';
import './ContactoSection.css';

const ContactoSection = () => {
  const location = useLocation();

  const handleContactClick = () => {
    // Si estamos en la página principal, hacer scroll suave a la sección contacto
    if (location.pathname === '/') {
      setTimeout(() => {
        const element = document.getElementById('contacto');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  };

  return (
    <section className="contacto-section">
      <div className="contacto-section-container">
        <div className="contacto-section-content">
          <h2 className="contacto-section-title">¿Tienes un proyecto en mente?</h2>
          <p className="contacto-section-text">
            Estamos listos para hacer realidad tu visión arquitectónica
          </p>
          {location.pathname === '/' ? (
            <button className="contacto-section-button" onClick={handleContactClick}>
              Contactanos
            </button>
          ) : (
            <Link to="/#contacto" className="contacto-section-button">
              Contactanos
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactoSection;

