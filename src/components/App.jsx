import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Products from "./productpage/Products";
import Contact from "./Contact";
import Header from "./Header";
import HomeLogin from "./LoginFrom/HomeLogin";
import Footer from "./Footer";
import ErrorPage from "./ErrorPage";
import SingleProduct from "./productpage/SingleProduct/SingleProduct";


import "../styles/globalstyle.css";


const App = () => {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<HomeLogin />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        
  
        <Route path="*" element={<ErrorPage />} />

      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
