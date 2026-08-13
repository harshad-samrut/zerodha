import React from "react";
import kcLogoLanding from "../../assets/kc-logo-landing.png";
import "./kite-connect-section.css";

function KiteConnect() {
  return (
    <div className="kite-connect-section mb-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Logo */}
          <div className="col-2 offset-1">
            <img src={kcLogoLanding} alt="Kite Connect" className="img-fluid" />
          </div>

          {/* Content */}
          <div className="col-7">
            <p>
              Need more? Build your own trading and investing experience with
              Kite Connect, simple HTTP APIs to place orders, stream market
              data, manage your account, and more.
              <a href="#" className="link">
                {" "}
                Explore <i className="fa-solid fa-arrow-right-long"></i>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KiteConnect;
