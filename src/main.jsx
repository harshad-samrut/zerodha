import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./landing_page/home/HomePage.jsx";
import Navbar from "./landing_page/Navbar.jsx";
import Footer from "./landing_page/Footer.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<HomePage />} />
      <Route path="/about" element={<HomePage />} />
      <Route path="/products" element={<HomePage />} />
      <Route path="/pricing" element={<HomePage />} />
      <Route path="/support" element={<HomePage />} />
    </Routes>
    <Footer />
  </BrowserRouter>,
);
