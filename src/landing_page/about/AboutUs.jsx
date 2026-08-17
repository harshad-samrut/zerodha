import React from "react";
import { Link } from "react-router-dom";
import "./People.css";

function AboutUS() {
  return (
    <section className="container about-us-section mb-4 mb-md-5">
      <div className="row justify-content-center gy-4 gx-lg-5">
        {/* Left Column */}
        <div className="col-12 col-md-6 col-lg-5">
          <p>
            We kick-started operations on the 15th of August, 2010 with the goal
            of breaking all barriers that traders and investors face in India in
            terms of cost, support, and technology. We named the company
            Zerodha, a combination of Zero and "Rodha", the Sanskrit word for
            barrier.
          </p>
          <p>
            Today, our disruptive pricing models and in-house technology have
            made us the biggest stock broker in India.
          </p>
          <p>
            Over 1.6+ crore clients place billions of orders every year through
            our powerful ecosystem of investment platforms, contributing over
            15% of all Indian retail trading volumes.
          </p>
        </div>

        {/* Right Column */}
        <div className="col-12 col-md-6 col-lg-5">
          <p>
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
          </p>
          <p>
            <Link to="#" className="link">Rainmatter</Link>, our fintech fund and incubator, has invested in several
            fintech startups with the goal of growing the Indian capital
            markets.
          </p>
          <p>
            And yet, we are always up to something new every day. Catch up on
            the latest updates on our <Link to="#" className="link">blog</Link> or see what the media is{" "}
            <Link to="#" className="link">saying about us</Link> or learn more about our business and product{" "}
            <Link to="#" className="link">philosophies</Link>.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutUS;