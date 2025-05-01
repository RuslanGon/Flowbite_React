import React from "react";
import Navbar from "./components/Navbar.jsx";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ServicesPage from "./pages/ ServicesPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import OptionPage from "./pages/OptionPage.jsx";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/option" element={<OptionPage />} />
      </Routes>
    </>
  );
};

export default App;
