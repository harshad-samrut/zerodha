import React from "react";
import zero from "../../assets/pricing-eq.png";
import twenty from "../../assets/other-trades.png";
import "./Pricing.css";

function Pricing() {
  return (
    <section className="pricing-section container my-5 py-lg-4">
      <div className="row align-items-center gy-4 gy-lg-0">
        {/* Left Column: Heading & Info */}
        <div className="col-12 col-lg-5 offset-lg-1 text-center text-lg-start">
          <h2 className="pricing-heading mb-3">Unbeatable pricing</h2>
          <p className="pricing-subtext mb-4">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="#" className="link fw-medium">
            See pricing <i className="fa-solid fa-arrow-right-long ms-1"></i>
          </a>
        </div>

        {/* Right Column: Pricing Highlights */}
        <div className="col-12 col-lg-6">
          <div className="row g-3 g-md-4 text-center justify-content-center">
            <div className="col-4 col-sm-4 pricing-col">
              <div className="pricing-card">
                <img src={zero} alt="₹0 Free account opening" className="img-fluid pricing-icon" />
                <p className="pricing-caption">Free account opening</p>
              </div>
            </div>

            <div className="col-4 col-sm-4 pricing-col">
              <div className="pricing-card">
                <img src={twenty} alt="₹20 Intraday and F&O" className="img-fluid pricing-icon" />
                <p className="pricing-caption">Free equity delivery and direct mutual funds</p>
              </div>
            </div>

            <div className="col-4 col-sm-4 pricing-col">
              <div className="pricing-card">
                <img src={twenty} alt="₹20 Intraday and F&O" className="img-fluid pricing-icon" />
                <p className="pricing-caption">Intraday and F&O</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;