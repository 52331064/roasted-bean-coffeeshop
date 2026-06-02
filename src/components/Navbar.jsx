import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ user, onLogout }) {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>☕ Roasted Bean</div>
      <div style={styles.linksContainer}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/about" style={styles.link}>About</Link>
        <Link to="/order" style={styles.link}>Order</Link>
        <Link to="/contact" style={styles.link}>Contact</Link>
        
        {user ? (
          <div style={styles.userSection}>
            <span style={styles.welcomeText}>Hello, Explorer</span>
            <button onClick={onLogout} style={styles.logoutBtn}>Logout</button>
          </div>
        ) : (
          <Link to="/login" style={styles.loginLink}>Member Login</Link>
        )}
      </div>
    </nav>
  );
}

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(26, 21, 18, 0.9)', 
    backdropFilter: 'blur(10px)', 
    padding: '20px 50px',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    borderBottom: '1px solid rgba(212, 175, 55, 0.15)', 
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
    alignItems: 'center',
    gap: '35px',
  },
  link: {
    color: '#dcd1c4',
    textDecoration: 'none',
    fontSize: '0.85rem',
    letterSpacing: '2px',
    fontWeight: '400',
    textTransform: 'uppercase',
  },
  loginLink: {
    color: '#d4af37',
    textDecoration: 'none',
    fontSize: '0.85rem',
    letterSpacing: '2px',
    fontWeight: '600',
    textTransform: 'uppercase',
    border: '1px solid #d4af37',
    padding: '8px 16px',
  },
  userSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px'
  },
  welcomeText: {
    color: '#be9b7b',
    fontSize: '0.85rem',
    letterSpacing: '1px'
  },
  logoutBtn: {
    backgroundColor: 'transparent',
    color: '#f5f0eb',
    border: '1px solid rgba(255,255,255,0.2)',
    padding: '6px 12px',
    fontSize: '0.8rem',
    cursor: 'pointer',
    letterSpacing: '1px'
  }
};

export default Navbar;