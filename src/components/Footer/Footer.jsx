import eyeIcon from '../../assets/icons/eye.svg';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__brand">
          <img src={eyeIcon} alt="Diamond eye" className="footer__icon" />
          <span className="footer__brand-text">Diamond eye</span>
        </div>
      </div>
      <p className="footer__note">
        © 2026 SmartCam AI — câmera intuitiva com modos e configurações guiados por algoritmos. Hardware em fase final; lançamento previsto para 05/2026.
      </p>
    </footer>
  );
}

export default Footer;
