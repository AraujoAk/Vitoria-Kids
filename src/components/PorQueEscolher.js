import React from "react";
import "./PorQueEscolher.css";
import videoVK from './video-vk.mp4';


const PorQueEscolher = () => {
  return (
    <section className="porQueEscolher">
      <div className="porQueEscolher-container">
        {/* Título destacado */}
        <div className="porQueEscolher-title-container">
          <h2 className="porQueEscolher-title">
            Por que <span>Vitória Kids?</span>
          </h2>
          <p className="porQueEscolher-subtitle">
            Transformando vidas através da educação com amor e excelência.
          </p>
        </div>

        <div className="porQueEscolher-content">
          {/* Balão de fala animado */}
          <div className="porQueEscolher-balao animated-balao">
            <p className="porQueEscolher-text">
              Oferecemos excelência acadêmica, ensino bilíngue e valores que
              moldam o futuro dos seus filhos em um ambiente acolhedor e
              seguro.
            </p>
            <button className="porQueEscolher-button">Entre em Contato</button>
          </div>

          {/* Vídeo maior com borda estilizada */}
          <div className="porQueEscolher-video animated-video">
            <video controls>
            <source src={videoVK} type="video/mp4" />
              Seu navegador não suporta vídeos.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PorQueEscolher;
