import React from "react";
import "./NossaEquipe.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

const teamMembers = [
  { name: "Ana Silva", role: "Coordenadora Pedagógica", image: "https://img.freepik.com/fotos-gratis/linda-sorridente-mulher-afro-americana-com-cabelo-crespo-sorriso-largo-mostra-os-dentes-brancos-usa-camiseta-casual-e-oculos-fica-de-pe-na-parede-e-se-alegra-com-o-dia-de-folga-mulher-jornalista-indoor_273609-15511.jpg?t=st=1735598098~exp=1735601698~hmac=154e0db912ddaa9fdc75a3256d09ad3e9515c2704791e5f7c8128054109d810d&w=900" },
  { name: "Carlos Mendes", role: "Professor de Matemática", image: "https://img.freepik.com/fotos-gratis/homem-feliz-com-barba-ruiva-comprida-e-espessa-sorriso-amigavel_273609-16616.jpg?t=st=1735598125~exp=1735601725~hmac=7f5176c333c6ce79e5e1cb132948068a798afab64d8fd685ce840e4b6071e8fc&w=900" },
  { name: "Mario Souza", role: "Educadora Infantil", image: "https://img.freepik.com/fotos-premium/retrato-de-um-jovem-bonito-sorrindo-contra-parede-amarela_1258-4902.jpg?w=900" },
  { name: "João Costa", role: "Professor de Inglês", image: "https://img.freepik.com/fotos-premium/homem-barbudo-loiro-atraente-em-camiseta-branca-usando-fones-de-ouvido-sem-fio_1258-6765.jpg?w=900" },
  { name: "Paula Lima", role: "Professora de Ciências", image: "https://img.freepik.com/fotos-gratis/emocoes-de-pessoas-lazer-do-estilo-de-vida-e-conceito-de-beleza-menina-asiatica-feliz-e-alegre-animada-dancando-e-se-divertindo-festejando-tocando-musica-ritmada-e-sorrindo-sobre-fundo-amarelo_1258-58916.jpg?t=st=1735598202~exp=1735601802~hmac=731d61b09981e4112ed38cf936dd7075bbeff6f1cc39fcc0f5a2b357b209eb99&w=900" },
  { name: "Lucas Rocha", role: "Professor de História", image: "https://img.freepik.com/fotos-gratis/homem-confiante-dizendo-parabens-piscando-e-apontando-para-voce-parado-satisfeito-sobre-o-fundo-azul-e-sorrindo_1258-66578.jpg?t=st=1735598233~exp=1735601833~hmac=7e7f155b2a0ab06d4e79b53481dfa32eab40b5e9a1ca0ee5437ba132cf0b3169&w=900" },
  { name: "Julia Ramos", role: "Psicóloga Escolar", image: "https://img.freepik.com/fotos-gratis/mulher-morena-cacheada-sorridente-em-branco_176420-39919.jpg?t=st=1735598267~exp=1735601867~hmac=5f0998a4718b3de4ff008008e8534db728a18a636a9626477f0b0845ddf6d1b6&w=900" },
  { name: "Roberto Silva", role: "Professor de Robótica", image: "https://img.freepik.com/fotos-premium/um-homem-elegante-com-cabelo-curto-e-barba-usando-oculos-fica-contra-um-fundo-branco_589812-718.jpg?w=900" },
  { name: "Fernando Costa", role: "Nutricionista", image: "https://img.freepik.com/fotos-gratis/aluno-feliz-com-penteado-afro-mostra-dentes-brancos-fica-de-bom-humor-depois-das-aulas_273609-16608.jpg?t=st=1735598323~exp=1735601923~hmac=0c8585565a478bcf44cc722fe55943274abe52da630f75ddf6e3cebc2f136225&w=900" },
  { name: "Mateus Rocha", role: "Monitor Esportivo", image: "https://img.freepik.com/fotos-premium/homem-bonito-isolado-no-branco_53419-2710.jpg?w=826" },
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
