# camera-intuitiva

Landing page do **Diamond Eye / SmartCam AI**, uma câmera que analisa a cena em tempo real e ajusta ISO, exposição e foco automaticamente. Projeto acadêmico da FIAP, migrado de HTML/CSS/JS puro para React (Vite).

## Seções da página

- **Header** — navegação por âncora (A Solução, Público-Alvo, Galeria, Nossa Equipe).
- **Hero** — título, subtítulo, estatísticas do produto, chips de recursos e mockups de smartphone.
- **A solução** — o problema e como o Modo Automático resolve.
- **Público-alvo** — os perfis de usuário do produto.
- **Telas reais em smartphones** — GIFs demonstrando o app em uso.
- **Tecnologia que transforma** — cards de recursos (detecção de cena, ajuste de parâmetros, enquadramento).
- **Simulador de Modo Automático** — simula a análise de cena da câmera: sorteia um modo, calcula ISO, exposição, abertura e confiança, e mantém histórico e estatísticas.
- **Galeria de Capturas** — fotos de exemplo por modo, com opção de favoritar.
- **Nossa Equipe** — cards dos integrantes do grupo.
- **CTA** — chamada para inscrição na lista de interesse, com contador dinâmico.
- **Footer**.
- **Modal de inscrição** e **alerta de sucesso**.

## Tecnologias utilizadas

- React 18 (componentes funcionais, JavaScript puro, sem TypeScript)
- Vite
- CSS puro seguindo metodologia BEM (sem bibliotecas de UI)

## Como instalar

```bash
npm install
```

## Como executar

```bash
npm run dev       # ambiente de desenvolvimento
npm run build     # build de produção em dist/
npm run preview   # serve o build de produção localmente
```

## Estrutura de pastas

```
src/
  components/   um componente por pasta, hierarquia pai -> filho via props
  data/         arrays com o conteúdo das seções (cards, integrantes, cenas...)
  hooks/        hooks reutilizáveis (useLocalStorage)
  utils/        lógica pura, separada da UI (validação, análise de cena)
  assets/       imagens, gifs e ícones
  styles/       CSS BEM, um arquivo por seção, importados em index.css
prototipo/      versão original em HTML/CSS/JS puro, preservada para referência
```

A hierarquia segue pai -> filho: cada seção (`Hero`, `Solution`, `Gallery`, `Team` etc.) busca seus dados em `src/data/`, mapeia com `.map()` e repassa cada item como props para um componente filho (`StatCard`, `SolutionCard`, `GalleryItem`, `TeamCard`...). O `App.jsx` é o único componente que conhece todas as seções e concentra o estado do modal, do alerta e das inscrições, repassando funções e dados via props.

## localStorage

Usado através do hook `src/hooks/useLocalStorage.js` em quatro pontos:

- **Inscrições** (`src/components/Modal/Modal.jsx` + `src/App.jsx`, chave `inscricoes`): nome, e-mail e telefone validados no cliente; e-mail duplicado é bloqueado em vez de cadastrado de novo.
- **Contador do CTA** (`src/components/CTA/CTA.jsx`): soma a base fixa ao total de inscrições salvas.
- **Histórico do simulador** (`src/components/Simulator/Simulator.jsx`, chave `simulador-historico`): últimas 20 análises, com botão para limpar.
- **Favoritos da galeria** (`src/components/Gallery/Gallery.jsx`, chave `galeria-favoritos`): fotos marcadas continuam favoritas após recarregar a página.

## Objeto Math

Toda a lógica de cálculo do simulador está isolada em `src/utils/analiseDeCena.js`:

- `Math.random()` sorteia o modo da cena (entre comida, retrato, paisagem, animal, noturno e baixa luz, definidos em `src/data/cenas.js`) e gera o código de captura.
- `Math.floor`, `Math.ceil`, `Math.round`, `Math.min`, `Math.max` e `Math.pow` calculam ISO, exposição, abertura e nível de confiança dentro das faixas de cada modo.
- `toFixed()` formata abertura e exposição.
- `src/components/Simulator/StatsPanel.jsx` exibe estatísticas calculadas em `calcularEstatisticas()`: total de análises, modo mais frequente, ISO médio e percentual por modo, também usando `Math.round`.

## Integrantes

- Pollyana Valverde — RM569871
- Luana Lopes — RM569643
- João Fernando — RM572144

## Usuários e senhas de teste

Não há autenticação nesta aplicação. Não existem usuários, senhas ou login — todas as seções são públicas.
