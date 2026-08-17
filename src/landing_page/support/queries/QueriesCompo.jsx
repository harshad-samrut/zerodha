import React from "react";
import CategorySection from "./CategorySection.jsx";
import QuickLinks from "./QuickLinks.jsx";

function QueriesCompo() {
  return (
    <section className="container my-4 my-md-5">
      <div className="row justify-content-center gy-4">
        {/* Accordion Categories */}
        <div className="col-12 col-lg-7 col-xl-7">
          <CategorySection />
        </div>

        {/* Quick Links & Notices Sidebar */}
        <div className="col-12 col-lg-5 col-xl-4 offset-xl-1">
          <QuickLinks />
        </div>
      </div>
    </section>
  );
}

export default QueriesCompo;