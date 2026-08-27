function SolutionCard({ titulo, texto, lista, destaque }) {
  return (
    <article className={`solution__card${destaque ? ' solution__card--highlight' : ''}`}>
      <h3 className="solution__card-title">{titulo}</h3>

      <p className="solution__card-text">{texto}</p>

      <ul className="solution__list">
        {lista.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}

export default SolutionCard;
