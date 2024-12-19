import React from "react";
import "./PorQueEscolher.css";

const PorQueEscolher = () => {
  return (
    <section className="por-que-escolher" id="por-que-escolher">
      <div className="content">
        {/* Coluna do Texto */}
        <div className="text-column">
          <h2 className="section-title">Por que Escolher a Vitória Kids?</h2>
          <p className="section-description">
            Na Vitória Kids, unimos <strong>excelência acadêmica</strong>,{" "}
            <strong>ensino bilíngue</strong> e foco no{" "}
            <strong>desenvolvimento integral</strong> das crianças. Oferecemos
            uma educação que transforma vidas e prepara seu filho para os
            desafios do futuro.
          </p>
          <p className="section-highlight">
            Uma escola que une <em>inovação, valores cristãos e acolhimento</em>.
          </p>
        </div>

        {/* Coluna do Vídeo */}
        <div className="video-column">
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ" /* Link do vídeo */
            title="Depoimentos Vitória Kids"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="video-frame"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default PorQueEscolher;