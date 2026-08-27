import giftIcon from '../../assets/icons/gift.svg';

const BASE_INTERESSADOS = 847;

function CTA({ totalInscritos, aoAbrirModal }) {
  const totalInteressados = BASE_INTERESSADOS + totalInscritos;

  return (
    <section className="cta">
      <div className="cta__icon-wrapper">
        <img src={giftIcon} alt="Gift" className="cta__icon" />
      </div>
      <h2 className="cta__title">Cadastre-se para receber atualizações</h2>
      <p className="cta__subtitle">
        Receba novidades do projeto, acesso antecipado a demos e possíveis vouchers para quem quiser acompanhar de perto o lançamento.
      </p>
      <button className="cta__button" onClick={aoAbrirModal}>Quero ser atualizado(a)!</button>
      <p className="cta__footer">
        *Mais de {totalInteressados} pessoas já deixaram o e-mail na lista de interesse.
      </p>
    </section>
  );
}

export default CTA;
