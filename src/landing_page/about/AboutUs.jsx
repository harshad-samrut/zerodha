import {Link} from "react-router-dom"
function AboutUS() {
  return (
    <div className=" mb-5">
      <div className="row mb-5">
        <div className="col-4 offset-2 lh-lg ">
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
            15% of all Indian retail trading volumes
          </p>
        </div>
        <div className="col-4 lh-lg">
          <p>
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
          </p>
          <p>
            <Link to="/">Rainmatter</Link>, our fintech fund and incubator, has invested in several
            fintech startups with the goal of growing the Indian capital
            markets.
          </p>
          <p>
            And yet, we are always up to something new every day. Catch up on
            the latest updates on our <Link to="/">blog</Link> or see what the media is <Link to="/">saying about</Link>
            us or learn more about our business and product <Link to="/">philosophies</Link>.
          </p>
        </div>
      </div>
    </div>
  );
}
export default AboutUS;
