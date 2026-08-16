function ChargesOptional() {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-1"></div>

        <div className="col-10">
          <h5>Charges for optional value added services</h5>

          <table className="table table-bordered equity-table my-4">
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

        <div className="col-1"></div>
      </div>
    </div>
  );
}

export default ChargesOptional;
