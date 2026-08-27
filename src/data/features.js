import brain from '../assets/icons/brain.svg';
import ray from '../assets/icons/ray.svg';
import scanLine from '../assets/icons/scan-line.svg';

export const featureCards = [
  {
    id: 'deteccao-cena',
    cor: 'color1',
    icone: brain,
    iconeAlt: 'Brain',
    titulo: 'Detecção automática de cena',
    descricao: 'Reconhece comida, pessoas, paisagem, animais, baixa luz e mais! Pré-seleciona o modo que faz sentido para aquela foto.',
  },
  {
    id: 'ajuste-parametros',
    cor: 'color2',
    icone: ray,
    iconeAlt: 'Ray',
    titulo: 'Ajuste instantâneo de parâmetros',
    descricao: 'ISO, exposição e foco são calibrados automaticamente para preservar detalhes, pele natural e cores fiéis à cena.',
  },
  {
    id: 'sugestoes-enquadramento',
    cor: 'color3',
    icone: scanLine,
    iconeAlt: 'Scan line',
    titulo: 'Sugestões de enquadramento',
    descricao: 'Guias visuais sugerem melhor ângulo e posicionamento enquanto você compõe, útil para iniciantes e para ganhar tempo no dia a dia.',
  },
];
