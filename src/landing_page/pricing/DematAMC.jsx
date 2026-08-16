import "./charges-sections/ChargesSections.css";

function DematAMC() {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-1"></div>

        <div className="col-10 dematAMC">
          <h2>Demat AMC (Annual Maintenance Charge)</h2>

          <p className="mt-5">
            <span className="badge bg-light text-dark border-start border-4 border-primary rounded-0 p-3 fs-6 text-muted fw-5">
              Free for first year*
            </span>
          </p>

          <p className="mt-5">From second year onwards, for BSDA accounts:</p>

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

          <p>
            For a non-BSDA account, AMC is ₹300 per year + 18% GST, regardless
            of holdings value, charged quarterly.
          </p>

          <p>
            To learn more about BSDA, <a href="#">click here</a>. To learn more
            about AMC, <a href="#">click here</a>.
          </p>

          <p>*Resident individual accounts only.</p>
        </div>

        <div className="col-1"></div>
      </div>
    </div>
  );
}

export default DematAMC;
