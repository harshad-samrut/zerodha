import React from "react";
import ecosystem from "../../assets/ecosystem.png";
import "./Trust.css";

function Trust() {
  return (
    <div className="container trust-section">
      <div className="row align-items-center">
        {/* Left Content */}
        <div className="col-4 offset-1 trust-content mt-5">
          <h3 className="mb-5">Trust with confidence</h3>

          <div className="trust-item">
            <h3 className="mt-5">Customer-first always</h3>
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
        <div className="col-6 text-center">
          <img
            src={ecosystem}
            alt="Zerodha ecosystem"
            className="img-fluid trust-image"
          />
          <div className="d-flex justify-content-center gap-4 mt-4">
            <a href="#" className="link fw-medium">
              Explore our products{" "}
              <i className="fa-solid fa-arrow-right-long"></i>
            </a>

            <a href="#" className="link fw-medium">
              Try Kite demo <i className="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trust;
