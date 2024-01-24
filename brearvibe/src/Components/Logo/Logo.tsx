import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

function Logo() {
  return (
    <div>
      <Link to="/">
        <div className="header_logo">
          <img src={logo} alt="Logo" />
        </div>
      </Link>
    </div>
  );
}

export default Logo;
