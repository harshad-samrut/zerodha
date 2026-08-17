import React from "react";
import { Link } from "react-router-dom";
import "./Product.css";

function Hero() {
  return (
    <section className="container text-center product-hero my-4 my-md-5 pt-3 pt-md-4">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8">
          <h1 className="product-main-heading mb-3">Zerodha Products</h1>
          <h5 className="product-subheading text-muted mb-3">
            Sleek, modern, and intuitive trading platforms
          </h5>
          <p className="text-muted product-hero-link mb-4">
            Check out our{" "}
            <Link className="link" to="/">
              investment offerings{" "}
              <i className="fa-solid fa-arrow-right-long ms-1"></i>
            </Link>
          </p>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-12 col-lg-10 offset-lg-1">
          <hr className="product-divider" />
        </div>
      </div>
    </section>
  );
}

export default Hero;