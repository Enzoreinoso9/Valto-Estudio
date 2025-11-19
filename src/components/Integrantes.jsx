import { useState } from 'react';
import './Integrantes.css';

const Integrantes = () => {
  const [selectedIntegrante, setSelectedIntegrante] = useState(null);

  // Datos de ejemplo - puedes reemplazarlos con datos reales
  const integrantes = [
    {
      id: 1,
      nombre: 'Juan Pérez',
      nombreCompleto: 'Juan Pérez',
      rol: 'Arquitecto Principal',
      foto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
      biografia:
        'Arquitecto con más de 15 años de experiencia en diseño arquitectónico y planificación urbana. Especializado en arquitectura sostenible y diseño contemporáneo.',
      formacion: 'Licenciado en Arquitectura - Universidad Nacional',
      infoAdicional: 'Miembro del Colegio de Arquitectos',
    },
    {
      id: 2,
      nombre: 'María González',
      nombreCompleto: 'María González',
      rol: 'Directora de Proyectos',
      foto: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
      biografia:
        'Arquitecta especializada en gestión de proyectos y diseño de interiores. Con amplia experiencia en proyectos residenciales y comerciales de gran escala.',
      formacion: 'Arquitecta - Universidad de Buenos Aires',
      infoAdicional: 'Certificada en BIM y diseño sostenible',
    },
    {
      id: 3,
      nombre: 'Carlos Rodríguez',
      nombreCompleto: 'Carlos Rodríguez',
      rol: 'Arquitecto Senior',
      foto: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
      biografia:
        'Arquitecto con enfoque en arquitectura moderna y tecnología aplicada. Experto en visualización arquitectónica y renderizado 3D.',
      formacion: 'Arquitecto - Universidad Tecnológica',
      infoAdicional: 'Especialista en diseño paramétrico',
    },
    {
      id: 4,
      nombre: 'Ana Martínez',
      nombreCompleto: 'Ana Martínez',
      rol: 'Diseñadora de Interiores',
      foto: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
      biografia:
        'Diseñadora de interiores con pasión por crear espacios funcionales y estéticamente atractivos. Especializada en diseño residencial y comercial.',
      formacion: 'Diseñadora de Interiores - Instituto de Diseño',
      infoAdicional: 'Certificada en diseño de espacios sostenibles',
    },
  ];

  const openModal = (integrante) => {
    setSelectedIntegrante(integrante);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedIntegrante(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="integrantes" className="integrantes">
      <div className="integrantes-container">
        <h2 className="integrantes-title">Nuestro Equipo</h2>
        <div className="integrantes-grid">
          {integrantes.map((integrante) => (
            <div key={integrante.id} className="integrante-card">
              <div className="integrante-foto">
                <img src={integrante.foto} alt={integrante.nombre} />
              </div>
              <h3 className="integrante-nombre">{integrante.nombre}</h3>
              <p className="integrante-rol">{integrante.rol}</p>
              <button
                className="integrante-button"
                onClick={() => openModal(integrante)}
              >
                Ver Info
              </button>
            </div>
          ))}
        </div>
      </div>

      {selectedIntegrante && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              ×
            </button>
            <div className="modal-body">
              <div className="modal-left">
                <img
                  src={selectedIntegrante.foto}
                  alt={selectedIntegrante.nombreCompleto}
                />
              </div>
              <div className="modal-right">
                <h2 className="modal-nombre">{selectedIntegrante.nombreCompleto}</h2>
                <p className="modal-rol">{selectedIntegrante.rol}</p>
                <div className="modal-section">
                  <h3>Biografía</h3>
                  <p>{selectedIntegrante.biografia}</p>
                </div>
                <div className="modal-section">
                  <h3>Formación</h3>
                  <p>{selectedIntegrante.formacion}</p>
                </div>
                <div className="modal-section">
                  <h3>Información Adicional</h3>
                  <p>{selectedIntegrante.infoAdicional}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Integrantes;

