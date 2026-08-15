import nithinKamath from "../../assets/nithin-kamath.jpg";
import { Link } from "react-router-dom";

import Nikhil from "../../assets/Nikhil.jpg";
import Kailash from "../../assets/Kailash.jpg";
import Venu from "../../assets/Venu.jpg";
import Seema from "../../assets/Seema.jpg";
import karthik from "../../assets/karthik.jpg";
import Austin from "../../assets/Austin.jpg";

import "./People.css";

const people = [
  {
    name: "Nikhil Kamath",
    role: "Co-founder & CFO",
    image: Nikhil,
    alt: "Nikhil Kamath",
  },
  {
    name: "Dr. Kailash Nadh",
    role: "CTO",
    image: Kailash,
    alt: "Dr. Kailash Nadh",
  },
  {
    name: "Venu Madhav",
    role: "COO",
    image: Venu,
    alt: "Venu Madhav",
  },
  {
    name: "Seema Patil",
    role: "Director",
    image: Seema,
    alt: "Seema Patil",
  },
  {
    name: "Karthik Rangappa",
    role: "Chief of Education",
    image: karthik,
    alt: "Karthik Rangappa",
  },
  {
    name: "Austin Prakesh",
    role: "Director Strategy",
    image: Austin,
    alt: "Austin Prakesh",
  },
];
function People() {
  return (
    <div className="container ">
      <div className="row">
        <div className="col text-center mt-5">
          <h3>People</h3>
        </div>
      </div>

      {/* Nithin */}
      <div className="row mt-5 d-flex gap-4">
        <div className="col-3 offset-2  d-flex flex-column text-center">
          <img
            src={nithinKamath}
            alt="nithin-kamath"
            className="rounded-circle"
          />
          <h6 className="mt-4">Nithin Kamath</h6>
          <p className="font-size-small">Founder, CEO</p>
        </div>
        <div className="col-5 lh-lg ms-3 mt-4">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>

          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>

          <p>Playing basketball is his zen.</p>

          <p>
            Connect on <Link to={"/"}>Homepage</Link> /{" "}
            <Link to={"/"}>TradingQnA</Link> / <Link to={"/"}>Twitter</Link>
          </p>
        </div>
      </div>
      {/* Other people */}
      <div className="row my-5">
        {people.map((person) => (
          <div
            className="col-12 col-md-4 text-center my-5 d-flex flex-column align-items-center gap-4"
            key={person.name}
          >
            <img
              src={person.image}
              alt={person.name}
              className="rounded-circle img-fluid"
              width={250}
            />

            <div className="role">
              <h6>{person.name}</h6>
              <p className="font-size-small">{person.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default People;
