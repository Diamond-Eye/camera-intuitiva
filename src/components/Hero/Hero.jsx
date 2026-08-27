import Badge from './Badge.jsx';
import TitleStack from './TitleStack.jsx';
import StatCard from './StatCard.jsx';
import Chip from './Chip.jsx';
import { heroStats, heroChips } from '../../data/hero.js';
import cell1 from '../../assets/images/cell-1.png';
import camera from '../../assets/images/camera.png';
import cell2 from '../../assets/images/cell-2.png';

function Hero({ aoAbrirModal }) {
  return (
    <section className="hero">
      <div className="hero__left">
        <Badge texto="LANÇAMENTO 2026" />

        <TitleStack />

        <p className="hero__subtitle">
          Algoritmos analisam a cena em tempo real quando você mira a câmera, escolhem o melhor modo (comida, retrato, paisagem, animal, noite…) e ajustam ISO, exposição e foco para você. Menos tentativa e erro, mais fotos com cara de profissional.
        </p>

        <div className="hero__buttons">
          <button className="btn btn--primary" onClick={aoAbrirModal}>Se inscreva para receber atualizações</button>
          <a href="#features"><button className="btn btn--secondary">Conhecer Recursos</button></a>
        </div>

        <div className="hero__stats">
          {heroStats.map((stat) => (
            <StatCard key={stat.id} numero={stat.numero} label={stat.label} />
          ))}
        </div>

        <div className="hero__chips">
          {heroChips.map((chip) => (
            <Chip key={chip} texto={chip} />
          ))}
        </div>
      </div>

      <div className="hero__phones">
        <div className="phone phone--left">
          <img src={cell1} alt="Smartphone — tela A" className="phone__image" />
        </div>

        <div className="phone phone--center">
          <img src={camera} alt="Camera" className="phone__image" />
        </div>

        <div className="phone phone--right">
          <img src={cell2} alt="Smartphone — tela B" className="phone__image" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
