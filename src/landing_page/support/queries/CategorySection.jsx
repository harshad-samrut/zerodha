import { useState } from "react";
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
    if (activeCategory === index) {
      setActiveCategory(null);
    } else {
      setActiveCategory(index);
    }
  };

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-12">

          {categories.map((category, index) => (
            <div className="category-box mb-4" key={category.title}>

              {/* Header */}
              <button
                className="category-header"
                onClick={() => handleClick(index)}
              >
                {/* Icon */}
                <div className="category-icon">
                  <i className={category.icon}></i>
                </div>

                {/* Title */}
                <div className="category-title">
                  {category.title}
                </div>

                {/* Arrow */}
                <div className="category-arrow">
                  <i
                    className={
                      activeCategory === index
                        ? "fa-solid fa-chevron-up"
                        : "fa-solid fa-chevron-down"
                    }
                  ></i>
                </div>
              </button>

              {/* Content */}
              {activeCategory === index && (
                <div className="category-content">
                  <ul>
                    {category.items.map((item) => (
                      <li key={item}>
                        <a href="#">{item}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

            </div>
          ))}

        </div>
      </div>
    </div>
  );
}

export default CategorySection;