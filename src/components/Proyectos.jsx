import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Proyectos.css';

const Proyectos = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section id="proyectos" className="proyectos">
      <div className="proyectos-container">
        <h2 className="proyectos-title">Nuestros Proyectos</h2>
        <p className="proyectos-subtitle">
          Descubre nuestra trayectoria y los proyectos que estamos desarrollando
        </p>

        {/* Navegación a proyectos */}
        <div className="proyectos-navigation">
          <Link 
            to="/proyectos-finalizados" 
            className={`proyectos-nav-card proyectos-nav-card-finalizados ${hoveredCard === 'finalizados' ? 'hovered' : ''}`}
            onMouseEnter={() => setHoveredCard('finalizados')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="proyectos-nav-card-background">
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200" 
                alt="Proyectos Finalizados" 
              />
              <div className="proyectos-nav-card-overlay"></div>
            </div>
            <div className="proyectos-nav-card-content">
              <div className="proyectos-nav-card-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
              </div>
              <h3 className="proyectos-nav-card-title">Proyectos Finalizados</h3>
              <p className="proyectos-nav-card-description">
                Explora nuestras obras completadas que reflejan nuestra visión arquitectónica
              </p>
              <span className="proyectos-nav-card-arrow">→</span>
            </div>
          </Link>

          <Link 
            to="/proyectos-en-ejecucion" 
            className={`proyectos-nav-card proyectos-nav-card-ejecucion ${hoveredCard === 'ejecucion' ? 'hovered' : ''}`}
            onMouseEnter={() => setHoveredCard('ejecucion')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="proyectos-nav-card-background">
              <img 
                src="https://www.arquimaster.com.ar/web/wp-content/uploads/2013/12/cc_alrio2.jpg" 
                alt="Proyectos en Ejecución" 
              />
              <div className="proyectos-nav-card-overlay"></div>
            </div>
            <div className="proyectos-nav-card-content">
              <div className="proyectos-nav-card-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                </svg>
              </div>
              <h3 className="proyectos-nav-card-title">Proyectos en Ejecución</h3>
              <p className="proyectos-nav-card-description">
                Conoce los proyectos que estamos desarrollando actualmente
              </p>
              <span className="proyectos-nav-card-arrow">→</span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Proyectos;

