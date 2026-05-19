import { Link } from "react-router-dom";
import "./style.css";

function NotFound() {

  return (
    <div className="not-founds">
    <div className="not-found">
      {/* Errors Display */}

      <h1>404 Error</h1>
      <h2>Page Not Found</h2>

      {/* Error Message  */}
      
      <p> The page you are trying to access does not exist. </p>
      <Link to="/"> <button id="nfBtn"> Go To Home </button> </Link>
    </div>
    </div>

  );
}

export default NotFound;