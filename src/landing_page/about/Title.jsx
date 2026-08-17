import React from "react";
import "./People.css";

function Title() {
  return (
    <section className="about-title-section container mt-4 mt-md-5 pt-3 pt-md-4">
      <div className="row justify-content-center text-center">
        <div className="col-12 col-md-10 col-lg-8">
          <h2 className="about-hero-text">
            We pioneered the discount broking model in India.
            <br className="d-none d-md-inline" />
            {" "}Now, we are breaking ground with our technology.
          </h2>
        </div>
      </div>
      <div className="row mt-4 mt-md-5">
        <div className="col-12 col-lg-10 offset-lg-1">
          <hr className="about-divider" />
        </div>
      </div>
    </section>
  );
}

export default Title;