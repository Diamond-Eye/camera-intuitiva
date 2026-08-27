import { cenas } from '../data/cenas';

// Gera um código de captura tipo hexadecimal a partir de um número aleatório
function gerarCodigoCaptura() {
  const base = Math.pow(36, 6);
  const codigo = Math.floor(Math.random() * base).toString(36).toUpperCase();
  return codigo.padStart(6, '0');
}

function formatarExposicao(segundos) {
  if (segundos >= 1) {
    return `${segundos.toFixed(1)}s`;
  }
  const denominador = Math.round(1 / segundos);
  return `1/${denominador}s`;
}

// Sorteia uma cena e calcula os parâmetros de captura dentro das faixas do modo
export function analisarCena() {
  const indice = Math.floor(Math.random() * cenas.length);
  const cena = cenas[indice];

  const isoBruto = cena.isoMin + Math.random() * (cena.isoMax - cena.isoMin);
  const iso = Math.min(cena.isoMax, Math.ceil(isoBruto / 50) * 50);

  const exposicaoBruta = cena.exposicaoMin + Math.random() * (cena.exposicaoMax - cena.exposicaoMin);
  const abertura = cena.aberturaMin + Math.random() * (cena.aberturaMax - cena.aberturaMin);

  const confiancaBruta = cena.confiancaMin + Math.random() * (cena.confiancaMax - cena.confiancaMin);
  const confianca = Math.min(99, Math.max(1, Math.round(confiancaBruta)));

  return {
    codigo: gerarCodigoCaptura(),
    modo: cena.id,
    nomeModo: cena.nome,
    iso,
    exposicao: formatarExposicao(exposicaoBruta),
    abertura: `f/${abertura.toFixed(1)}`,
    confianca,
    data: new Date().toISOString(),
  };
}

// Calcula as estatísticas do histórico de análises
export function calcularEstatisticas(historico) {
  if (historico.length === 0) {
    return { total: 0, modoMaisFrequente: null, isoMedio: 0, percentualPorModo: [] };
  }

  const contagemPorModo = {};
  let somaIso = 0;

  historico.forEach((analise) => {
    contagemPorModo[analise.modo] = (contagemPorModo[analise.modo] || 0) + 1;
    somaIso += analise.iso;
  });

  const modos = Object.keys(contagemPorModo);
  const modoMaisFrequente = modos.reduce((mais, atual) => (
    contagemPorModo[atual] > contagemPorModo[mais] ? atual : mais
  ), modos[0]);

  const isoMedio = Math.round(somaIso / historico.length);

  const percentualPorModo = modos
    .map((modo) => ({
      modo,
      percentual: Math.round((contagemPorModo[modo] / historico.length) * 100),
    }))
    .sort((a, b) => b.percentual - a.percentual);

  return {
    total: historico.length,
    modoMaisFrequente,
    isoMedio,
    percentualPorModo,
  };
}

export function nomeDoModo(modoId) {
  const cena = cenas.find((item) => item.id === modoId);
  return cena ? cena.nome : modoId;
}
