import PhoneCard from './PhoneCard.jsx';
import { phoneStripCards } from '../../data/phoneStrip.js';

function PhoneStrip() {
  return (
    <section className="phone-strip">
      <h2 className="phone-strip__title">Telas reais em smartphones</h2>
      <p className="phone-strip__description">
        Modos inteligentes, guia de enquadramento e configurações profissionais em um clique.
      </p>
      <div className="phone-grid">
        {phoneStripCards.map((card) => (
          <PhoneCard key={card.id} imagem={card.imagem} alt={card.alt} />
        ))}
      </div>
    </section>
  );
}

export default PhoneStrip;
