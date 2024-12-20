import React, { useState, useEffect } from "react";
import "./Header.css";
import {
  FaSchool,
  FaBook,
  FaBlog,
  FaCalendarCheck,
  FaHandHoldingHeart,
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
        setHideTopHeader(true); // Esconde o Header ao rolar para baixo
      } else {
        setHideTopHeader(false); // Mostra o Header ao rolar para cima
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

  const closeMenu = () => {
    setMenuOpen(false); // Fecha o menu
  };

  return (
    <>
      {/* Sobreposição do Menu */}
      {menuOpen && <div className="menu-overlay" onClick={closeMenu}></div>}

      {/* Main Header */}
      <header className={`header ${hideTopHeader ? "expanded" : ""}`}>
        <div className="header-logo">
          <Link to="top" smooth={true} duration={500}>
            Vitória Kids
          </Link>
        </div>

        {/* Ícone do Menu para telas pequenas */}
        <div className="menu-icon" onClick={toggleMenu}>
          <FaBars />
        </div>

        {/* Links de Navegação - Barra Lateral */}
        <ul className={`header-nav-links ${menuOpen ? "open" : ""}`}>
          {/* Botão de Fechar no topo direito */}
          <li className="menu-close">
            <button onClick={closeMenu}>
              <FaTimes />
            </button>
          </li>

          <li>
            <Link
              to="nossa-historia"
              smooth={true}
              duration={500}
              onClick={closeMenu}
            >
              <FaSchool className="header-icon" /> Nossa Escola
            </Link>
          </li>
          <li>
            <Link
              to="por-que-escolher"
              smooth={true}
              duration={500}
              onClick={closeMenu}
            >
              <FaBook className="header-icon" /> Pedagógico
            </Link>
          </li>
          <li>
            <Link
              to="proposta-valor"
              smooth={true}
              duration={500}
              onClick={closeMenu}
            >
              <FaHandHoldingHeart className="header-icon" /> Proposta de Valor
            </Link>
          </li>
          <li>
            <Link to="blog" smooth={true} duration={500} onClick={closeMenu}>
              <FaBlog className="header-icon" /> Blog
            </Link>
          </li>
          <li>
            <Link
              to="matriculas"
              smooth={true}
              duration={500}
              onClick={closeMenu}
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
