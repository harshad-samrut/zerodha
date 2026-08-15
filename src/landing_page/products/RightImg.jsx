import { Link } from "react-router-dom";
import "./Product.css"
function RightImg({ Title, Description, LearnMore, Img, ImgRedirect, ImgName }) {
  return (
    <div className="container my-5">
      <div className="row my-5">
        <div className="col-3 offset-1 d-flex flex-column justify-content-center gap-3 product ">
          <h3>{Title}</h3>
          <p>{Description}</p>
          <Link to={LearnMore} className="link">
            Learn More &nbsp; <i className="fa-solid fa-arrow-right-long"></i>
          </Link>
        </div>
        <div className="col-1"></div>
        <div className="col-6 ms-5">
            <Link to={ImgRedirect}><img src={Img} alt={ImgName} /></Link>
        </div>
      </div>
    </div>
  );
}

export default RightImg;
