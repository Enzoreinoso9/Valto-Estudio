import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-line"></div>
      <div className="footer-container">
        <div className="footer-logo">
          <h3>Valto Estudio</h3>
        </div>
        <div className="footer-social">
          <a
            href="https://instagram.com/valtoestudio"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-link"
          >
            Instagram
          </a>
          <a
            href="https://wa.me/541123456789"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-link"
          >
            WhatsApp
          </a>
        </div>
        <div className="footer-copyright">
          <p>&copy; {new Date().getFullYear()} Valto Estudio. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

