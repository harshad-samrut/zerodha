import React from "react";
import { Link } from "react-router-dom";
import zerodhafundhouse from "../../assets/zerodhafundhouse.png";
import sensibullLogo from "../../assets/sensibull-logo.svg";
import tijori from "../../assets/tijori.svg";
import streakLogo from "../../assets/streak-logo.png";
import smallcaseLogo from "../../assets/smallcase-logo.png";
import dittoLogo from "../../assets/ditto-logo.png";
import "./Product.css";

const ZerodhaUniverseData = [
  {
    ImgUrl: zerodhafundhouse,
    imgName: "Zerodha Fund House",
    Description:
      "Our asset management venture that is creating simple and transparent index funds to help you save for your goals.",
  },
  {
    ImgUrl: sensibullLogo,
    imgName: "Sensibull",
    Description:
      "Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.",
  },
  {
    ImgUrl: tijori,
    imgName: "Tijori",
    Description:
      "Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.",
  },
  {
    ImgUrl: streakLogo,
    imgName: "Streak",
    Description:
      "Systematic trading platform that allows you to create and backtest strategies without coding.",
  },
  {
    ImgUrl: smallcaseLogo,
    imgName: "Smallcase",
    Description:
      "Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs.",
  },
  {
    ImgUrl: dittoLogo,
    imgName: "Ditto",
    Description:
      "Personalized advice on life and health insurance. No spam and no mis-selling.",
  },
];

function ZerodhaUniverse() {
  return (
    <section className="container universe-section my-5 pt-4">
      {/* Heading */}
      <div className="row text-center justify-content-center mb-5">
        <div className="col-12 col-md-10 col-lg-8">
          <h2 className="universe-title mb-3">The Zerodha Universe</h2>
          <p className="universe-subtext text-muted">
            Extend your trading and investment experience even further with our
            partner platforms
          </p>
        </div>
      </div>

      {/* Partner Cards Grid (3 columns on desktop, 2 on tablet, 1 on small mobile) */}
      <div className="row justify-content-center g-4 g-lg-5">
        {ZerodhaUniverseData.map((universe) => (
          <div
            className="col-12 col-sm-6 col-lg-4 text-center d-flex flex-column align-items-center mb-4"
            key={universe.imgName}
          >
            <Link to="/" className="universe-partner-card text-decoration-none">
              <div className="universe-logo-box d-flex align-items-center justify-content-center mb-3">
                <img
                  src={universe.ImgUrl}
                  alt={universe.imgName}
                  className="img-fluid universe-logo"
                />
              </div>
              <p className="universe-card-desc text-muted mb-0">
                {universe.Description}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ZerodhaUniverse;