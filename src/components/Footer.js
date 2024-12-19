import React from "react";
import "./Footer.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Coluna 1: Informações de Contato */}
        <div className="footer-column">
          <h4>Contato</h4>
          <p>
            <FaMapMarkerAlt className="footer-icon" /> Rua Exemplo, 123 - Natal, RN
          </p>
          <p>
            <FaPhoneAlt className="footer-icon" /> (84) 9999-9999
          </p>
          <p>
            <FaEnvelope className="footer-icon" /> contato@vitoriakids.com
          </p>
        </div>

        {/* Coluna 2: Links Rápidos */}
        <div className="footer-column">
          <h4>Links Rápidos</h4>
          <ul>
            <li><a href="#nossa-historia">Nossa Escola</a></li>
            <li><a href="#pedagogico">Pedagógico</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#matriculas">Matrículas</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </div>

        {/* Coluna 3: Redes Sociais */}
        <div className="footer-column">
          <h4>Redes Sociais</h4>
          <div className="footer-socials">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="social-icon" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="social-icon" />
            </a>
            <a href="https://wa.me/8499999999" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="social-icon" />
            </a>
          </div>
        </div>
      </div>

      {/* Texto central */}
      <div className="footer-bottom">
        <p>© 2024 Colégio Vitória Kids. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
