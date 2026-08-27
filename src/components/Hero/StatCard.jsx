function StatCard({ numero, label }) {
  return (
    <div className="stat">
      <div className="stat__number">{numero}</div>
      <p className="stat__label">{label}</p>
    </div>
  );
}

export default StatCard;
