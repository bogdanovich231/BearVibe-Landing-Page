import { NavLink } from 'react-router-dom';
import Logo from '../Logo/Logo';
import './Footer.scss';

function Footer() {
  return (
    <div className="footer">
      <div className="footer_author">
        <h3>Made:</h3>
        <NavLink to={'https://github.com/bogdanovich231'}>Tatsiana Kulinkovich</NavLink>
      </div>
      <Logo />
    </div>
  );
}

export default Footer;
