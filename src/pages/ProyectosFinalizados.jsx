import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactoSection from '../components/ContactoSection';
import ProyectoModal from '../components/ProyectoModal';
import './ProyectosFinalizados.css';

// Casa EP - Cocina
import casaEpCocina1 from '../assets/projects/finalizados/Casa-EP/Renders/Cocina/render1.webp';
import casaEpCocina2 from '../assets/projects/finalizados/Casa-EP/Renders/Cocina/render2.webp';
import casaEpCocina3 from '../assets/projects/finalizados/Casa-EP/Renders/Cocina/render3.webp';
import casaEpCocina4 from '../assets/projects/finalizados/Casa-EP/Renders/Cocina/render4.webp';
import casaEpCocina5 from '../assets/projects/finalizados/Casa-EP/Renders/Cocina/render5.webp';
import casaEpCocinaObra1 from '../assets/projects/finalizados/Casa-EP/Obras/Cocina/obra1.webp';
import casaEpCocinaObra2 from '../assets/projects/finalizados/Casa-EP/Obras/Cocina/obra2.webp';
import casaEpCocinaObra3 from '../assets/projects/finalizados/Casa-EP/Obras/Cocina/obra3.webp';
import casaEpCocinaObra4 from '../assets/projects/finalizados/Casa-EP/Obras/Cocina/obra4.webp';
import casaEpCocinaTerminado1 from '../assets/projects/finalizados/Casa-EP/Terminados/Cocina/terminado1.webp';
import casaEpCocinaTerminado2 from '../assets/projects/finalizados/Casa-EP/Terminados/Cocina/terminado2.webp';
import casaEpCocinaTerminado3 from '../assets/projects/finalizados/Casa-EP/Terminados/Cocina/terminado3.webp';
// Casa EP - Piscina
import casaEpPiscinaRender1 from '../assets/projects/finalizados/Casa-EP/Renders/Piscina/render1.webp';
import casaEpPiscinaRender2 from '../assets/projects/finalizados/Casa-EP/Renders/Piscina/render2.webp';
import casaEpPiscinaObra1 from '../assets/projects/finalizados/Casa-EP/Obras/Piscina/obra1.webp';
import casaEpPiscinaObra2 from '../assets/projects/finalizados/Casa-EP/Obras/Piscina/obra2.webp';
import casaEpPiscinaObra3 from '../assets/projects/finalizados/Casa-EP/Obras/Piscina/obra3.webp';
import casaEpPiscinaObra4 from '../assets/projects/finalizados/Casa-EP/Obras/Piscina/obra4.webp';
import casaEpPiscinaObra5 from '../assets/projects/finalizados/Casa-EP/Obras/Piscina/obra5.webp';

// Iglesia Sagrada Familia
import iglesiaRender1 from '../assets/projects/finalizados/Iglesia/Renders/render1.webp';
import iglesiaRender2 from '../assets/projects/finalizados/Iglesia/Renders/render2.webp';
import iglesiaRender3 from '../assets/projects/finalizados/Iglesia/Renders/render3.webp';
import iglesiaObra1 from '../assets/projects/finalizados/Iglesia/Obras/obra1.webp';
import iglesiaObra2 from '../assets/projects/finalizados/Iglesia/Obras/obra2.webp';
import iglesiaObra3 from '../assets/projects/finalizados/Iglesia/Obras/obra3.webp';
import iglesiaObra4 from '../assets/projects/finalizados/Iglesia/Obras/obra4.webp';
import iglesiaObra5 from '../assets/projects/finalizados/Iglesia/Obras/obra5.webp';
import iglesiaObra6 from '../assets/projects/finalizados/Iglesia/Obras/obra6.webp';

// Polideportivo San Martin
import polideportivoThumb from '../assets/projects/finalizados/Polideportivo-SanMartin/Renders/render2.webp';
import polideportivoTerminado1 from '../assets/projects/finalizados/Polideportivo-SanMartin/Terminados/finalizado1.webp';
import polideportivoTerminado2 from '../assets/projects/finalizados/Polideportivo-SanMartin/Terminados/finalizado2.webp';
import polideportivoTerminado3 from '../assets/projects/finalizados/Polideportivo-SanMartin/Terminados/finalizado3.webp';
import polideportivoTerminado4 from '../assets/projects/finalizados/Polideportivo-SanMartin/Terminados/finalizado4.webp';
import polideportivoTerminado5 from '../assets/projects/finalizados/Polideportivo-SanMartin/Terminados/finalizado5.webp';
import polideportivoRender1 from '../assets/projects/finalizados/Polideportivo-SanMartin/Renders/render1.webp';
import polideportivoRender2 from '../assets/projects/finalizados/Polideportivo-SanMartin/Renders/render2.webp';
import polideportivoRender3 from '../assets/projects/finalizados/Polideportivo-SanMartin/Renders/render3.webp';
import polideportivoRender4 from '../assets/projects/finalizados/Polideportivo-SanMartin/Renders/render4.webp';
import polideportivoRender5 from '../assets/projects/finalizados/Polideportivo-SanMartin/Renders/render5.webp';
import polideportivoObra1 from '../assets/projects/finalizados/Polideportivo-SanMartin/Obras/obra1.webp';
import polideportivoObra2 from '../assets/projects/finalizados/Polideportivo-SanMartin/Obras/obra2.webp';
import polideportivoObra3 from '../assets/projects/finalizados/Polideportivo-SanMartin/Obras/obra3.webp';

// Local Maipu
import localMaipuThumb from '../assets/projects/finalizados/Local-Maipu/Renders/render2.webp';
import localMaipuTerminado1 from '../assets/projects/finalizados/Local-Maipu/Terminados/finalizado1.webp';
import localMaipuTerminado2 from '../assets/projects/finalizados/Local-Maipu/Terminados/finalizado2.webp';
import localMaipuTerminado3 from '../assets/projects/finalizados/Local-Maipu/Terminados/finalizado3.webp';
import localMaipuTerminado4 from '../assets/projects/finalizados/Local-Maipu/Terminados/finalizado4.webp';
import localMaipuRender1 from '../assets/projects/finalizados/Local-Maipu/Renders/render1.webp';
import localMaipuRender2 from '../assets/projects/finalizados/Local-Maipu/Renders/render2.webp';
import localMaipuRender3 from '../assets/projects/finalizados/Local-Maipu/Renders/render3.webp';
import localMaipuRender4 from '../assets/projects/finalizados/Local-Maipu/Renders/render4.webp';
import localMaipuObra1 from '../assets/projects/finalizados/Local-Maipu/Obras/obra1.webp';
import localMaipuObra2 from '../assets/projects/finalizados/Local-Maipu/Obras/obra2.webp';
import localMaipuObra3 from '../assets/projects/finalizados/Local-Maipu/Obras/obra3.webp';

// Oficina Ucpim
import oficinaUcpimThumb from '../assets/projects/finalizados/Oficina-Ucpim/Renders/render1.webp';
import oficinaUcpimTerminado1 from '../assets/projects/finalizados/Oficina-Ucpim/Terminados/finalizado1.webp';
import oficinaUcpimTerminado2 from '../assets/projects/finalizados/Oficina-Ucpim/Terminados/finalizado2.webp';
import oficinaUcpimTerminado3 from '../assets/projects/finalizados/Oficina-Ucpim/Terminados/finalizado3.webp';
import oficinaUcpimTerminado4 from '../assets/projects/finalizados/Oficina-Ucpim/Terminados/finalizado4.webp';
import oficinaUcpimTerminado5 from '../assets/projects/finalizados/Oficina-Ucpim/Terminados/finalizado5.webp';
import oficinaUcpimRender1 from '../assets/projects/finalizados/Oficina-Ucpim/Renders/render1.webp';
import oficinaUcpimRender2 from '../assets/projects/finalizados/Oficina-Ucpim/Renders/render2.webp';
import oficinaUcpimRender3 from '../assets/projects/finalizados/Oficina-Ucpim/Renders/render3.webp';
import oficinaUcpimRender4 from '../assets/projects/finalizados/Oficina-Ucpim/Renders/render4.webp';
import oficinaUcpimRender5 from '../assets/projects/finalizados/Oficina-Ucpim/Renders/render5.webp';

const getFirstImage = (item) => {
  if (!item) return null;
  const r = item.renders || [];
  const t = item.fotosProyectoTerminado || [];
  const c = item.fotosConstruccion || [];
  if (r.length) return r[0];
  if (t.length) return t[0];
  if (c.length) return c[0];
  return item.imagen || null;
};

const ProyectosFinalizados = () => {
  const [selectedProyecto, setSelectedProyecto] = useState(null);
  const [initialSubProyectoIndex, setInitialSubProyectoIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cardSubIndex, setCardSubIndex] = useState({});

  const proyectosFinalizados = [
    {
      id: 1,
      nombre: 'CASA EVA PERÓN',
      imagen: casaEpCocina1,
      categoria: 'Vivienda Unifamiliar',
      ubicacion: 'Ciudad de Formosa, Formosa',
      año: '2025',
      subProyectos: [
        {
          nombre: 'Cocina & Comedor',
          resumen: 'Cocina moderna integrada al comedor, donde minimalismo y funcionalidad se combinan en un espacio cálido y luminoso.',
          descripcionModal: 'Proyecto de cocina contemporánea con integración directa al comedor, pensado para el uso cotidiano y la fluidez espacial. Líneas simples, paleta neutra y madera natural generan amplitud visual, orden y equilibrio, logrando un ambiente funcional sin perder calidez.',
          fotosProyectoTerminado: [
            casaEpCocinaTerminado1,
            casaEpCocinaTerminado2,
            casaEpCocinaTerminado3,
          ],
          renders: [
            casaEpCocina1,
            casaEpCocina2,
            casaEpCocina3,
            casaEpCocina4,
            casaEpCocina5,
          ],
          fotosConstruccion: [
            casaEpCocinaObra1,
            casaEpCocinaObra2,
            casaEpCocinaObra3,
            casaEpCocinaObra4,
          ],
          descripcion: {
            'Proyecto': 'Arq. Pietro Ezio Zucchet',
            'Ejecución': 'Valto Estudio',
            'Dirección de la Construcción': 'Valto Estudio',
            'Diseño y Dimensionado Estructural': 'Ing. Gustavo Fleitas',
            'Tipología': 'Cocina y Comedor',
            'Superficie': '95m2',
            'Ubicación': 'C. Eva Perón & Av. Napoleón Uriburu, Ciudad de Formosa, Formosa, Argentina',
            'Año de finalización': '2025',
          },
        },
        {
          nombre: 'Quincho & Piscina',
          resumen: 'Quincho y piscina diseñados como un espacio de encuentro que integra interior y exterior en una propuesta sobria y funcional.',
          descripcionModal: 'Proyecto ejecutado en tres meses, donde diseño y funcionalidad convergen en un único espacio social. La paleta sobria y la apertura hacia el exterior refuerzan la conexión con el entorno, mientras que la piscina se convierte en el eje central para el descanso y el disfrute familiar.',
          fotosProyectoTerminado: [],
          renders: [
            casaEpPiscinaRender1,
            casaEpPiscinaRender2,
          ],
          fotosConstruccion: [
            casaEpPiscinaObra1,
            casaEpPiscinaObra2,
            casaEpPiscinaObra3,
            casaEpPiscinaObra4,
            casaEpPiscinaObra5,
          ],
          descripcion: {
            'Proyecto': 'Arq. Pietro Ezio Zucchet',
            'Ejecución': 'Valto Estudio',
            'Tipología': 'Quincho y Piscina',
            'Area': '460 M2',
            'Ubicación': 'C. Eva Perón & Av. Napoleón Uriburu, Ciudad de Formosa, Formosa, Argentina',
            'Año de finalización': '2025',
          },
        },
      ],
    },
    {
      id: 9,
      nombre: 'IGLESIA SAGRADA FAMILIA',
      imagen: iglesiaRender1,
      categoria: 'Edificación religiosa',
      ubicacion: 'Ciudad de Formosa, Formosa',
      año: '2025',
      resumen: 'Intervención interior con cielorraso suspendido que mejora la acústica, iluminación y estética del espacio religioso.',
      descripcionModal: 'Proyecto de diseño y ejecución de cielorraso suspendido en PVC y Durlock, orientado a optimizar la acústica, iluminación y orden visual del templo. La intervención busca generar un ambiente más armónico, cálido y funcional para la comunidad, cuidando cada detalle constructivo.',
      fotosProyectoTerminado: [],
      renders: [
        iglesiaRender1,
        iglesiaRender2,
        iglesiaRender3,
      ],
      fotosConstruccion: [
        iglesiaObra1,
        iglesiaObra2,
        iglesiaObra3,
        iglesiaObra4,
        iglesiaObra5,
        iglesiaObra6,
      ],
      descripcion: {
        'Tipología': 'Iglesia',
        'Ubicación': 'Formosa, Argentina',
        'Año de finalización': '2025',
      },
    },
    {
      id: 2,
      nombre: 'POLIDEPORTIVO SAN MARTIN 2',
      imagen: polideportivoThumb,
      categoria: 'Polideportivo',
      ubicacion: 'San Martín 2, Formosa',
      año: '2025',
      resumen: 'Espacio deportivo contemporáneo diseñado para la comunidad, combinando amplitud, funcionalidad y confort.',
      descripcionModal: 'Polideportivo concebido como un espacio de encuentro y práctica deportiva, con sectores pensados para garantizar comodidad, seguridad y versatilidad. La iluminación natural y la organización de áreas abiertas favorecen la experiencia del usuario, mientras que el bar y la cocina complementan el conjunto con funcionalidad y coherencia estética.',
      fotosProyectoTerminado: [
        polideportivoTerminado1,
        polideportivoTerminado2,
        polideportivoTerminado3,
        polideportivoTerminado4,
        polideportivoTerminado5,
      ],
      renders: [
        polideportivoRender1,
        polideportivoRender2,
        polideportivoRender3,
        polideportivoRender4,
        polideportivoRender5,
      ],
      fotosConstruccion: [
        polideportivoObra1,
        polideportivoObra2,
        polideportivoObra3,
      ],
      descripcion: {
        'Tipología': 'Polideportivo',
        'Ubicación': 'San Martín, Argentina',
        'Año de finalización': '2025',
      },
    },
    {
      id: 7,
      nombre: 'LOCAL MUNDO VENEZIA',
      imagen: localMaipuThumb,
      categoria: 'Comercial',
      ubicacion: 'Ciudad de Formosa, Formosa',
      año: '2025',
      resumen: 'Diseño arquitectónico y mobiliario pensados para fortalecer la identidad comercial de Mundo Venezia Cotillón.',
      descripcionModal: 'Proyecto integral de arquitectura y mobiliario orientado a potenciar la identidad de marca y optimizar la experiencia del cliente. La distribución funcional y el diseño interior trabajan en conjunto para generar un espacio atractivo, ordenado y eficiente.',
      fotosProyectoTerminado: [
        localMaipuTerminado1,
        localMaipuTerminado2,
        localMaipuTerminado3,
        localMaipuTerminado4,
      ],
      renders: [
        localMaipuRender1,
        localMaipuRender2,
        localMaipuRender3,
        localMaipuRender4,
      ],
      fotosConstruccion: [
        localMaipuObra1,
        localMaipuObra2,
        localMaipuObra3,
      ],
      descripcion: {
        'Tipología': 'Local Comercial',
        'Ubicación': 'Maipú, Argentina',
        'Año de finalización': '2025',
      },
    },
    {
      id: 8,
      nombre: 'OFICINA UCPIM',
      imagen: oficinaUcpimThumb,
      categoria: 'Oficinas',
      ubicacion: 'Ciudad de Formosa, Formosa',
      año: '2025',
      resumen: 'Oficina con espacios de trabajo modernos y funcionales.',
      fotosProyectoTerminado: [
        oficinaUcpimTerminado1,
        oficinaUcpimTerminado2,
        oficinaUcpimTerminado3,
        oficinaUcpimTerminado4,
        oficinaUcpimTerminado5,
      ],
      renders: [
        oficinaUcpimRender1,
        oficinaUcpimRender2,
        oficinaUcpimRender3,
        oficinaUcpimRender4,
        oficinaUcpimRender5,
      ],
      fotosConstruccion: [],
      descripcion: {
        'Tipología': 'Oficina',
        'Ubicación': 'Argentina',
        'Año de finalización': '2025',
      },
    },
  ];

  const getSubIndex = (proyecto) => proyecto.subProyectos ? (cardSubIndex[proyecto.id] ?? 0) : 0;
  const setSubIndex = (proyectoId, index) => setCardSubIndex((prev) => ({ ...prev, [proyectoId]: index }));

  const handleVerProyecto = (proyecto) => {
    setSelectedProyecto(proyecto);
    setInitialSubProyectoIndex(proyecto.subProyectos ? getSubIndex(proyecto) : 0);
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
            {proyectosFinalizados.map((proyecto) => {
              const hasSub = proyecto.subProyectos?.length > 0;
              const subIndex = getSubIndex(proyecto);
              const displaySub = hasSub ? proyecto.subProyectos[subIndex] : null;
              const previewImage = hasSub && displaySub
                ? (getFirstImage(displaySub) || proyecto.imagen)
                : proyecto.imagen;
              const previewResumen = (hasSub && displaySub?.resumen) ? displaySub.resumen : proyecto.resumen;
              return (
                <div key={proyecto.id} className="proyecto-finalizado-card">
                  <div className="proyecto-finalizado-image">
                    <img src={previewImage} alt={proyecto.nombre} />
                    <div className="proyecto-finalizado-overlay">
                      <h3 className="proyecto-finalizado-nombre">{proyecto.nombre}</h3>
                      {hasSub && (
                        <div className="proyecto-finalizado-subtabs" onClick={(e) => e.stopPropagation()}>
                          {proyecto.subProyectos.map((sub, index) => (
                            <button
                              key={sub.nombre}
                              type="button"
                              className={`proyecto-finalizado-subtab ${index === subIndex ? 'active' : ''}`}
                              onClick={() => setSubIndex(proyecto.id, index)}
                            >
                              {sub.nombre}
                            </button>
                          ))}
                        </div>
                      )}
                      <p className="proyecto-finalizado-info">{proyecto.categoria}</p>
                      <p className="proyecto-finalizado-info">{proyecto.ubicacion}</p>
                      <p className="proyecto-finalizado-año">{proyecto.año}</p>
                      {previewResumen && (
                        <p className="proyecto-finalizado-resumen">{previewResumen}</p>
                      )}
                      <button className="proyecto-finalizado-button" onClick={() => handleVerProyecto(proyecto)}>Ver Proyecto</button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <ContactoSection />
      <Footer />
      <ProyectoModal
        proyecto={selectedProyecto}
        initialSubProyectoIndex={initialSubProyectoIndex}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        tipoProyecto="finalizado"
      />
    </>
  );
};

export default ProyectosFinalizados;

