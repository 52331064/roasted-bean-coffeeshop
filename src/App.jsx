import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Order from "./pages/Order";
import Login from "./pages/Login";

function App() {
  // Global state to track if a user is logged in
  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      {/* Pass user state and logout handler down to the navbar */}
      <Navbar user={user} onLogout={() => setUser(null)} />
      
      <div style={{ paddingTop: "100px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/order" element={<Order />} />
          <Route path="/contact" element={<Contact />} />
          {/* Pass the login login function down to the Login page */}
          <Route path="/login" element={<Login onLogin={(email) => setUser(email)} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;