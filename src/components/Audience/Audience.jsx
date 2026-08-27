import AudienceCard from './AudienceCard.jsx';
import { publicoAlvoCards } from '../../data/publicoAlvo.js';

function Audience() {
  return (
    <section className="audience" id="audience">
      <div className="audience__container">
        <header className="audience__header">
          <h2 className="audience__title">Para quem é destinado?</h2>

          <p className="audience__subtitle">
            Uma câmera pensada para criadores de conteúdo e estudantes que querem tirar
            fotos melhores sem precisar dominar configurações profissionais.
          </p>
        </header>

        <div className="audience__grid">
          {publicoAlvoCards.map((card) => (
            <AudienceCard key={card.id} titulo={card.titulo} texto={card.texto} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Audience;
