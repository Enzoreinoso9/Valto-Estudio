import { useState } from 'react';
import './Contacto.css';

const WEB3FORMS_ACCESS_KEY = 'e3e02803-ce8c-4ae0-a9c7-d06eb92fb15f';

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: '',
  });
  const [result, setResult] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (result) setResult('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult('Enviando...');
    const form = e.target;
    const data = new FormData(form);
    data.append('access_key', WEB3FORMS_ACCESS_KEY);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: data,
      });
      const json = await response.json();
      if (json.success) {
        setResult('Mensaje enviado correctamente. Nos pondremos en contacto pronto.');
        setFormData({ nombre: '', email: '', mensaje: '' });
      } else {
        setResult('Hubo un error al enviar. Intentá de nuevo o contactanos por email.');
      }
    } catch {
      setResult('Error de conexión. Intentá de nuevo más tarde.');
    }
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
            <button type="submit" className="form-submit" disabled={result === 'Enviando...'}>
              {result === 'Enviando...' ? 'Enviando...' : 'Enviar'}
            </button>
            {result && result !== 'Enviando...' && (
              <p className={`form-result ${result.includes('Error') || result.includes('error') ? 'form-result-error' : 'form-result-success'}`}>
                {result}
              </p>
            )}
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
                  <a href="mailto:valto.estudio.arq@gmail.com">valto.estudio.arq@gmail.com</a>
                </p>
              </div>
            </div>
            <div className="contacto-info-item">
              <span className="contacto-icon">📞</span>
              <div>
                <strong>Teléfono</strong>
                <p>
                  <a href="tel:+541123456789">+54 9 370 480-1011</a>
                </p>
              </div>
            </div>
            <div className="contacto-info-item">
              <span className="contacto-icon">🔗</span>
              <div>
                <strong>Redes Sociales</strong>
                <div className="contacto-social">
                  <a
                    href="https://www.instagram.com/valto.estudio/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    Instagram
                  </a>
                  <a
                    href={`https://wa.me/5493704801011?text=${encodeURIComponent('Hola Valto Estudio, me gustaría consultar sobre sus servicios.')}`}
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

