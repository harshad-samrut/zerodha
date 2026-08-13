import React from "react";
import zero from "../../assets/pricing-eq.png";
import twenty from "../../assets/other-trades.png";

function Pricing() {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        <div className="col-4 offset-1 mt-5">
          <h3>Unbeatable pricing</h3>

          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>

          <a href="#" className="link fw-medium">
            See pricing <i className="fa-solid fa-arrow-right-long"></i>
          </a>
        </div>

        <div className="col-2 text-center">
          <img src={zero} alt="zero" className="img-fluid" />
          <p className="fs-6">Free account opening</p>
        </div>
        <div className="col-2 text-center">
          <img src={twenty} alt="twenty" className="img-fluid" />
          <p>Free equity delivery and direct mutual funds</p>
        </div>
        <div className="col-2 text-center">
          <img src={zero} alt="zero" className="img-fluid" />
          <p>Intraday and F&O</p>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
