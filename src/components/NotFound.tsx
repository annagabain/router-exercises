import { Link } from "react-router-dom";

export const NotFound = () => {
    return (
      <div className="card">
        <h1>404 - Page Not Found</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
        <h2  style ={{backgroundColor:'black'}}><Link to="/">Go back to Home</Link></h2>
      </div>
    );
  };
  
  