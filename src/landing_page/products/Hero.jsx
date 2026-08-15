import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="container text-center my-5 py-5 d-flex flex-column gap-5">
      <div className="row d-flex flex-column gap-3 my-3 py-3">
        <h2>Zerodha Products</h2>
        <h5 className="text-muted">Sleek, modern, and intuitive trading platforms</h5>
        <p className="text-muted">
          Check out our &nbsp;
          <Link className="link" to="/">
            investment offerings&nbsp;<i className="fa-solid fa-arrow-right-long" style={{color:"#387ed1"}}></i>
          </Link>
          <a href=""></a>
        </p>
      </div>
      <div className="row">
        <hr />
      </div>
    </div>
  );
}

export default Hero;
