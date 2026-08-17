import React from "react";

function Charges() {
  return (
    <section className="container text-center my-4 my-md-5 pt-3 pt-md-4">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8">
          <h1 className="fw-medium text-dark mb-2" style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)" }}>
            Charges
          </h1>
          <p className="fs-5 text-muted mb-0">List of all charges and taxes</p>
        </div>
      </div>
    </section>
  );
}

export default Charges;