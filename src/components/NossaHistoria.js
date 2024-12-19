import React from "react";
import "./NossaHistoria.css";

const NossaHistoria = () => {
  const blocks = [
    {
      image: "https://media.istockphoto.com/id/949118068/pt/foto/books.jpg?s=1024x1024&w=is&k=20&c=CNgQGzz9dVBfUivObKcw2MqJffLJ251zgpeyf2f-F5o=",
      title: "Nossa História",
      text: "A Vitória Kids nasceu do desejo de oferecer uma educação que vai além da sala de aula.",
    },
    {
      image: "https://img.freepik.com/fotos-gratis/quebra-cabeca-branca_144627-12510.jpg?t=st=1734354270~exp=1734357870~hmac=44e6d9ed3902c830d135a90b22d3081194c6e32f5c6d095b25c1bd0d2f27c9f3&w=900",
      title: "Missão, Visão e Valores",
      text: "Missão: Consolidar um ensino personalizado e valores cristãos para um futuro promissor.",
    },
    {
      image: "https://img.freepik.com/fotos-premium/mao-tocando-graficos-de-indicador-financeiro-e-grafico-de-mercado-contabil_158104-1376.jpg?w=1060",
      title: "Propósito",
      text: "Nosso propósito é transformar vidas por meio do aprendizado integral e valores sólidos.",
    },
  ];

  return (
    <section className="nossa-historia" id="nossa-historia">
      <h2 className="nossa-historia-title">Uma História de Amor</h2>
      <div className="nossa-historia-blocks">
        {blocks.map((block, index) => (
          <div key={index} className="nossa-historia-block">
            <div className="block-content">
              {/* Frente */}
              <div className="block-front">
                <img src={block.image} alt={block.title} className="block-image" />
                <h3 className="block-title">{block.title}</h3>
              </div>

              {/* Verso com conteúdo */}
              <div className="block-back">
                <p className="block-text">{block.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NossaHistoria;