function AudienceCard({ titulo, texto }) {
  return (
    <article className="audience__card">
      <h3 className="audience__card-title">{titulo}</h3>

      <p className="audience__card-text">{texto}</p>
    </article>
  );
}

export default AudienceCard;
