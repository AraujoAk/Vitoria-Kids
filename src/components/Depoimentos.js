import React from "react";
import "./Depoimentos.css";

const Depoimentos = () => {
  const testimonials = [
    {
      name: "Chidi Eze",
      text: "A qualidade da escola é excelente, meu filho está muito feliz e aprendendo bastante.",
    },
    {
      name: "Phyllis Schwaiger",
      text: "Uma equipe de profissionais dedicada e focada no crescimento das crianças.",
    },
    {
      name: "Tyler Abara",
      text: "Ótimo ambiente para o desenvolvimento integral dos alunos, recomendo muito!",
    },
  ];

  return (
    <section className="depoimentos-section">
      <h2 className="depoimentos-title">Depoimentos</h2>
      <div className="depoimentos-container">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="depoimento-card">
            <div className="depoimento-stars">★★★★★</div>
            <p className="depoimento-text">{testimonial.text}</p>
            <div className="depoimento-author">{testimonial.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Depoimentos;
