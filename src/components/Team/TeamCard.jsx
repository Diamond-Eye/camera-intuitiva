function TeamCard({ nome, rm, foto }) {
  return (
    <div className="team__card">
      <div className="team__avatar-wrapper">
        <img src={foto} alt={nome} className="team__img" />
      </div>
      <h3 className="team__name">{nome}</h3>
      <p className="team__role">{rm}</p>
    </div>
  );
}

export default TeamCard;
