import React from "react";
import Zero from "../../assets/pricing-eq.png";
import Twenty from "../../assets/other-trades.png";

function Prices() {
  return (
    <section className="container my-5">
      <div className="row justify-content-center gy-5 gy-lg-0 text-center">
        {/* Card 1 */}
        <div className="col-12 col-md-4 d-flex flex-column align-items-center px-lg-4">
          <img
            src={Zero}
            alt="Free equity delivery"
            className="img-fluid mb-3"
            style={{ width: "160px", maxWidth: "70%" }}
          />
          <h4 className="fw-medium text-dark mb-2">Free equity delivery</h4>
          <p className="text-muted" style={{ fontSize: "0.95rem", lineHeight: "1.7" }}>
            All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.
          </p>
        </div>

        {/* Card 2 */}
        <div className="col-12 col-md-4 d-flex flex-column align-items-center px-lg-4">
          <img
            src={Twenty}
            alt="Intraday and F&O trades"
            className="img-fluid mb-3"
            style={{ width: "160px", maxWidth: "70%" }}
          />
          <h4 className="fw-medium text-dark mb-2">Intraday and F&O trades</h4>
          <p className="text-muted" style={{ fontSize: "0.95rem", lineHeight: "1.7" }}>
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.
          </p>
        </div>

        {/* Card 3 */}
        <div className="col-12 col-md-4 d-flex flex-column align-items-center px-lg-4">
          <img
            src={Zero}
            alt="Free direct MF"
            className="img-fluid mb-3"
            style={{ width: "160px", maxWidth: "70%" }}
          />
          <h4 className="fw-medium text-dark mb-2">Free direct MF</h4>
          <p className="text-muted" style={{ fontSize: "0.95rem", lineHeight: "1.7" }}>
            All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Prices;