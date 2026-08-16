import Zero from "../../assets/pricing-eq.png";
import Twenty from "../../assets/other-trades.png";

function Prices() {
  return (
    <div className="container">
      <div className="row my-5">
        <div className="col-3 offset-1 d-flex flex-column align-items-center text-center gap-3">
          <img src={Zero} alt="Zero" className="img-fluid w-75" />
          <h3>Free equity delivery</h3>
          <p className="text-muted">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-4 d-flex flex-column align-items-center text-center gap-3">
          <img src={Twenty} alt="Twenty" className="img-fluid w-50" />
          <h3>Intraday and F&O trades</h3>
          <p className="text-muted px-5">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-3 d-flex flex-column align-items-center text-center gap-3">
          <img src={Zero} alt="Zero" className="img-fluid w-75" />
          <h3>Free direct MF</h3>
          <p className="text-muted">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
        <div className="col-1"></div>
      </div>
    </div>
  );
}

export default Prices;
