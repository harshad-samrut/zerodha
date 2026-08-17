import React from "react";

function DematAMC() {
  return (
    <section className="container my-5">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-10 dematAMC">
          <h3 className="fw-medium text-dark mb-3">Demat AMC (Annual Maintenance Charge)</h3>

          <div className="my-3">
            <span className="badge bg-light text-dark border-start border-4 border-primary rounded-0 p-3 fs-6 text-muted fw-normal">
              Free for first year*
            </span>
          </div>

          <p className="mt-4 mb-2 text-muted">From second year onwards, for BSDA accounts:</p>

          <div className="table-responsive">
            <table className="table table-bordered equity-table my-3">
              <thead>
                <tr className="text-muted">
                  <th>Value of holdings</th>
                  <th>AMC</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Up to ₹4 lakh</td>
                  <td>
                    <span className="badge bg-success">FREE</span>
                  </td>
                </tr>
                <tr>
                  <td>₹4 lakh – ₹10 lakh</td>
                  <td>₹100 per year + 18% GST, charged quarterly</td>
                </tr>
                <tr>
                  <td>Above ₹10 lakh</td>
                  <td>₹300 per year + 18% GST, charged quarterly</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-muted mt-3 mb-1" style={{ fontSize: "0.9rem" }}>
            For a non-BSDA account, AMC is ₹300 per year + 18% GST, regardless of holdings value, charged quarterly.
          </p>
          <p className="text-muted mb-1" style={{ fontSize: "0.9rem" }}>
            To learn more about BSDA, <a href="#" className="link">click here</a>. To learn more about AMC, <a href="#" className="link">click here</a>.
          </p>
          <p className="text-muted" style={{ fontSize: "0.85rem" }}>*Resident individual accounts only.</p>
        </div>
      </div>
    </section>
  );
}

export default DematAMC;