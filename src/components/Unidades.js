import React from "react";
import "./Unidades.css";

const Unidades = () => {
  const unidades = [
    {
      name: "Unidade Zona Norte",
      image: "https://via.placeholder.com/500x300", // Substitua pela imagem real
      description: "Rua Exemplo, 123 - Zona Norte, Natal/RN",
      link: "https://goo.gl/maps/exemplo1",
    },
    {
      name: "Unidade Zona Sul",
      image: "https://via.placeholder.com/500x300", // Substitua pela imagem real
      description: "Av. Principal, 456 - Zona Sul, Natal/RN",
      link: "https://goo.gl/maps/exemplo2",
    },
    {
      name: "Unidade Centro",
      image: "https://via.placeholder.com/500x300", // Substitua pela imagem real
      description: "Praça Central, 789 - Centro, Natal/RN",
      link: "https://goo.gl/maps/exemplo3",
    },
  ];

  return (
    <section className="unidades-section">
      <h2 className="unidades-title">Uma Unidade Perto de Você</h2>
      <div className="unidades-container">
        {unidades.map((unidade, index) => (
          <div key={index} className="unidade-card">
            <img
              src={unidade.image}
              alt={unidade.name}
              className="unidade-image"
            />
            <div className="unidade-content">
              <h3 className="unidade-name">{unidade.name}</h3>
              <p className="unidade-description">{unidade.description}</p>
              <a
                href={unidade.link}
                target="_blank"
                rel="noopener noreferrer"
                className="unidade-button"
              >
                Ver no Google Maps
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Unidades;