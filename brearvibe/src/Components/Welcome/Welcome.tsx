import { Link } from 'react-router-dom';
import './Welcome.scss';

function Welcome() {
  return (
    <div className="welcome">
      <div className="welcome_banner"></div>
      <div className="welcome_block">
        <h1>BEARVIBE</h1>
        <p>Energy in a cup of aromatic coffee</p>
        <Link to={'contact-forms'} className="button">
          Contact Us
        </Link>
      </div>
    </div>
  );
}

export default Welcome;
