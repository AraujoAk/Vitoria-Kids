import React from "react";
import "./MelhorParaFilho.css";

const MelhorParaFilho = () => {
  return (
    <section className="melhor-filho-section">
      <div className="melhor-filho-container">
        <h2 className="melhor-filho-title">
          O Melhor para Seu Filho é o Nosso <span>Melhor</span>
        </h2>
        <p className="melhor-filho-text">
          Comprometidos com a formação <strong>acadêmica</strong>, <strong>emocional</strong> e <strong>espiritual</strong> de cada criança, 
          proporcionamos uma educação que transforma vidas e molda um futuro brilhante.
        </p>
        <div className="melhor-filho-highlights">
          <div className="highlight-card">Educação Bilíngue</div>
          <div className="highlight-card">Ensino Socioemocional</div>
          <div className="highlight-card">Valores Cristãos</div>
          <div className="highlight-card">Ambiente Seguro</div>
        </div>
      </div>
    </section>
  );
};

export default MelhorParaFilho;
