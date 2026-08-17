import React from "react";
import landing from "../../assets/landing.png";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero-section container text-center my-4 my-md-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8">
          <div className="hero-img-wrapper mb-4 mb-md-5">
            <img 
              src={landing} 
              alt="Invest in everything - Trading dashboard preview" 
              className="img-fluid hero-img" 
            />
          </div>
          <h1 className="hero-title fw-semibold">Invest in everything</h1>
          <p className="hero-subtitle text-muted mt-3 mb-4 mx-auto">
            Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;