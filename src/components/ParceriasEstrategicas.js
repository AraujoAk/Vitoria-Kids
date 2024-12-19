import React from "react";
import "./ParceriasEstrategicas.css";

const ParceriasEstrategicas = () => {
  const parcerias = [
    { nome: "Nave à Vela", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8dhJ3L9aBskfTSol00LJvpFXgAWRLJSXPOw&s" },
    { nome: "Coala Kids", logo: "https://yata.s3-object.locaweb.com.br/1e5e95e9fd8c13763786ea54fa3a0f93139e77b5407fdd67ec764fdb2814d7b7" },
    { nome: "Atual School", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTAvnaxtxB_kryyibKSuuJonMyDkB8P1r2iQ&s" },
    { nome: "Escola da Inteligência", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYWTnuxEvPBE9ShU6pgOKtBTqgq3-eZxQMaA&s" },
    { nome: "RoboCiência", logo: "https://robociencia.com.br/wp-content/themes/Robo%20Ciencia%20Dark/assets/img/logo-full-drop.webp" },
    { nome: "Gênio das Finanças", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9MzNA5j23xmoKDoIischT9T1BJd065igP7Q&s" },
  ];

  return (
    <section className="parcerias-estrategicas-section">
      {/* Cabeçalho da Seção */}
      <div className="parcerias-estrategicas-header">
        <h2 className="parcerias-titulo">
          Nossas <span>Parcerias Estratégicas</span>
        </h2>
        <p className="parcerias-subtitulo">
          Transformamos a educação com o apoio das melhores parcerias.
        </p>
      </div>

      {/* Grid das Parcerias */}
      <div className="parcerias-estrategicas-grid">
        {parcerias.map((parceria, index) => (
          <div className="parceria-item" key={index}>
            <div className="parceria-logo-container">
              <img
                src={parceria.logo}
                alt={`Logo da ${parceria.nome}`}
                className="parceria-logo"
              />
            </div>
            <p className="parceria-nome">{parceria.nome}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ParceriasEstrategicas;
