import React from "react";
import ecosystem from "../../assets/ecosystem.png";
import "./Trust.css";

function Trust() {
  return (
    <section className="container trust-section">
      <div className="row align-items-center gy-5">
        {/* Left Content */}
        <div className="col-12 col-lg-5 offset-lg-1 trust-content">
          <h2 className="trust-main-heading mb-4 mb-lg-5">Trust with confidence</h2>

          <div className="trust-item">
            <h3>Customer-first always</h3>
            <p>
              That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh
              crores of equity investments, making us India’s largest broker;
              contributing to 15% of daily retail exchange volumes in India.
            </p>
          </div>

          <div className="trust-item">
            <h3>No spam or gimmicks</h3>
            <p>
              No gimmicks, spam, "gamification", or annoying push notifications.
              High quality apps that you use at your pace, the way you like. Our
              philosophies.
            </p>
          </div>

          <div className="trust-item">
            <h3>The Zerodha universe</h3>
            <p>
              Not just an app, but a whole ecosystem. Our investments in 30+
              fintech startups offer you tailored services specific to your
              needs.
            </p>
          </div>

          <div className="trust-item">
            <h3>Do better with money</h3>
            <p>
              With initiatives like Nudge and Kill Switch, we don't just
              facilitate transactions, but actively help you do better with your
              money.
            </p>
          </div>
        </div>

        {/* Right Image */}
        <div className="col-12 col-lg-6 text-center trust-image-col">
          <img
            src={ecosystem}
            alt="Zerodha ecosystem map"
            className="img-fluid trust-image"
          />
          <div className="d-flex flex-wrap justify-content-center gap-3 gap-md-4 mt-4">
            <a href="#" className="link fw-medium">
              Explore our products{" "}
              <i className="fa-solid fa-arrow-right-long ms-1"></i>
            </a>

            <a href="#" className="link fw-medium">
              Try Kite demo{" "}
              <i className="fa-solid fa-arrow-right-long ms-1"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Trust;