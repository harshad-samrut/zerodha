import React from "react";
import "./SupportPortal.css";

function SupportPortal() {
  const handleSearch = (e) => {
    e.preventDefault();
  };

  return (
    <section className="support-portal-section py-4 py-md-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            {/* Top Bar */}
            <div className="d-flex flex-column flex-sm-row justify-content-between align-items-sm-center gap-3 mb-4">
              <h2 className="support-portal-title mb-0">Support Portal</h2>
              <button className="btn btn-primary support-ticket-btn">
                My tickets
              </button>
            </div>

            {/* Search Input Bar */}
            <form onSubmit={handleSearch} className="support-search-form">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control search-box"
                  placeholder="Eg: How do I open my account, How do I activate F&O..."
                />
                <button className="btn btn-primary search-submit-btn" type="submit">
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SupportPortal;