import { Link } from "react-router-dom";
function CalculateCost() {
  return (
    <p className="text-center fs-5 my-5 pb-5">
      <Link className="link" to="/">Calculate your costs upfront</Link> using our brokerage
      calculator
    </p>
  );
}

export default CalculateCost;
