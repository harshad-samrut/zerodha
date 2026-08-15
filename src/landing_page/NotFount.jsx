import {Link} from "react-router-dom"

function NotFound() {
  return (
    <>
      <h3>404 pag</h3>
      <h2>Kiaan couldn’t find that page</h2>
      <p>
        We couldn’t find the page you were looking for. Visit <Link to="/">Zerodha’s home page</Link>
      </p>
    </>
  );
}

export default NotFound;