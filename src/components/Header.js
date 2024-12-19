import React, { useState, useEffect } from "react";
import "./Header.css";
import {
  FaSchool,
  FaBook,
  FaBlog,
  FaCalendarCheck,
  FaHandHoldingHeart,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { Link } from "react-scroll";

const Header = () => {
  const [hideTopHeader, setHideTopHeader] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // Estado para controlar o menu

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setHideTopHeader(true); // Esconde o Top Header ao rolar para baixo
      } else {
        setHideTopHeader(false); // Mostra o Top Header ao rolar para cima
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev); // Alterna o estado do menu
  };

  return (
    <>
      {/* Top Header */}
      <div className={`top-header ${hideTopHeader ? "hidden" : ""}`}>
        <div className="top-header-left">
          <FaPhoneAlt /> <span>(84) 9999-9999</span>
          <FaEnvelope /> <span>contato@vitoriakids.com</span>
        </div>
        <div className="top-header-right">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook /> Facebook
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram /> Instagram
          </a>
        </div>
      </div>

      {/* Main Header */}
      <header className={`header ${hideTopHeader ? "expanded" : ""}`}>
        <div className="header-logo">
          <Link to="top" smooth={true} duration={500}>
            Vitória Kids
          </Link>
        </div>

        {/* Ícone do Menu para telas pequenas */}
        <div className="menu-icon" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Links de Navegação */}
        <ul className={`header-nav-links ${menuOpen ? "open" : ""}`}>
          <li>
            <Link
              to="nossa-historia"
              smooth={true}
              duration={500}
              onClick={toggleMenu}
            >
              <FaSchool className="header-icon" /> Nossa Escola
            </Link>
          </li>
          <li>
            <Link
              to="por-que-escolher"
              smooth={true}
              duration={500}
              onClick={toggleMenu}
            >
              <FaBook className="header-icon" /> Pedagógico
            </Link>
          </li>
          <li>
            <Link
              to="proposta-valor"
              smooth={true}
              duration={500}
              onClick={toggleMenu}
            >
              <FaHandHoldingHeart className="header-icon" /> Proposta de Valor
            </Link>
          </li>
          <li>
            <Link
              to="blog"
              smooth={true}
              duration={500}
              onClick={toggleMenu}
            >
              <FaBlog className="header-icon" /> Blog
            </Link>
          </li>
          <li>
            <Link
              to="matriculas"
              smooth={true}
              duration={500}
              onClick={toggleMenu}
            >
              <FaCalendarCheck className="header-icon" /> Agenda uma Visita
            </Link>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Header;
