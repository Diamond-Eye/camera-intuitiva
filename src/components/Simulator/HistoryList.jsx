function HistoryList({ historico, aoLimpar }) {
  return (
    <div className="history-list">
      <div className="history-list__header">
        <h3 className="history-list__title">Histórico</h3>
        {historico.length > 0 && (
          <button type="button" className="history-list__clear" onClick={aoLimpar}>Limpar</button>
        )}
      </div>

      {historico.length === 0 ? (
        <p className="history-list__empty">Nenhuma análise realizada ainda.</p>
      ) : (
        <div className="history-list__items">
          {historico.map((analise) => (
            <div key={analise.codigo} className="history-list__item">
              <span>{analise.nomeModo}</span>
              <span>ISO {analise.iso} · {analise.confianca}%</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default HistoryList;
