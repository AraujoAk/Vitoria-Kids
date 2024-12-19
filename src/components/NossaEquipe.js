import React from "react";
import "./NossaEquipe.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

const teamMembers = [
  { name: "Ana Silva", role: "Coordenadora Pedagógica", image: "https://via.placeholder.com/150" },
  { name: "Carlos Mendes", role: "Professor de Matemática", image: "https://via.placeholder.com/150" },
  { name: "Mariana Souza", role: "Educadora Infantil", image: "https://via.placeholder.com/150" },
  { name: "João Costa", role: "Professor de Inglês", image: "https://via.placeholder.com/150" },
  { name: "Paula Lima", role: "Professora de Ciências", image: "https://via.placeholder.com/150" },
  { name: "Lucas Rocha", role: "Professor de História", image: "https://via.placeholder.com/150" },
  { name: "Julia Ramos", role: "Psicóloga Escolar", image: "https://via.placeholder.com/150" },
  { name: "Roberto Silva", role: "Professor de Robótica", image: "https://via.placeholder.com/150" },
  { name: "Fernanda Costa", role: "Nutricionista", image: "https://via.placeholder.com/150" },
  { name: "Mateus Rocha", role: "Monitor Esportivo", image: "https://via.placeholder.com/150" },
];

const NossaEquipe = () => {
  return (
    <section className="nossa-equipe-section">
      <h2 className="nossa-equipe-title">Nossa Equipe</h2>
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        navigation
        autoplay={{ delay: 3000 }}
        loop={true}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        className="nossa-equipe-swiper"
      >
        {teamMembers.map((member, index) => (
          <SwiperSlide key={index} className="team-card">
            <img src={member.image} alt={member.name} className="team-image" />
            <div className="team-details">
              <h3 className="team-name">{member.name}</h3>
              <p className="team-role">{member.role}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default NossaEquipe;
