function FeatureCard({ cor, icone, iconeAlt, titulo, descricao }) {
  return (
    <div className={`feature-card feature-card--${cor}`}>
      <div className="feature-card__icon">
        <img src={icone} alt={iconeAlt} className="feature-card__icon-image" />
      </div>
      <div className="feature-card__content">
        <h3 className="feature-card__title">{titulo}</h3>
        <p className="feature-card__description">{descricao}</p>
      </div>
    </div>
  );
}

export default FeatureCard;
