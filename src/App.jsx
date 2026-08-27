import { useState } from 'react';
import Header from './components/Header/Header.jsx';
import Hero from './components/Hero/Hero.jsx';
import Solution from './components/Solution/Solution.jsx';
import Audience from './components/Audience/Audience.jsx';
import PhoneStrip from './components/PhoneStrip/PhoneStrip.jsx';
import Features from './components/Features/Features.jsx';
import Gallery from './components/Gallery/Gallery.jsx';
import Team from './components/Team/Team.jsx';
import Footer from './components/Footer/Footer.jsx';
import Modal from './components/Modal/Modal.jsx';
import AlertSuccess from './components/AlertSuccess/AlertSuccess.jsx';

function App() {
  const [inscricoes, setInscricoes] = useState([]);
  const [modalAberto, setModalAberto] = useState(false);
  const [alertaAberto, setAlertaAberto] = useState(false);

  function abrirModal() {
    setModalAberto(true);
  }

  function fecharModal() {
    setModalAberto(false);
  }

  function inscrever(dados) {
    setInscricoes((atual) => [...atual, dados]);
    setAlertaAberto(true);
  }

  function fecharAlerta() {
    setAlertaAberto(false);
  }

  return (
    <>
      <Header />

      <main className="landing-page">
        <Hero aoAbrirModal={abrirModal} />
        <Solution />
        <Audience />
        <PhoneStrip />
        <Features />
        <Gallery />
        <Team />
      </main>

      <Footer />

      <Modal aberto={modalAberto} inscricoes={inscricoes} aoFechar={fecharModal} aoInscrever={inscrever} />
      <AlertSuccess aberto={alertaAberto} aoFechar={fecharAlerta} />
    </>
  );
}

export default App;
