import zerodhafundhouse from "../../assets/zerodhafundhouse.png";
import sensibullLogo from "../../assets/sensibull-logo.svg";
import tijori from "../../assets/tijori.svg";
import streakLogo from "../../assets/streak-logo.png";
import smallcaseLogo from "../../assets/smallcase-logo.png";
import dittoLogo from "../../assets/ditto-logo.png";

import { Link } from "react-router-dom";

let ZerodhaUniverseData = [
  {
    ImgUrl: zerodhafundhouse,
    imgName: "zerodhafundhouse",
    Description:
      "Our asset management venture that is creating simple and transparent index funds to help you save for your goals.",
  },
  {
    ImgUrl: sensibullLogo,
    imgName: "sensibull-logo",
    Description:
      "Our asset management venture that is creating simple and transparent index funds to help you save for your goals.",
  },
  {
    ImgUrl: tijori,
    imgName: "tijori",
    Description:
      "Our asset management venture that is creating simple and transparent index funds to help you save for your goals.",
  },
  {
    ImgUrl: streakLogo,
    imgName: "streak-logo",
    Description:
      "Our asset management venture that is creating simple and transparent index funds to help you save for your goals.",
  },
  {
    ImgUrl: smallcaseLogo,
    imgName: "small-case-Logo",
    Description:
      "Our asset management venture that is creating simple and transparent index funds to help you save for your goals.",
  },
  {
    ImgUrl: dittoLogo,
    imgName: "zerodhafundhouse",
    Description:
      "Our asset management venture that is creating simple and transparent index funds to help you save for your goals.",
  },
];

function ZerodhaUniverse() {
  return (
    <div className="container ">
      <div className="row">
        <div className="col d-flex flex-column align-items-center mt-3 mb-5 gap-4">
          <h3>The Zerodha Universe</h3>
          <p>
            Extend your trading and investment experience even further with our
            partner platforms
          </p>
        </div>
      </div>
      <div className="row d-flex justify-content-center align-items-center  g-4">
        {ZerodhaUniverseData.map((universe) => (
          <>
            <div className="col-1"></div>
            <Link
              to="/"
              className="col-6 col-md-3 d-flex flex-column align-items-center text-center link mb-5"
            >
              <img
                src={universe.ImgUrl}
                alt={universe.imgName}
                className="img-fluid w-50"
              />
              <p className="mt-4 text-muted">{universe.Description}</p>
            </Link>
          </>
        ))}
      </div>
    </div>
  );
}

export default ZerodhaUniverse;
