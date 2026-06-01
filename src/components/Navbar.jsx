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
    backgroundColor: 'rgba(26, 21, 18, 0.85)', /* Glassmorphism background */
    backdropFilter: 'blur(10px)', /* Premium blur effect */
    padding: '20px 50px',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    borderBottom: '1px solid rgba(212, 175, 55, 0.15)', /* Thin gold bottom line */
    fontFamily: "'Montserrat', sans-serif"
  },
  logo: {
    color: '#f5f0eb',
    fontSize: '1.3rem',
    fontFamily: "'Playfair Display', serif",
    letterSpacing: '2px',
  },
  linksContainer: {
    display: 'flex',
    gap: '35px',
  },
  link: {
    color: '#dcd1c4',
    textDecoration: 'none',
    fontSize: '0.85rem',
    letterSpacing: '2px',
    fontWeight: '400',
    textTransform: 'uppercase', /* Clean upper layout look */
  }
};