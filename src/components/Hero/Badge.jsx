import starIcon from '../../assets/icons/star.svg';

function Badge({ texto }) {
  return (
    <div className="badge">
      <img src={starIcon} alt="Star" className="badge__icon" />
      <span className="badge__text">{texto}</span>
    </div>
  );
}

export default Badge;
