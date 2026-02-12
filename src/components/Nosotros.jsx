import './Nosotros.css';

const Nosotros = () => {
  return (
    <section id="quienes-somos" className="nosotros">
      <div className="nosotros-container">
        <div className="nosotros-content">
          <div className="nosotros-text">
            <h2 className="nosotros-title">Nuestra Filosofía</h2>
            <p className="nosotros-description">
              Valto Estudio es un equipo de profesionales apasionados por el diseño
              arquitectónico y la construcción. Nos especializamos en crear espacios funcionales,
              sostenibles y estéticamente impactantes que responden a las necesidades de nuestros
              clientes.
            </p>
            <p className="nosotros-description">
              Con años de experiencia en el sector, hemos desarrollado proyectos residenciales,
              comerciales e institucionales que reflejan nuestra visión de arquitectura contemporánea
              y compromiso con la excelencia.
            </p>
            <p className="nosotros-description">
              Nuestro enfoque combina la innovación tecnológica con el respeto por el entorno,
              creando soluciones arquitectónicas que perduran en el tiempo.
            </p>
          </div>
          <div className="nosotros-image">
            <div className="nosotros-image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800"
                alt="Valto Estudio"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nosotros;

