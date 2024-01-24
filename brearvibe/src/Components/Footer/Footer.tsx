import Logo from '../Logo/Logo';
import './Footer.scss';

function Footer() {
  return (
    <div className="footer">
      <div className="footer_author">
        <h3>Made:</h3>
        <p>Tatsiana Kulinkovich</p>
      </div>
      <Logo />
    </div>
  );
}

export default Footer;
