import React from "react";
import img from "../../assets/index-education.png";

function Education() {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-5 offset-1 mt-5">
          <img
            src={img}
            alt="index-education"
            className="img-fluid mt-2"
          />
        </div>
        <div className="col-5 mt-5 d-flex flex-column gap-2">
          <h3 className="mt-5">Free and open market education</h3>
          <p className="mt-2">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a href="#" className="link fw-medium">
            Varsity <i className="fa-solid fa-arrow-right-long"></i>
          </a>
          <p className="mt-4">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a href="#" className="link fw-medium">
            TradingQ&A <i className="fa-solid fa-arrow-right-long"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
