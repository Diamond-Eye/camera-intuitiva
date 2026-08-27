import TeamCard from './TeamCard.jsx';
import { integrantes } from '../../data/integrantes.js';

function Team() {
  return (
    <section className="team" id="team">
      <div className="team__container">
        <header className="team__header">
          <h2 className="team__title">Nossa Equipe</h2>
          <p className="team__subtitle">
            Os criadores da Diamond Eye.
          </p>
        </header>

        <div className="team__grid">
          {integrantes.map((integrante) => (
            <TeamCard key={integrante.id} nome={integrante.nome} rm={integrante.rm} foto={integrante.foto} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;
