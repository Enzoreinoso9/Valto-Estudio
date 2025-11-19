import { useState } from 'react';
import './Proyectos.css';

const Proyectos = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  // Datos de ejemplo - puedes reemplazarlos con datos reales
  const proyectos = [
    {
      id: 1,
      nombre: 'Casa Moderna',
      imagen: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
      categoria: 'Obras',
    },
    {
      id: 2,
      nombre: 'Edificio Residencial',
      imagen: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800',
      categoria: 'Obras',
    },
    {
      id: 3,
      nombre: 'Centro Comercial',
      imagen: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800',
      categoria: 'En Ejecución',
    },
    {
      id: 4,
      nombre: 'Casa Minimalista',
      imagen: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800',
      categoria: 'Obras',
    },
    {
      id: 5,
      nombre: 'Oficinas Corporativas',
      imagen: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800',
      categoria: 'En Ejecución',
    },
    {
      id: 6,
      nombre: 'Villa Contemporánea',
      imagen: 'https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?w=800',
      categoria: 'Obras',
    },
  ];

  return (
    <section id="proyectos" className="proyectos">
      <div className="proyectos-container">
        <h2 className="proyectos-title">Nuestros Proyectos</h2>
        <div className="proyectos-grid">
          {proyectos.map((proyecto) => (
            <div
              key={proyecto.id}
              className="proyecto-card"
              onMouseEnter={() => setHoveredProject(proyecto.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="proyecto-image">
                <img src={proyecto.imagen} alt={proyecto.nombre} />
                <div
                  className={`proyecto-overlay ${
                    hoveredProject === proyecto.id ? 'active' : ''
                  }`}
                >
                  <h3 className="proyecto-nombre">{proyecto.nombre}</h3>
                  <button className="proyecto-button">Ver Proyecto</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Proyectos;

