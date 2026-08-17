import React from "react";
import { Link } from "react-router-dom";
import "./Product.css";

function RightImg({ Title, Description, LearnMore, Img, ImgRedirect, ImgName }) {
  return (
    <section className="container product-showcase-section my-5 py-2 py-md-4">
      <div className="row align-items-center justify-content-center gy-4 gy-lg-0">
        {/* Left: Content (Stacks below or above naturally) */}
        <div className="col-12 col-lg-5 product-details order-2 order-lg-1 text-center text-lg-start">
          <h2 className="product-title mb-3">{Title}</h2>
          <p className="product-description mb-4">{Description}</p>
          <Link to={LearnMore} className="link fw-medium">
            Learn More <i className="fa-solid fa-arrow-right-long ms-1"></i>
          </Link>
        </div>

        {/* Right: Image */}
        <div className="col-12 col-lg-6 offset-lg-1 text-center order-1 order-lg-2">
          <Link to={ImgRedirect || "#"}>
            <img 
              src={Img} 
              alt={ImgName || Title} 
              className="img-fluid product-showcase-img" 
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default RightImg;