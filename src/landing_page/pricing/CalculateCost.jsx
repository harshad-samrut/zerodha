import React from "react";
import { Link } from "react-router-dom";

function CalculateCost() {
  return (
    <div className="container text-center my-4 my-md-5">
      <p className="fs-5 text-muted mb-0">
        <Link className="link fw-medium" to="/">
          Calculate your costs upfront
        </Link>{" "}
        using our brokerage calculator
      </p>
    </div>
  );
}

export default CalculateCost;