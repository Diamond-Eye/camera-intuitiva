function SceneResult({ resultado }) {
  if (!resultado) {
    return (
      <div className="scene-result scene-result--empty">
        <p>Clique em "Analisar cena" para ver o modo automático em ação.</p>
      </div>
    );
  }

  return (
    <div className="scene-result">
      <div className="scene-result__header">
        <h3 className="scene-result__mode">Modo {resultado.nomeModo}</h3>
        <span className="scene-result__code">#{resultado.codigo}</span>
      </div>

      <div className="scene-result__params">
        <div className="scene-result__param">
          <span className="scene-result__param-label">ISO</span>
          <span className="scene-result__param-value">{resultado.iso}</span>
        </div>
        <div className="scene-result__param">
          <span className="scene-result__param-label">Exposição</span>
          <span className="scene-result__param-value">{resultado.exposicao}</span>
        </div>
        <div className="scene-result__param">
          <span className="scene-result__param-label">Abertura</span>
          <span className="scene-result__param-value">{resultado.abertura}</span>
        </div>
        <div className="scene-result__param">
          <span className="scene-result__param-label">Confiança</span>
          <span className="scene-result__param-value">{resultado.confianca}%</span>
        </div>
      </div>
    </div>
  );
}

export default SceneResult;
