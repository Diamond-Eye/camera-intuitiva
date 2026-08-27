import { nomeDoModo } from '../../utils/analiseDeCena.js';

function StatsPanel({ estatisticas }) {
  const { total, modoMaisFrequente, isoMedio, percentualPorModo } = estatisticas;

  return (
    <div className="stats-panel">
      <h3 className="stats-panel__title">Estatísticas</h3>

      <div className="stats-panel__summary">
        <div>
          <div className="stats-panel__stat-number">{total}</div>
          <p className="stats-panel__stat-label">Análises realizadas</p>
        </div>
        <div>
          <div className="stats-panel__stat-number">{isoMedio}</div>
          <p className="stats-panel__stat-label">ISO médio</p>
        </div>
      </div>

      {modoMaisFrequente && (
        <p className="stats-panel__stat-label">
          Modo mais frequente: <strong>{nomeDoModo(modoMaisFrequente)}</strong>
        </p>
      )}

      {percentualPorModo.map((item) => (
        <div key={item.modo} className="stats-panel__bar">
          <span className="stats-panel__bar-label">{nomeDoModo(item.modo)}</span>
          <div className="stats-panel__bar-track">
            <div className="stats-panel__bar-fill" style={{ width: `${item.percentual}%` }}></div>
          </div>
          <span className="stats-panel__bar-value">{item.percentual}%</span>
        </div>
      ))}
    </div>
  );
}

export default StatsPanel;
