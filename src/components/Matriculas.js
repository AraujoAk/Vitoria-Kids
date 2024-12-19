import React, { useEffect, useState } from "react";
import "./Matriculas.css";
import { FaWhatsapp } from "react-icons/fa";

const Matriculas = () => {
  const [title, setTitle] = useState(""); // Efeito de digitação
  const fullTitle = "Garanta o futuro do seu filho hoje mesmo!";

  useEffect(() => {
    let index = 0;
    const typing = setInterval(() => {
      setTitle((prev) => prev + fullTitle[index]);
      index++;
      if (index === fullTitle.length) clearInterval(typing);
    }, 70); // Velocidade da digitação
  }, []);

  return (
    <section id="matriculas" className="matriculas-section">
      <div className="matriculas-container">
        {/* Bloco Esquerdo - Texto Motivacional */}
        <div className="matriculas-info">
          <h2 className="matriculas-title">
            Garanta o futuro do seu filho{" "}
            <span className="highlight">hoje mesmo!</span>
          </h2>
          <p className="matriculas-text">
            Preencha o formulário ou fale conosco diretamente pelo WhatsApp.
          </p>
          <a
            href="https://wa.me/seunumerodetelefone"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-button"
          >
            <FaWhatsapp className="whatsapp-icon" /> Fale pelo WhatsApp
          </a>
        </div>

        {/* Bloco Direito - Formulário */}
        <form className="matriculas-form">
          <input type="text" placeholder="Seu Nome" className="form-input" />
          <input type="email" placeholder="Seu E-mail" className="form-input" />
          <input type="tel" placeholder="Seu Telefone" className="form-input" />
          <textarea
            placeholder="Sua Mensagem"
            className="form-input form-textarea"
          ></textarea>
          <button type="submit" className="form-button">
            Enviar Mensagem
          </button>
        </form>
      </div>
    </section>
  );
};

export default Matriculas;
