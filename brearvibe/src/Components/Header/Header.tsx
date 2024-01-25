import { useState } from 'react';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import './Header.scss';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import Logo from '../Logo/Logo';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (menuOpen) {
      enableBodyScroll(document.body);
    } else {
      disableBodyScroll(document.body);
    }
  };

  const closeMenu = () => {
    setMenuOpen(false);
    enableBodyScroll(document.body);
  };

  return (
    <div className="header">
      <Logo />
      <nav>
        <div data-testid="burger_btn" className={`header_burger-btn ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span></span>
        </div>
        <ul data-testid="menu" className={`menu ${menuOpen ? 'open' : ''}`}>
          <li>
            <Link to="menu" onClick={closeMenu}>
              Menu
            </Link>
          </li>
          <li>
            <ScrollLink to="contact" onClick={closeMenu} smooth={true}>
              Contact
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="about" smooth={true} onClick={closeMenu}>
              About
            </ScrollLink>
          </li>
          <li>
            <Link to="catering" onClick={closeMenu}>
              Catering
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={closeMenu}>
              Coworking
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
