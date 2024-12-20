import React from "react";
import "./Unidades.css";

const Unidades = () => {
  const unidades = [
    {
      name: "Unidade Zona Norte",
      image: "https://img.freepik.com/vetores-gratis/garota-garoto-e-escola-de-onibus_24640-45375.jpg?t=st=1734621401~exp=1734625001~hmac=8faacbc61ac48f73caf83313f3cf1c90ad913df23bc9aac7e157a45534df0112&w=900", // Substitua pela imagem real
      description: "Rua Exemplo, 123 - Zona Norte, Natal/RN",
      link: "https://goo.gl/maps/exemplo1",
    },
    {
      name: "Unidade Zona Sul",
      image: "https://img.freepik.com/vetores-gratis/garota-garoto-e-escola-de-onibus_24640-45378.jpg?t=st=1734621415~exp=1734625015~hmac=7b0970db25a878a57fc3efadacc55d397fd4860eaef69439c43e5d785c149f97&w=900", // Substitua pela imagem real
      description: "Av. Principal, 456 - Zona Sul, Natal/RN",
      link: "https://goo.gl/maps/exemplo2",
    },
    {
      name: "Unidade Centro",
      image: "https://img.freepik.com/vetores-gratis/garota-garoto-e-escola-de-onibus_24640-45379.jpg?t=st=1734621429~exp=1734625029~hmac=05011f9d4a63331eef4d7f6d56f1901419da26bdec3f85f9c79784ebb25313ae&w=900", // Substitua pela imagem real
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