import React from "react";
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
    <section className="container people-section pb-5">
      {/* Title */}
      <div className="row">
        <div className="col text-center mt-4 mt-md-5">
          <h2 className="people-main-heading">People</h2>
        </div>
      </div>

      {/* Founder Profile */}
      <div className="row justify-content-center align-items-center mt-4 mt-md-5 gy-4">
        <div className="col-12 col-md-5 col-lg-4 text-center">
          <img
            src={nithinKamath}
            alt="Nithin Kamath"
            className="rounded-circle img-fluid founder-img mb-3"
          />
          <h5 className="person-name mb-1">Nithin Kamath</h5>
          <p className="person-role">Founder, CEO</p>
        </div>

        <div className="col-12 col-md-7 col-lg-6 founder-bio">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade-long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on <Link to="#" className="link">Homepage</Link> /{" "}
            <Link to="#" className="link">TradingQnA</Link> /{" "}
            <Link to="#" className="link">Twitter</Link>
          </p>
        </div>
      </div>

      {/* Team Grid */}
      <div className="row mt-5 gy-4 justify-content-center">
        {people.map((person) => (
          <div
            className="col-12 col-sm-6 col-lg-4 text-center d-flex flex-column align-items-center mb-4"
            key={person.name}
          >
            <img
              src={person.image}
              alt={person.alt}
              className="rounded-circle img-fluid team-member-img mb-3"
            />
            <h5 className="person-name mb-1">{person.name}</h5>
            <p className="person-role">{person.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default People;