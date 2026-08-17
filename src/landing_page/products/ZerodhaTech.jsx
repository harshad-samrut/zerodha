import React from "react";
import "./Product.css";

function ZerodhaTech() {
  return (
    <section className="container text-center my-4 my-md-5 py-3">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10">
          <p className="tech-heading-text mb-0">
            Want to know more about our technology stack? Check out the{" "}
            <a 
              href="https://zerodha.tech/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="link"
            >
              Zerodha.tech
            </a>{" "}
            blog.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ZerodhaTech;