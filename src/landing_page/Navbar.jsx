import { useState } from "react";
import zerodhaImg from "../assets/logo.png";
import "./Navbar.css";
import { NavLink, Link } from "react-router-dom";
function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg p-1 border-bottom sticky-top"
      style={{ backgroundColor: "#fff" }}
    >
      <div className="container p-2">
        {/* Logo */}
        <Link className="navbar-brand offset-1" to="/">
          <img src={zerodhaImg} alt="Zerodha logo" width="130" />
        </Link>

        {/* Mobile menu button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation links */}
        <div
          className="collapse navbar-collapse justify-content-end fw-semibold text-center"
          id="navbarNav"
        >
          <ul
            className="navbar-nav gap-4 me-5 fw-normal text-center"
            id="small-text"
          >
            <li className="nav-item ">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                to="/signup"
              >
                Signup
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                to="/about"
              >
                About
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                to="/product"
              >
                Products
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                to="/pricing"
              >
                Pricing
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                to="/support"
              >
                Support
              </NavLink>
            </li>

            <li className="nav-item">
              <Link className="nav-link me-5 fs-5" to="/menu">
                <i className="fa-solid fa-bars"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
