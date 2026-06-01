import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h2>The Roasted Bean</h2>

      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/order">Order</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;