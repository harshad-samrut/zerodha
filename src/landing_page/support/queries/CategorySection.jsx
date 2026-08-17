import React, { useState } from "react";
import "./CategorySection.css";

const categories = [
  {
    title: "Account Opening",
    icon: "fa-solid fa-circle-plus",
    items: [
      "Resident individual",
      "Minor",
      "Non Resident Indian (NRI)",
      "Company, Partnership, HUF and LLP",
      "Glossary",
    ],
  },
  {
    title: "Your Zerodha Account",
    icon: "fa-regular fa-circle-user",
    items: [
      "Your Profile",
      "Account modification",
      "Client Master Report (CMR) and Depository Participant (DP)",
      "Nomination",
      "Transfer and conversion of securities",
    ],
  },
  {
    title: "Kite",
    icon: "fa-regular fa-circle",
    items: [
      "IPO",
      "Trading FAQs",
      "Margin Trading Facility (MTF) and Margins",
      "Charts and orders",
      "Alerts and Nudges",
      "General",
    ],
  },
  {
    title: "Funds",
    icon: "fa-regular fa-circle",
    items: [
      "Add money",
      "Withdraw money",
      "Add bank accounts",
      "eMandates",
    ],
  },
  {
    title: "Console",
    icon: "fa-regular fa-circle",
    items: [
      "Portfolio",
      "Corporate actions",
      "Funds statement",
      "Reports",
      "Profile",
      "Segments",
    ],
  },
  {
    title: "Coin",
    icon: "fa-solid fa-cent-sign",
    items: [
      "Mutual funds",
      "National Pension Scheme (NPS)",
      "Fixed Deposit (FD)",
      "Features on Coin",
      "Payments and Orders",
      "General",
    ],
  },
];

function CategorySection() {
  const [activeCategory, setActiveCategory] = useState(null);

  const handleClick = (index) => {
    setActiveCategory(activeCategory === index ? null : index);
  };

  return (
    <div className="category-list">
      {categories.map((category, index) => {
        const isOpen = activeCategory === index;
        return (
          <div className="category-box mb-3" key={category.title}>
            {/* Accordion Header */}
            <button
              type="button"
              className="category-header"
              onClick={() => handleClick(index)}
              aria-expanded={isOpen}
            >
              <div className="category-icon">
                <i className={category.icon}></i>
              </div>

              <div className="category-title">
                {category.title}
              </div>

              <div className="category-arrow">
                <i
                  className={`fa-solid ${
                    isOpen ? "fa-chevron-up" : "fa-chevron-down"
                  }`}
                ></i>
              </div>
            </button>

            {/* Accordion Content */}
            {isOpen && (
              <div className="category-content">
                <ul>
                  {category.items.map((item) => (
                    <li key={item}>
                      <a href="#" className="category-item-link">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default CategorySection;