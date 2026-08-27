import FeatureCard from './FeatureCard.jsx';
import { featureCards } from '../../data/features.js';
import cameraCompleta from '../../assets/images/camera-completa.gif';

function Features() {
  return (
    <section className="features" id="features">
      <div className="divider"></div>
      <h2 className="features__title">Tecnologia que transforma</h2>
      <p className="features__subtitle">
        Do mirar ao clique: algoritmos classificam a cena, escolhem o modo certo e refinam parâmetros para cada situação. Sem menu infinito.
      </p>

      <div className="features__row">
        <div className="feature-slot">
          <img src={cameraCompleta} alt="Camera completa" className="feature-slot__image" />
        </div>

        <div className="feature-cards">
          {featureCards.map((card) => (
            <FeatureCard key={card.id} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
