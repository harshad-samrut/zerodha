import CategorySection from "./CategorySection.jsx";
import QuickLinks from "./QuickLinks.jsx";

function QueriesCompo() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-1"></div>
          <div className="col-8">
            <CategorySection />
          </div>
          <div className="col-3">
            <QuickLinks />
          </div>
        </div>
      </div>
    </>
  );
}

export default QueriesCompo;
