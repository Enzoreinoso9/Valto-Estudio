import { useState } from 'react';
import './ProyectoModal.css';

const ProyectoModal = ({ proyecto, isOpen, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!isOpen || !proyecto) return null;

  const allImages = [
    ...(proyecto.renders || []),
    ...(proyecto.fotosConstruccion || [])
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        
        <div className="modal-body">
          {/* Carrusel de Imágenes */}
          <div className="modal-carousel">
            {allImages.length > 0 ? (
              <>
                <div className="carousel-main">
                  <img src={allImages[currentImageIndex]} alt={`${proyecto.nombre} - Imagen ${currentImageIndex + 1}`} />
                  {allImages.length > 1 && (
                    <>
                      <button className="carousel-btn carousel-btn-prev" onClick={prevImage}>‹</button>
                      <button className="carousel-btn carousel-btn-next" onClick={nextImage}>›</button>
                    </>
                  )}
                  <div className="carousel-counter">
                    {currentImageIndex + 1} / {allImages.length}
                  </div>
                </div>
                {allImages.length > 1 && (
                  <div className="carousel-thumbnails">
                    {allImages.map((img, index) => (
                      <img
                        key={index}
                        src={img}
                        alt={`Thumbnail ${index + 1}`}
                        className={index === currentImageIndex ? 'active' : ''}
                        onClick={() => goToImage(index)}
                      />
                    ))}
                  </div>
                )}
              </>
            ) : (
              <div className="carousel-placeholder">
                <p>No hay imágenes disponibles</p>
              </div>
            )}
          </div>

          {/* Contenido Scrolleable */}
          <div className="modal-scrollable">
            {/* Información Básica */}
            <div className="modal-info-section">
              <h2 className="modal-project-name">{proyecto.nombre}</h2>
              <div className="modal-meta">
                {proyecto.año && <span className="modal-year">Año: {proyecto.año}</span>}
                {proyecto.progreso && <span className="modal-progress">Progreso: {proyecto.progreso}</span>}
              </div>
              {proyecto.resumen && (
                <p className="modal-resumen">{proyecto.resumen}</p>
              )}
            </div>

            {/* Descripción Detallada */}
            {proyecto.descripcion && (
              <div className="modal-description-section">
                <h3 className="modal-section-title">Detalles del Proyecto</h3>
                <div className="modal-description-grid">
                  {Object.entries(proyecto.descripcion).map(([key, value]) => (
                    <div key={key} className="modal-description-item">
                      <span className="modal-description-label">{key}:</span>
                      <span className="modal-description-value">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProyectoModal;

