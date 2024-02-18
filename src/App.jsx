import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import './styles/globalstyle.css'

const App = () => {
  return (
    <Router>
      
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
