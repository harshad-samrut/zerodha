import React from "react";
import "./QuickLinks.css";

function QuickLinks() {
  return (
    <div className="quicklinks-container">
      {/* Notice Box */}
      <div className="notice-box">
        <ul>
          <li>
            <a href="#">Surveillance measure on scrips - August 2026</a>
          </li>
          <li>
            <a href="#">Open Market Buybacks - August 2026</a>
          </li>
        </ul>
      </div>

      {/* Quick Links Card */}
      <div className="quick-links-card">
        <div className="quick-links-header">Quick links</div>
        <div className="quick-links-list">
          <a href="#" className="link p-4">1. Track account opening</a>
          <a href="#" className="link p-4">2. Track segment activation</a>
          <a href="#" className="link p-4">3. Intraday margins</a>
          <a href="#" className="link p-4">4. Kite user manual</a>
          <a href="#" className="link p-4">5. Learn how to create a ticket</a>
        </div>
      </div>
    </div>
  );
}

export default QuickLinks;