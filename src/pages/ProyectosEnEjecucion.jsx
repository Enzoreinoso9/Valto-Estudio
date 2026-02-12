import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactoSection from '../components/ContactoSection';
import ProyectoModal from '../components/ProyectoModal';
import './ProyectosEnEjecucion.css';

// Casa San Agustin (en ejecución)
import casaSanAgustinRender1 from '../assets/projects/ejecucion/Casa-SanAgustin/Renders/render1.webp';
import casaSanAgustinRender2 from '../assets/projects/ejecucion/Casa-SanAgustin/Renders/render2.webp';
import casaSanAgustinRender3 from '../assets/projects/ejecucion/Casa-SanAgustin/Renders/render3.webp';
import casaSanAgustinRender4 from '../assets/projects/ejecucion/Casa-SanAgustin/Renders/render4.webp';
import casaSanAgustinObra1 from '../assets/projects/ejecucion/Casa-SanAgustin/Obras/obra1.webp';
import casaSanAgustinObra2 from '../assets/projects/ejecucion/Casa-SanAgustin/Obras/obra2.webp';
import casaSanAgustinObra3 from '../assets/projects/ejecucion/Casa-SanAgustin/Obras/obra3.webp';
import casaSanAgustinObra4 from '../assets/projects/ejecucion/Casa-SanAgustin/Obras/obra4.webp';
import casaSanAgustinObra5 from '../assets/projects/ejecucion/Casa-SanAgustin/Obras/obra5.webp';

// Edificio Incone (en ejecución)
import edificioInconeRender1 from '../assets/projects/ejecucion/Edificio-IC/Renders/render1.webp';
import edificioInconeObra1 from '../assets/projects/ejecucion/Edificio-IC/Obras/obra1.webp';
import edificioInconeObra2 from '../assets/projects/ejecucion/Edificio-IC/Obras/obra2.webp';
import edificioInconeObra3 from '../assets/projects/ejecucion/Edificio-IC/Obras/obra3.webp';
import edificioInconeObra4 from '../assets/projects/ejecucion/Edificio-IC/Obras/obra4.webp';

const ProyectosEnEjecucion = () => {
  const [selectedProyecto, setSelectedProyecto] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const proyectosEnEjecucion = [
    {
      id: 6,
      nombre: 'CASA SAN AGUSTIN',
      imagen: casaSanAgustinRender1,
      categoria: 'Vivienda',
      ubicacion: 'Ciudad de Formosa, Formosa',
      resumen: 'Proyecto de vivienda en desarrollo con diseño contemporáneo.',
      renders: [
        casaSanAgustinRender1,
        casaSanAgustinRender2,
        casaSanAgustinRender3,
        casaSanAgustinRender4,
      ],
      fotosConstruccion: [
        casaSanAgustinObra1,
        casaSanAgustinObra2,
        casaSanAgustinObra3,
        casaSanAgustinObra4,
        casaSanAgustinObra5,
      ],
      descripcion: {
        'Tipología': 'Vivienda',
        'Ubicación': 'San Agustín, Argentina',
        'Estado': 'En construcción',
      },
    },
    {
      id: 7,
      nombre: 'EDIFICIO INCONE',
      imagen: edificioInconeRender1,
      categoria: 'Edificio',
      ubicacion: 'Ciudad de Formosa, Formosa',
      resumen: 'Edificio residencial de 29 unidades diseñado para integrar funcionalidad, calidad constructiva y diseño contemporáneo.',
      descripcionModal: 'Desarrollo de vivienda colectiva compuesto por planta baja, siete niveles y azotea, con un total de 29 apartamentos. El proyecto articula diseño arquitectónico, eficiencia funcional y calidad constructiva, generando espacios habitacionales modernos y bien resueltos.',
      renders: [edificioInconeRender1],
      fotosConstruccion: [
        edificioInconeObra1,
        edificioInconeObra2,
        edificioInconeObra3,
        edificioInconeObra4,
      ],
      descripcion: {
        'Tipología': 'Edificio',
        'Ubicación': 'En desarrollo',
        'Estado': 'En construcción',
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
                    {proyecto.resumen && (
                      <p className="proyecto-ejecucion-resumen">{proyecto.resumen}</p>
                    )}
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

