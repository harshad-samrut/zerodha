function ChargeAccOpen() {
  return (
    <div className="container">
      <div className="row d-flex flex-column">
        <h4 className="offset-1">Charges for account opening</h4>
      </div>
      <div className="col-1"></div>

      <div className="col-10">
        <table className="table table-bordered equity-table offset-1 my-3">
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
                <span className="badge bg-success">FREE</span> (online) / ₹ 500
                (offline)
              </td>
            </tr>

            <tr>
              <td>Partnership, LLP, and Corporate accounts (offline only)</td>
              <td>₹ 500</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="col-1"></div>
    </div>
  );
}

export default ChargeAccOpen;
