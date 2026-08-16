import "./SupportPortal.css";

function SupportPortal() {
  const handleSearch = (e) => {
    e.preventDefault();
    // search logic here
  };
  return (
    <div className="container-fluid">
      <div className="row" style={{ backgroundColor: "#f5f5f5" }}>
        <div className="col-1"></div>
        <div className="col-10 d-flex justify-content-between p-3">
          <h1>Support Portal</h1>
          <button className="btn btn-primary">My tickets</button>
        </div>
        <div className="row">
          <div className="col-1"></div>
          <div className="col-10">
            <form onSubmit={handleSearch} className="d-flex gap-3 mb-5">
              <input
                type="text"
                className="form-control search-box p-3"
                placeholder="Eg: How do I open my account, How do I activate F&O..."
              />

              <button className="btn btn-primary px-2" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SupportPortal;
