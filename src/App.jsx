import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Order from "./pages/Order";
import Login from "./pages/Login";

function App() {
  // Global state to track logged-in users
  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      {/* Navbar receives login state and logout function */}
      <Navbar user={user} onLogout={() => setUser(null)} />
      
      {/* Top padding keeps fixed navbar from covering text */}
      <div style={{ paddingTop: "100px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/order" element={<Order />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login onLogin={(email) => setUser(email)} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;