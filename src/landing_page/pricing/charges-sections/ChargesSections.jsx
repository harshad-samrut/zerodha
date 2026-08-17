import React, { useState } from "react";
import "./ChargesSections.css";
import Equity from "./Equity";
import Currency from "./Currency";
import Commodity from "./Commodity";

function ChargesSections() {
  const [activeTab, setActiveTab] = useState("equity");

  return (
    <section className="container my-5 charges-tab-section">
      {/* Tabs */}
      <div className="row justify-content-center">
        <div className="col-12 col-lg-10">
          <div className="charges-tabs d-flex gap-4 border-bottom pb-2 mb-4">
            <button
              type="button"
              className={`tab-btn ${activeTab === "equity" ? "active" : ""}`}
              onClick={() => setActiveTab("equity")}
            >
              Equity
            </button>

            <button
              type="button"
              className={`tab-btn ${activeTab === "currency" ? "active" : ""}`}
              onClick={() => setActiveTab("currency")}
            >
              Currency
            </button>

            <button
              type="button"
              className={`tab-btn ${activeTab === "commodity" ? "active" : ""}`}
              onClick={() => setActiveTab("commodity")}
            >
              Commodity
            </button>
          </div>

          {/* Tab Tables */}
          <div className="charges-table">
            {activeTab === "equity" && <Equity />}
            {activeTab === "currency" && <Currency />}
            {activeTab === "commodity" && <Commodity />}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ChargesSections;