import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Order from "./pages/Order";

function App() {
  return (
    <BrowserRouter>
      {/* The navigation bar stays at the top of every page */}
      <Navbar />
      
      {/* This container adds space at the top so the fixed navbar doesn't cover page content */}
      <div style={{ paddingTop: "80px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/order" element={<Order />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;