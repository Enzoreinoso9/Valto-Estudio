import { useState } from 'react';
import './Contacto.css';

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario
    console.log('Formulario enviado:', formData);
    alert('¡Mensaje enviado! Nos pondremos en contacto contigo pronto.');
    setFormData({ nombre: '', email: '', mensaje: '' });
  };

  return (
    <section id="contacto" className="contacto">
      <div className="contacto-container">
        <div className="contacto-header">
          <div className="contacto-logo">
            <h2>Valto Estudio</h2>
          </div>
          <p className="contacto-frase">¿Tenés un proyecto en mente?</p>
        </div>

        <div className="contacto-form-section">
          <form className="contacto-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="nombre">Nombre</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="mensaje">Mensaje</label>
              <textarea
                id="mensaje"
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                rows="6"
                required
              ></textarea>
            </div>
            <button type="submit" className="form-submit">
              Enviar
            </button>
          </form>
        </div>

        <div className="contacto-info-section">
          <h3 className="contacto-info-title">Datos de Contacto</h3>
          <div className="contacto-info-container">
            <div className="contacto-info-item">
              <span className="contacto-icon">📍</span>
              <div>
                <strong>Dirección</strong>
                <p>Av. Principal 1234, Buenos Aires, Argentina</p>
              </div>
            </div>
            <div className="contacto-info-item">
              <span className="contacto-icon">✉️</span>
              <div>
                <strong>Email</strong>
                <p>
                  <a href="mailto:info@valtoestudio.com">info@valtoestudio.com</a>
                </p>
              </div>
            </div>
            <div className="contacto-info-item">
              <span className="contacto-icon">📞</span>
              <div>
                <strong>Teléfono</strong>
                <p>
                  <a href="tel:+541123456789">+54 11 2345-6789</a>
                </p>
              </div>
            </div>
            <div className="contacto-info-item">
              <span className="contacto-icon">🔗</span>
              <div>
                <strong>Redes Sociales</strong>
                <div className="contacto-social">
                  <a
                    href="https://instagram.com/valtoestudio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    Instagram
                  </a>
                  <a
                    href="https://wa.me/541123456789"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;

