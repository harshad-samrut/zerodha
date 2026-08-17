import React from "react";
import kcLogoLanding from "../../assets/kc-logo-landing.png";
import "./kite-connect-section.css";

function KiteConnect() {
  return (
    <section className="kite-connect-section my-4 my-md-5">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          {/* Logo */}
          <div className="col-12 col-md-3 col-lg-2 offset-lg-1 text-center text-md-start mb-3 mb-md-0">
            <img 
              src={kcLogoLanding} 
              alt="Kite Connect" 
              className="img-fluid kc-logo" 
            />
          </div>

          {/* Content */}
          <div className="col-12 col-md-9 col-lg-7 text-center text-md-start">
            <p className="kc-text mb-0">
              Need more? Build your own trading and investing experience with
              Kite Connect, simple HTTP APIs to place orders, stream market
              data, manage your account, and more.{" "}
              <a href="#" className="link text-nowrap">
                Explore <i className="fa-solid fa-arrow-right-long ms-1"></i>
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default KiteConnect;