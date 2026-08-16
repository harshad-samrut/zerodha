import React, { useState } from "react";
import "./ChargesSections.css";
import Equity from "./Equity";
import Currency from "./Currency";
import Commodity from "./Commodity";

function ChargesSections() {
  const [activeTab, setActiveTab] = useState("equity");

  return (
    <div className="container my-5">
      {/* Tabs */}
      <div className="charges-tabs offset-1 d-flex gap-5">
        <button
          className={activeTab === "equity" ? "active" : ""}
          onClick={() => setActiveTab("equity")}
        >
          Equity
        </button>

        <button
          className={activeTab === "currency" ? "active" : ""}
          onClick={() => setActiveTab("currency")}
        >
          Currency
        </button>

        <button
          className={activeTab === "commodity" ? "active" : ""}
          onClick={() => setActiveTab("commodity")}
        >
          Commodity
        </button>
      </div>

      {/* Content */}
      <div className="charges-table">
        {activeTab === "equity" && <Equity />}

        {activeTab === "currency" && <Currency />}

        {activeTab === "commodity" && <Commodity />}
      </div>
    </div>
  );
}
export default ChargesSections;
