import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./landing_page/ScrollToTop.jsx";

import HomePage from "./landing_page/home/HomePage.jsx";
import Navbar from "./landing_page/Navbar.jsx";
import Footer from "./landing_page/Footer.jsx";
import PageNotFound from "./landing_page/NotFount.jsx";
import AboutPage from "./landing_page/about/AboutPage.jsx";
import ProductPage from "./landing_page/products/ProudctPage.jsx";
import Pricing from "./landing_page/pricing/PricingPage.jsx";
import Support from "./landing_page/support/SupportPage.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ScrollToTop />
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/support" element={<Support />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
    <Footer />
  </BrowserRouter>,
);
