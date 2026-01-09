import { useState } from 'react';
import './Integrantes.css';

const Integrantes = () => {
  const [selectedIntegrante, setSelectedIntegrante] = useState(null);

  // Datos de ejemplo - puedes reemplazarlos con datos reales
  const integrantes = [
    {
      id: 1,
      nombre: 'Nicolas Echeverria',
      nombreCompleto: 'Nicolas Echeverria',
      rol: 'Arquitecto Principal',
      foto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
      biografia:
        'Arquitecto con más de 15 años de experiencia en diseño arquitectónico y planificación urbana. Especializado en arquitectura sostenible y diseño contemporáneo.',
      formacion: 'Licenciado en Arquitectura - Universidad Nacional',
      infoAdicional: 'Miembro del Colegio de Arquitectos',
    },
    {
      id: 2,
      nombre: 'Sebastian Cardozo',
      nombreCompleto: 'Sebastian Cardozo',
      rol: 'Directora de Proyectos',
      foto: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
      biografia:
        'Arquitecta especializada en gestión de proyectos y diseño de interiores. Con amplia experiencia en proyectos residenciales y comerciales de gran escala.',
      formacion: 'Arquitecta - Universidad de Buenos Aires',
      infoAdicional: 'Certificada en BIM y diseño sostenible',
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

