import React from "react";
import img from "../../assets/index-education.png";
import "./Education.css";

function Education() {
  return (
    <section className="education-section container my-4 my-md-5">
      <div className="row align-items-center gy-4 gy-lg-0">
        {/* Left: Illustration */}
        <div className="col-12 col-lg-5 offset-lg-1 text-center text-lg-start">
          <img
            src={img}
            alt="Zerodha Education and Varsity"
            className="img-fluid education-image"
          />
        </div>

        {/* Right: Content */}
        <div className="col-12 col-lg-5 education-content">
          <h2 className="education-heading mb-3 mb-md-4">
            Free and open market education
          </h2>

          <div className="education-item mb-4">
            <p className="mb-2">
              Varsity, the largest online stock market education book in the world
              covering everything from the basics to advanced trading.
            </p>
            <a href="#" className="link fw-medium">
              Varsity <i className="fa-solid fa-arrow-right-long ms-1"></i>
            </a>
          </div>

          <div className="education-item">
            <p className="mb-2">
              TradingQ&A, the most active trading and investment community in
              India for all your market related queries.
            </p>
            <a href="#" className="link fw-medium">
              TradingQ&A <i className="fa-solid fa-arrow-right-long ms-1"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;