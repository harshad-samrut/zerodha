import React from "react";
import appstore from "../../assets/appstore-badge-light.png";
import playstore from "../../assets/google-play-badge-light.png";
import "./Product.css";

function LeftImg({ ImgUrl, Title, Description, TryDemo, LearnMore }) {
  return (
    <section className="container product-showcase-section my-5 py-2 py-md-4">
      <div className="row align-items-center justify-content-center gy-4 gy-lg-0">
        {/* Left: Image */}
        <div className="col-12 col-lg-6 text-center">
          <img 
            src={ImgUrl} 
            alt={Title} 
            className="img-fluid product-showcase-img" 
          />
        </div>

        {/* Right: Content */}
        <div className="col-12 col-lg-5 offset-lg-1 product-details text-center text-lg-start">
          <h2 className="product-title mb-3">{Title}</h2>
          <p className="product-description mb-4">{Description}</p>
          
          <div className="d-flex justify-content-center justify-content-lg-start gap-4 flex-wrap mb-4">
            <a href={TryDemo} className="link fw-medium">
              Try Demo <i className="fa-solid fa-arrow-right-long ms-1"></i>
            </a>
            <a href={LearnMore} className="link fw-medium">
              Learn More <i className="fa-solid fa-arrow-right-long ms-1"></i>
            </a>
          </div>

          <div className="d-flex justify-content-center justify-content-lg-start gap-3 store-badges">
            <a href="/">
              <img src={playstore} alt="Google Play" className="app-badge" />
            </a>
            <a href="/">
              <img src={appstore} alt="App Store" className="app-badge" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LeftImg;