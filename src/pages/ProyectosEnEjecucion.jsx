import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactoSection from '../components/ContactoSection';
import ProyectoModal from '../components/ProyectoModal';
import './ProyectosEnEjecucion.css';

const ProyectosEnEjecucion = () => {
  const [selectedProyecto, setSelectedProyecto] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const proyectosEnEjecucion = [
    {
      id: 3,
      nombre: 'Centro Comercial',
      imagen: 'https://www.arquimaster.com.ar/web/wp-content/uploads/2013/12/cc_alrio2.jpg',
      categoria: 'Comercial',
      ubicacion: 'Vicente López',
      progreso: '65%',
      resumen: 'Centro comercial moderno con múltiples locales comerciales, áreas comunes y estacionamiento, diseñado para maximizar la experiencia del visitante.',
      renders: [
        'https://www.arquimaster.com.ar/web/wp-content/uploads/2013/12/cc_alrio2.jpg',
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200',
        'https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?w=1200',
        'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200',
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200',
      ],
      fotosConstruccion: [
        'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200',
        'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200',
        'https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?w=1200',
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200',
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200',
      ],
      descripcion: {
        'Proyecto': 'Arq. Pietro Ezio Zucchet',
        'Ejecución': 'ezestudio S.A.S',
        'Dirección de la Construcción': 'ezestudio S.A.S',
        'Diseño y Dimensionado Estructural': 'Ing. Gustavo Fleitas',
        'Tipología': 'Centro Comercial',
        'Area': '2500 M2',
        'Ubicación': 'Vicente López, Buenos Aires, Argentina',
        'Estado': 'En construcción - 65% completado',
      },
    },
    {
      id: 5,
      nombre: 'Oficinas Corporativas',
      imagen: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200',
      categoria: 'Oficinas',
      ubicacion: 'Microcentro, Buenos Aires',
      progreso: '40%',
      resumen: 'Edificio de oficinas corporativas con diseño eficiente, espacios flexibles y tecnología de última generación para el trabajo moderno.',
      renders: [
        'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200',
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200',
        'https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?w=1200',
        'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200',
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200',
      ],
      fotosConstruccion: [
        'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200',
        'https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?w=1200',
        'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200',
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200',
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200',
      ],
      descripcion: {
        'Proyecto': 'Arq. Pietro Ezio Zucchet',
        'Ejecución': 'ezestudio S.A.S',
        'Dirección de la Construcción': 'ezestudio S.A.S',
        'Diseño y Dimensionado Estructural': 'Ing. Gustavo Fleitas',
        'Tipología': 'Oficinas Corporativas',
        'Area': '1800 M2',
        'Ubicación': 'Microcentro, Buenos Aires, Argentina',
        'Estado': 'En construcción - 40% completado',
      },
    },
  ];

  const handleVerDetalles = (proyecto) => {
    setSelectedProyecto(proyecto);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProyecto(null);
  };

  return (
    <>
      <Navbar />
      <div className="proyectos-en-ejecucion-hero">
        <div className="proyectos-en-ejecucion-hero-overlay"></div>
        <div className="proyectos-en-ejecucion-hero-content">
          <h1 className="proyectos-en-ejecucion-title">Proyectos en Ejecución</h1>
          <p className="proyectos-en-ejecucion-subtitle">
            Obras en desarrollo que representan nuestra capacidad de innovación y ejecución
          </p>
        </div>
      </div>
      <section className="proyectos-en-ejecucion-page">
        <div className="proyectos-en-ejecucion-container">
          <div className="proyectos-en-ejecucion-grid">
            {proyectosEnEjecucion.map((proyecto) => (
              <div key={proyecto.id} className="proyecto-ejecucion-card">
                <div className="proyecto-ejecucion-image">
                  <img src={proyecto.imagen} alt={proyecto.nombre} />
                  <div className="proyecto-ejecucion-badge">
                    <span>En Progreso</span>
                  </div>
                  <div className="proyecto-ejecucion-overlay">
                    <h3 className="proyecto-ejecucion-nombre">{proyecto.nombre}</h3>
                    <p className="proyecto-ejecucion-info">{proyecto.categoria}</p>
                    <p className="proyecto-ejecucion-info">{proyecto.ubicacion}</p>
                    <div className="proyecto-ejecucion-progreso">
                      <span>Progreso: {proyecto.progreso}</span>
                    </div>
                    <button className="proyecto-ejecucion-button" onClick={() => handleVerDetalles(proyecto)}>Ver Detalles</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ContactoSection />
      <Footer />
      <ProyectoModal
        proyecto={selectedProyecto}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        tipoProyecto="ejecucion"
      />
    </>
  );
};

export default ProyectosEnEjecucion;

