import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactoSection from '../components/ContactoSection';
import ProyectoModal from '../components/ProyectoModal';
import './ProyectosFinalizados.css';

// Importar imágenes
import casaNapoleon1 from '../assets/projects/finalizados/Casa napoleon/COCINA 1.jpg';
import casaNapoleon2 from '../assets/projects/finalizados/Casa napoleon/COCINA 2.jpg';
import casaNapoleon3 from '../assets/projects/finalizados/Casa napoleon/COCINA 3.jpg';
import casaNapoleon4 from '../assets/projects/finalizados/Casa napoleon/cocina 4.jpg';
import casaNapoleon5 from '../assets/projects/finalizados/Casa napoleon/cocina 5.jpg';

const ProyectosFinalizados = () => {
  const [selectedProyecto, setSelectedProyecto] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const proyectosFinalizados = [
    {
      id: 1,
      nombre: 'Casa Moderna',
      imagen: casaNapoleon1,
      categoria: 'Vivienda Unifamiliar',
      ubicacion: 'Ciudad de Formosa, Formosa',
      año: '2025',
      resumen: 'Una vivienda unifamiliar contemporánea que combina líneas limpias con materiales de alta calidad, creando un espacio funcional y estéticamente impactante.',
      fotosProyectoTerminado: [
        casaNapoleon1,
        casaNapoleon2,
        casaNapoleon3,
        casaNapoleon4,
        casaNapoleon5,
      ].filter(Boolean),
      renders: [
        casaNapoleon1,
        casaNapoleon2,
        casaNapoleon3,
        casaNapoleon4,
        casaNapoleon5,
      ].filter(Boolean),
      fotosConstruccion: [],
      descripcion: {
        'Proyecto': 'Arq. Pietro Ezio Zucchet',
        'Ejecución': 'Valto Estudio',
        'Dirección de la Construcción': 'Valto Estudio',
        'Diseño y Dimensionado Estructural': 'Ing. Gustavo Fleitas',
        'Tipología': 'Vivienda unifamiliar',
        'Diseño y Dimensionado de Climatización': 'Leader Ingenieria',
        'Area': '460 M2',
        'Dirección Técnica': 'ezestudio SAS',
        'Asistencia Técnica en Obra': 'M.M.O. Maximiliano Zandobal',
        'Estructuras': 'Ing. Graciano Zucchet',
        'Instalaciones': 'MMO Julio Cesar Ferreira, ING Ramon Ruchinsky',
        'Gestión de Documentación': 'M.M.O. Victoria Paredez',
        'Superficie Cubierta': '95m2',
        'Ubicación': 'C. Eva Perón & Av. Napoleón Uriburu, Ciudad de Formosa, Formosa, Argentina',
        'Año de finalización': '2025',
      },
    },
    {
      id: 2,
      nombre: 'Edificio Residencial',
      imagen: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200',
      categoria: 'Residencial en altura',
      ubicacion: 'Recoleta, Buenos Aires',
      año: '2022',
      resumen: 'Edificio residencial de alta gama ubicado en el corazón de Recoleta, con diseño moderno y acabados de lujo.',
      fotosProyectoTerminado: [
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200',
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200',
        'https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?w=1200',
        'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200',
        'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200',
      ],
      renders: [
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200',
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200',
        'https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?w=1200',
        'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200',
        'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200',
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
        'Tipología': 'Residencial en altura',
        'Area': '1200 M2',
        'Ubicación': 'Recoleta, Buenos Aires, Argentina',
        'Año de finalización': '2022',
      },
    },
    {
      id: 4,
      nombre: 'Casa Minimalista',
      imagen: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200',
      categoria: 'Vivienda Unifamiliar',
      ubicacion: 'Pilar, Buenos Aires',
      año: '2023',
      resumen: 'Diseño minimalista que prioriza la simplicidad y la funcionalidad, creando espacios amplios y luminosos.',
      fotosProyectoTerminado: [
        'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200',
        'https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?w=1200',
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200',
        'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200',
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200',
      ],
      renders: [
        'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200',
        'https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?w=1200',
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200',
        'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200',
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200',
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
        'Tipología': 'Vivienda unifamiliar',
        'Area': '350 M2',
        'Ubicación': 'Pilar, Buenos Aires, Argentina',
        'Año de finalización': '2023',
      },
    },
    {
      id: 6,
      nombre: 'Villa Contemporánea',
      imagen: 'https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?w=1200',
      categoria: 'Residencial Premium',
      ubicacion: 'Carmelo, Uruguay',
      año: '2024',
      resumen: 'Villa de lujo con diseño contemporáneo, integrada perfectamente con el paisaje natural de Carmelo.',
      fotosProyectoTerminado: [
        'https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?w=1200',
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200',
        'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200',
        'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200',
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200',
      ],
      renders: [
        'https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?w=1200',
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200',
        'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200',
        'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200',
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200',
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
        'Tipología': 'Residencial Premium',
        'Area': '680 M2',
        'Ubicación': 'Carmelo, Uruguay',
        'Año de finalización': '2024',
      },
    },
  ];

  const handleVerProyecto = (proyecto) => {
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
      <div className="proyectos-finalizados-hero">
        <div className="proyectos-finalizados-hero-overlay"></div>
        <div className="proyectos-finalizados-hero-content">
          <h1 className="proyectos-finalizados-title">Proyectos Finalizados</h1>
          <p className="proyectos-finalizados-subtitle">
            Obras completadas que reflejan nuestra visión arquitectónica y compromiso con la excelencia
          </p>
        </div>
      </div>
      <section className="proyectos-finalizados-page">
        <div className="proyectos-finalizados-container">
          <div className="proyectos-finalizados-grid">
            {proyectosFinalizados.map((proyecto) => (
              <div key={proyecto.id} className="proyecto-finalizado-card">
                <div className="proyecto-finalizado-image">
                  <img src={proyecto.imagen} alt={proyecto.nombre} />
                  <div className="proyecto-finalizado-overlay">
                    <h3 className="proyecto-finalizado-nombre">{proyecto.nombre}</h3>
                    <p className="proyecto-finalizado-info">{proyecto.categoria}</p>
                    <p className="proyecto-finalizado-info">{proyecto.ubicacion}</p>
                    <p className="proyecto-finalizado-año">{proyecto.año}</p>
                    <button className="proyecto-finalizado-button" onClick={() => handleVerProyecto(proyecto)}>Ver Proyecto</button>
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
        tipoProyecto="finalizado"
      />
    </>
  );
};

export default ProyectosFinalizados;

