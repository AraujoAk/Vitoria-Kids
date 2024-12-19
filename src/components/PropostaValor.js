import React from "react";
import "./PropostaValor.css";

const PropostaValor = () => {
  return (
    <section id = "proposta-valor" className="proposta-valor-section">
      <div className="proposta-valor-container">
        {/* Imagem que ocupa altura total */}
        <div className="proposta-valor-imagem">
          <img
            src="https://img.freepik.com/fotos-gratis/feliz-menina-sorridente-olhando-para-um-livro-na-natureza_1153-9911.jpg"
            alt="Proposta de Valor"
          />
        </div>

        {/* Conteúdo de texto */}
        <div className="proposta-valor-conteudo">
          <h2 className="proposta-valor-titulo">Proposta de Valor</h2>
          <p className="proposta-valor-intro">
            <em>
              "Educação personalizada e com valores, transformando vidas e desenvolvendo um futuro promissor."
            </em>
            <br />
            <strong>Rodrigo e Gabriela, CEOs da Vitória Kids</strong>
          </p>

          {/* Blocos numerados */}
          <div className="proposta-valor-bloco">
            <div className="proposta-item">
              <span className="proposta-numero">1</span>
              <div className="proposta-texto">
                <h4>Formação Integral 📚</h4>
                <p>Educação completa, preparando os alunos para os desafios do século XXI.</p>
              </div>
            </div>

            <div className="proposta-item">
              <span className="proposta-numero">2</span>
              <div className="proposta-texto">
                <h4>Foco no Aluno 🎯</h4>
                <p>Ensino bilíngue e desenvolvimento de habilidades essenciais para o futuro.</p>
              </div>
            </div>

            <div className="proposta-item">
              <span className="proposta-numero">3</span>
              <div className="proposta-texto">
                <h4>Comunicação Transparente 🤝</h4>
                <p>Relação próxima e clara com os pais, baseada em confiança.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropostaValor;
