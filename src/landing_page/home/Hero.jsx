import React from "react";
import landing from "../../assets/landing.png";
import "./Hero.css"

function Hero() {
  return (
    <div className="container text-center my-5">
      <div className="row">
        <div className="col-8 offset-2">
          <img src={landing} alt="landing img" className="img-fluid mb-5" />
          <h2 className="mt-3">Invest in everything</h2>
          <p className="fs-5">Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
          
        </div>  
      </div>
    </div>
  );
}

export default Hero;
