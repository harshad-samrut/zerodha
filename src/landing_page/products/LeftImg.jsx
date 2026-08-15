import appstore from "../../assets/appstore-badge-light.png";
import playstore from "../../assets/google-play-badge-light.png";
import "./Product.css";

function LeftImg({ ImgUrl, Title, Description, TryDemo, LearnMore }) {
  return (
    <div className="container d-flex gap-5 align-item-end ">
      <div className="row my-5">
        <div className="col-5 offset-1">
          <img src={ImgUrl} alt="img" />
        </div>
        <div className="col-1"></div>
        <div className="col-4 d-flex flex-column gap-3 product justify-content-center">
          <h3>{Title}</h3>
          <p className="lh-lg">{Description}</p>
          <div className="d-flex gap-5">
            <a href={TryDemo} className="link">
              Try Demo &nbsp; <i className="fa-solid fa-arrow-right-long"></i>
            </a>
            <a href={LearnMore} className="link">
              Learn More &nbsp;<i className="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>
          <div className="store d-flex gap-4 mt-3 mb-5">
            <a href="/">
              <img src={playstore} alt="Play store" />
            </a>
            <a href="/">
              <img src={appstore} alt="Play store" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftImg;
