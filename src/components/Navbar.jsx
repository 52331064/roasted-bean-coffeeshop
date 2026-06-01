import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>☕ Roasted Bean</div>
      <div style={styles.linksContainer}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/about" style={styles.link}>About</Link>
        <Link to="/order" style={styles.link}>Order</Link>
        <Link to="/contact" style={styles.link}>Contact</Link>
      </div>
    </nav>
  );
}

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#4a3b32',
    padding: '15px 30px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    fontFamily: 'Arial, sans-serif'
  },
  logo: {
    color: '#f5e6d3',
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  linksContainer: {
    display: 'flex',
    gap: '20px',
  },
  link: {
    color: '#dcd1c4',
    textDecoration: 'none',
    fontSize: '1rem',
    fontWeight: '500',
    transition: '0.3s',
  }
};

export default Navbar;