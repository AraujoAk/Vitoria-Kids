import React from "react";
import "./NossaHistoria.css";
import image13 from './pic/13.png';
import image14 from './pic/14.png';
import image15 from './pic/15.png';

const NossaHistoria = () => {
  const blocks = [
    {
      image: image13,
      title: "Nossa História",
      text: "A Vitória Kids nasceu do desejo de oferecer uma educação que vai além da sala de aula.",
    },
    {
      image: image14,
      title: "Missão, Visão e Valores",
      text: "Consolidar um ensino personalizado e valores cristãos para um futuro promissor.",
    },
    {
      image: image15,
      title: "Propósito",
      text: "Nosso propósito é transformar vidas por meio do aprendizado integral e valores sólidos.",
    },
  ];

  return (
    <section className="nossa-historia" id="nossa-historia">
      {/* Título geral da seção */}
      <h2 className="nossa-historia-title">Uma História de Amor</h2>
      
      <div className="nossa-historia-container">
        {blocks.map((block, index) => (
          <div key={index} className="nossa-historia-card">
            <h3>{block.title}</h3>
            <div className="nossa-historia-image-container">
              <img src={block.image} alt={block.title} className="nossa-historia-image" />
            </div>
            <div className="nossa-historia-hover-content">
              <p className="nossa-historia-text">{block.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NossaHistoria;