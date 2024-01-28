import { Link } from "react-router-dom";
import './ErrorPage.scss';

function ErrorPage() {
  return (
    <div className="notfound">
      <h1>Oops!</h1>
      <h2>404-not found page</h2>
      <p>This page probably doesn't exist, go back to the home page.</p>
      <div className="home_button">
        <Link to={'/'} className="button">
          Go to home
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage;
