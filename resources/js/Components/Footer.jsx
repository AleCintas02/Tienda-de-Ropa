import React from 'react';
import '../../css/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h4>Sobre Nosotros</h4>
          <p>Somos una empresa dedicada a ofrecer los mejores productos de moda urbana.</p>
        </div>
        <div className="footer-column">
          <h4>Enlaces Rápidos</h4>
          <ul>
            <li><a href="#home">Inicio</a></li>
            <li><a href="#products">Productos</a></li>
            <li><a href="#contact">Contacto</a></li>
            <li><a href="#about">Sobre Nosotros</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Síguenos</h4>
          <div className="social-links">
            <a href="https://www.facebook.com"><i className="fab fa-facebook-f"></i></a>
            <a href="https://www.twitter.com"><i className="fab fa-twitter"></i></a>
            <a href="https://www.instagram.com"><i className="fab fa-instagram"></i></a>
            <a href="https://www.linkedin.com"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Estilo Urbano. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
