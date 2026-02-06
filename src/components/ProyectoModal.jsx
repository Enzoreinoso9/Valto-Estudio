import { useState, useEffect } from 'react';
import './ProyectoModal.css';

const TABS_FINALIZADO = [
  { key: 'terminado', label: 'Proyecto terminado', imagesKey: 'fotosProyectoTerminado' },
  { key: 'renders', label: 'Renders', imagesKey: 'renders' },
  { key: 'construccion', label: 'Obra en construcción', imagesKey: 'fotosConstruccion' },
];

const TABS_EJECUCION = [
  { key: 'construccion', label: 'Obra en construcción', imagesKey: 'fotosConstruccion' },
  { key: 'renders', label: 'Renders', imagesKey: 'renders' },
];

const ProyectoModal = ({ proyecto, isOpen, onClose, tipoProyecto = 'ejecucion' }) => {
  const tabs = tipoProyecto === 'finalizado' ? TABS_FINALIZADO : TABS_EJECUCION;
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const activeTab = tabs[activeTabIndex];
  const currentImages = activeTab ? (proyecto?.[activeTab.imagesKey] || []) : [];
  const hasMultipleTabs = tabs.length > 1;

  useEffect(() => {
    if (!isOpen || !proyecto) return;
    setActiveTabIndex(0);
    setCurrentImageIndex(0);
  }, [isOpen, proyecto]);

  useEffect(() => {
    setCurrentImageIndex(0);
  }, [activeTabIndex]);

  if (!isOpen || !proyecto) return null;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % Math.max(1, currentImages.length));
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + Math.max(1, currentImages.length)) % Math.max(1, currentImages.length));
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>

        <div className="modal-body">
          <div className="modal-carousel">
            {/* Pestañas de categorías */}
            {hasMultipleTabs && (
              <div className="modal-tabs">
                {tabs.map((tab, index) => {
                  const images = proyecto[tab.imagesKey] || [];
                  const hasImages = images.length > 0;
                  return (
                    <button
                      key={tab.key}
                      type="button"
                      className={`modal-tab ${index === activeTabIndex ? 'active' : ''} ${!hasImages ? 'empty' : ''}`}
                      onClick={() => setActiveTabIndex(index)}
                    >
                      <span className="modal-tab-label">{tab.label}</span>
                      {hasImages && (
                        <span className="modal-tab-count">{images.length}</span>
                      )}
                    </button>
                  );
                })}
              </div>
            )}

            {/* Carrusel de la pestaña activa */}
            {currentImages.length > 0 ? (
              <>
                <div className="carousel-main">
                  <img
                    src={currentImages[currentImageIndex]}
                    alt={`${proyecto.nombre} - ${activeTab?.label} ${currentImageIndex + 1}`}
                  />
                  {currentImages.length > 1 && (
                    <>
                      <button type="button" className="carousel-btn carousel-btn-prev" onClick={prevImage} aria-label="Imagen anterior">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
                      </button>
                      <button type="button" className="carousel-btn carousel-btn-next" onClick={nextImage} aria-label="Siguiente imagen">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
                      </button>
                    </>
                  )}
                  <div className="carousel-counter">
                    {currentImageIndex + 1} / {currentImages.length}
                  </div>
                </div>
                {currentImages.length > 1 && (
                  <div className="carousel-thumbnails">
                    {currentImages.map((img, index) => (
                      <img
                        key={index}
                        src={img}
                        alt={`${activeTab?.label} ${index + 1}`}
                        className={index === currentImageIndex ? 'active' : ''}
                        onClick={() => goToImage(index)}
                      />
                    ))}
                  </div>
                )}
              </>
            ) : (
              <div className="carousel-placeholder">
                <p>No hay imágenes en esta categoría</p>
              </div>
            )}
          </div>

          <div className="modal-scrollable">
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
