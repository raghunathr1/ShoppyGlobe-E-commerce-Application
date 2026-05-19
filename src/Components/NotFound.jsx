import { Link } from "react-router-dom";

function NotFound() {

  return (
    <>
    <div className="not-found">
      <h1>404 Error</h1>
      <h2>Page Not Found</h2>
      <p> The page you are trying to access does not exist. </p>
      <Link to="/"> <button> Go To Home </button> </Link>
    </div>
    </>

  );
}

export default NotFound;