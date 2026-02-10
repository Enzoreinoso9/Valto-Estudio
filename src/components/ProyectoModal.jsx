import { useState, useEffect, useRef } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import './ProyectoModal.css';

const TABS_FINALIZADO = [
  { key: 'terminado', label: 'Proyecto terminado', imagesKey: 'fotosProyectoTerminado' },
  { key: 'renders', label: 'Renders', imagesKey: 'renders' },
  { key: 'construccion', label: 'Obra en construcción', imagesKey: 'fotosConstruccion' },
];

const TABS_EJECUCION = [
  { key: 'renders', label: 'Renders', imagesKey: 'renders' },
  { key: 'construccion', label: 'Obra en construcción', imagesKey: 'fotosConstruccion' },
];

const SCROLL_STEP = 80;

const ProyectoModal = ({ proyecto, initialSubProyectoIndex = 0, isOpen, onClose, tipoProyecto = 'ejecucion' }) => {
  const tabs = tipoProyecto === 'finalizado' ? TABS_FINALIZADO : TABS_EJECUCION;
  const hasSubProyectos = proyecto?.subProyectos?.length > 0;
  const [activeSubProyectoIndex, setActiveSubProyectoIndex] = useState(initialSubProyectoIndex);
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImageExpanded, setIsImageExpanded] = useState(false);
  const scrollableRef = useRef(null);

  const displayProyecto = hasSubProyectos ? proyecto.subProyectos[activeSubProyectoIndex] : proyecto;
  const activeTab = tabs[activeTabIndex];
  const currentImages = displayProyecto && activeTab ? (displayProyecto[activeTab.imagesKey] || []) : [];
  const hasMultipleTabs = tabs.length > 1;

  useEffect(() => {
    if (!isOpen || !proyecto) return;
    setActiveSubProyectoIndex(initialSubProyectoIndex);
    setActiveTabIndex(0);
    setCurrentImageIndex(0);
    setIsImageExpanded(false);
  }, [isOpen, proyecto, initialSubProyectoIndex]);

  useEffect(() => {
    setCurrentImageIndex(0);
  }, [activeTabIndex]);

  useEffect(() => {
    if (!isImageExpanded) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsImageExpanded(false);
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isImageExpanded, currentImageIndex, currentImages.length]);

  useEffect(() => {
    if (!isOpen || isImageExpanded) return;
    const handleKeyDown = (e) => {
      if (e.key !== 'ArrowUp' && e.key !== 'ArrowDown') return;
      const el = scrollableRef.current;
      if (!el) return;
      const isUp = e.key === 'ArrowUp';
      el.scrollBy({ top: isUp ? -SCROLL_STEP : SCROLL_STEP, behavior: 'smooth' });
      e.preventDefault();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, isImageExpanded]);

  if (!isOpen || !proyecto || !displayProyecto) return null;

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
            {/* Pestañas de categorías de imágenes */}
            {hasMultipleTabs && (
              <div className="modal-tabs">
                {tabs.map((tab, index) => {
                  const images = displayProyecto[tab.imagesKey] || [];
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
                  <button
                    type="button"
                    className="carousel-image-wrap"
                    onClick={() => setIsImageExpanded(true)}
                    aria-label="Ver imagen en grande"
                  >
                    <img
                      src={currentImages[currentImageIndex]}
                      alt={`${displayProyecto.nombre} - ${activeTab?.label} ${currentImageIndex + 1}`}
                    />
                  </button>
                  <button
                    type="button"
                    className="carousel-btn carousel-btn-expand"
                    onClick={() => setIsImageExpanded(true)}
                    aria-label="Ampliar imagen"
                    title="Ver imagen más grande"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/></svg>
                  </button>
                  {currentImages.length > 1 && (
                    <>
                      <button type="button" className="carousel-btn carousel-btn-prev" onClick={(e) => { e.stopPropagation(); prevImage(); }} aria-label="Imagen anterior"><FaArrowLeft size={16} /></button>
                      <button type="button" className="carousel-btn carousel-btn-next" onClick={(e) => { e.stopPropagation(); nextImage(); }} aria-label="Siguiente imagen"><FaArrowRight size={16} /></button>
                    </>
                  )}
                  <div className="carousel-counter">
                    {currentImageIndex + 1} / {currentImages.length}
                  </div>
                </div>
                {/* Lightbox: imagen en grande */}
                {isImageExpanded && (
                  <div
                    className="carousel-lightbox"
                    onClick={() => setIsImageExpanded(false)}
                  >
                    <button
                      type="button"
                      className="carousel-lightbox-close"
                      onClick={() => setIsImageExpanded(false)}
                      aria-label="Cerrar"
                    >
                      ×
                    </button>
                    <div className="carousel-lightbox-content" onClick={(e) => e.stopPropagation()}>
                      <div className="carousel-lightbox-image-wrap">
                        <img
                          src={currentImages[currentImageIndex]}
                          alt={`${displayProyecto.nombre} - ${activeTab?.label} ${currentImageIndex + 1}`}
                        />
                        {currentImages.length > 1 && (
                          <>
                            <button type="button" className="carousel-lightbox-prev" onClick={(e) => { e.stopPropagation(); prevImage(); }} aria-label="Anterior"><FaArrowLeft size={20} /></button>
                            <button type="button" className="carousel-lightbox-next" onClick={(e) => { e.stopPropagation(); nextImage(); }} aria-label="Siguiente"><FaArrowRight size={20} /></button>
                          </>
                        )}
                      </div>
                      {currentImages.length > 1 && (
                        <div className="carousel-lightbox-footer">
                          <span className="carousel-lightbox-counter">{currentImageIndex + 1} / {currentImages.length}</span>
                          <div className="carousel-lightbox-thumbnails">
                            {currentImages.map((img, index) => (
                              <button
                                key={index}
                                type="button"
                                onClick={(e) => { e.stopPropagation(); goToImage(index); }}
                                className={index === currentImageIndex ? 'active' : ''}
                              >
                                <img src={img} alt={`${activeTab?.label} ${index + 1}`} />
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </>
            ) : (
              <div className="carousel-placeholder">
                <p>No hay imágenes en esta categoría</p>
              </div>
            )}
          </div>

          <div ref={scrollableRef} className="modal-scrollable">
            <div className="modal-info-section">
              <h2 className="modal-project-name">
                {hasSubProyectos ? `${proyecto.nombre} — ${displayProyecto.nombre}` : proyecto.nombre}
              </h2>
              <div className="modal-meta">
                {(proyecto.año || displayProyecto.año) && (
                  <span className="modal-year">Año: {displayProyecto.año || proyecto.año}</span>
                )}
                {(proyecto.progreso || displayProyecto.progreso) && (
                  <span className="modal-progress">Progreso: {displayProyecto.progreso || proyecto.progreso}</span>
                )}
              </div>
              {(displayProyecto.resumen || proyecto.resumen) && (
                <p className="modal-resumen">{displayProyecto.resumen || proyecto.resumen}</p>
              )}
            </div>

            {(displayProyecto.descripcion || proyecto.descripcion) && (
              <div className="modal-description-section">
                <h3 className="modal-section-title">Detalles del Proyecto</h3>
                <div className="modal-description-grid">
                  {Object.entries(displayProyecto.descripcion || proyecto.descripcion || {}).map(([key, value]) => (
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
