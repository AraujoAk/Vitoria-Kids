import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import NossaHistoria from './components/NossaHistoria';
import PorQueEscolher from './components/PorQueEscolher';
import PropostaValor from './components/PropostaValor';
import NossaEquipe from './components/NossaEquipe';
import Depoimentos from './components/Depoimentos';
import MelhorParaFamilia from './components/MelhorParaFamilia';
import MelhorParaFilho from './components/MelhorParaFilho';
import ParceriasEstrategicas from './components/ParceriasEstrategicas';
import Unidades from './components/Unidades';
import Blog from './components/Blog';
import Matriculas from './components/Matriculas';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      {/* Âncora para o topo */}
      <div id="top"></div>
      
      <Header />
      <Hero />
      <NossaHistoria />
      <PorQueEscolher />
      <PropostaValor />
      <NossaEquipe />
      <Depoimentos />
      <MelhorParaFamilia />
      <MelhorParaFilho />
      <ParceriasEstrategicas />
      <Unidades />
      <Blog />
      <Matriculas />
      <Footer />
    </div>
  );
};

export default App;