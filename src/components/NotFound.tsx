import { Link } from 'react-router-dom';
import '../NotFound.css'

export const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1 className="error-code">404</h1>
        <p className="error-message">Oops! The page you are looking for does not exist.</p>
        <Link to="/" className="home-link">Go back to Home</Link>
      </div>
    </div>
  );
};
