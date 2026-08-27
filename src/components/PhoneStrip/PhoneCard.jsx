function PhoneCard({ imagem, alt }) {
  return (
    <div className="phone-card">
      <img src={imagem} alt={alt} className="phone-card__image" />
    </div>
  );
}

export default PhoneCard;
