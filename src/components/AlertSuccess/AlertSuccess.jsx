import circleCheck from '../../assets/icons/circle-check.svg';

function AlertSuccess({ aberto, aoFechar }) {
  return (
    <div className={`alert-overlay${aberto ? ' active' : ''}`} onClick={(event) => event.target === event.currentTarget && aoFechar()}>
      <div className="alert-success">
        <div className="alert-success__icon-wrapper">
          <img className="alert-success__icon" src={circleCheck} alt="" />
        </div>
        <h2 className="alert-success__title">Parabéns! 🎉</h2>
        <p className="alert-success__message">
          Você está inscrito e receberá todas as novidades e atualizações sobre o nosso projeto
        </p>
        <button className="alert-success__button" onClick={aoFechar}>Entendi!</button>
      </div>
    </div>
  );
}

export default AlertSuccess;
