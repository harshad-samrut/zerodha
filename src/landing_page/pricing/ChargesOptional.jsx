import React from "react";

function ChargesOptional() {
  return (
    <section className="container my-5">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-10">
          <h4 className="fw-medium text-dark mb-3">Charges for optional value added services</h4>
          <div className="table-responsive">
            <table className="table table-bordered equity-table">
              <thead>
                <tr className="text-muted">
                  <th>Service</th>
                  <th>Billing Frequency</th>
                  <th>Charges</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Tickertape</td>
                  <td>Monthly / Quarterly / Annual</td>
                  <td>Free: 0 | Pro: 249/699/2399</td>
                </tr>
                <tr>
                  <td>Smallcase</td>
                  <td>Per transaction</td>
                  <td>Buy & Invest More: 100 | SIP: 10</td>
                </tr>
                <tr>
                  <td>Kite Connect</td>
                  <td>Monthly</td>
                  <td>Connect: 500 | Personal: Free</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ChargesOptional;