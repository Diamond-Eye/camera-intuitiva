import SolutionCard from './SolutionCard.jsx';
import { solucaoCards } from '../../data/solucao.js';

function Solution() {
  return (
    <section className="solution" id="solution">
      <div className="solution__container">
        <header className="solution__header">
          <h2 className="solution__title">A solução</h2>

          <p className="solution__subtitle">
            Uma câmera inteligente que entende a cena e ajuda você a
            capturar melhores fotos sem precisar dominar configurações
            profissionais.
          </p>
        </header>

        <div className="solution__grid">
          {solucaoCards.map((card) => (
            <SolutionCard key={card.id} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Solution;
