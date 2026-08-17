import React from "react";

function ChargesAccOpen() {
  return (
    <section className="container my-5">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-10">
          <h4 className="fw-medium text-dark mb-3">Charges for account opening</h4>
          <div className="table-responsive">
            <table className="table table-bordered equity-table">
              <thead>
                <tr className="text-muted">
                  <th>Type of account</th>
                  <th>Charges</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Individual account</td>
                  <td>
                    <span className="badge bg-success">FREE</span>
                  </td>
                </tr>
                <tr>
                  <td>Minor account</td>
                  <td>
                    <span className="badge bg-success">FREE</span>
                  </td>
                </tr>
                <tr>
                  <td>NRI account</td>
                  <td>₹ 500</td>
                </tr>
                <tr>
                  <td>HUF account</td>
                  <td>
                    <span className="badge bg-success">FREE</span> (online) / ₹ 500 (offline)
                  </td>
                </tr>
                <tr>
                  <td>Partnership, LLP, and Corporate accounts (offline only)</td>
                  <td>₹ 500</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ChargesAccOpen;