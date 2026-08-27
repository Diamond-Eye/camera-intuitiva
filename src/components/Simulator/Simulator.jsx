import { useState } from 'react';
import SceneResult from './SceneResult.jsx';
import HistoryList from './HistoryList.jsx';
import StatsPanel from './StatsPanel.jsx';
import { useLocalStorage } from '../../hooks/useLocalStorage.js';
import { analisarCena, calcularEstatisticas } from '../../utils/analiseDeCena.js';

function Simulator() {
  const [historico, setHistorico] = useLocalStorage('simulador-historico', []);
  const [resultadoAtual, setResultadoAtual] = useState(null);

  function analisarCenaAtual() {
    const resultado = analisarCena();
    setResultadoAtual(resultado);
    setHistorico((atual) => [resultado, ...atual].slice(0, 20));
  }

  function limparHistorico() {
    setHistorico([]);
  }

  const estatisticas = calcularEstatisticas(historico);

  return (
    <section className="simulator" id="simulator">
      <div className="simulator__container">
        <header className="simulator__header">
          <h2 className="simulator__title">Simulador de Modo Automático</h2>
          <p className="simulator__subtitle">
            Veja como a câmera analisa a cena e calcula ISO, exposição, abertura e confiança sozinha.
          </p>
        </header>

        <div className="simulator__actions">
          <button type="button" className="simulator__button" onClick={analisarCenaAtual}>Analisar cena</button>
        </div>

        <div className="simulator__grid">
          <SceneResult resultado={resultadoAtual} />

          <div className="simulator__side">
            <StatsPanel estatisticas={estatisticas} />
            <HistoryList historico={historico} aoLimpar={limparHistorico} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Simulator;
