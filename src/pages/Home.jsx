import React from 'react';

function Home() {
  return (
    <div style={styles.heroContainer}>
      {/* Dark overlay to give a dramatic, high-end cinematic feel */}
      <div style={styles.overlay}></div>

      <div style={styles.content}>
        <span style={styles.tagline}>ESTABLISHED 2026</span>
        <h1 style={styles.title}>Roasted Bean</h1>
        <p style={styles.subtitle}>
          An exceptional sensory journey crafted from the world’s finest, sustainably sourced micro-lots.
        </p>
        <button 
          style={styles.button}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = '#f5f0eb';
            e.target.style.color = '#1a1512';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'transparent';
            e.target.style.color = '#d4af37';
          }}
        >
          EXPLORE THE EXPERIENCE
        </button>
      </div>
    </div>
  );
}

const styles = {
  heroContainer: {
    height: '100vh',
    width: '100vw',
    // Luxury dark moody coffee beans background image
    backgroundImage: `url('https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=1600&auto=format&fit=crop')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: '0 20px',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(16, 12, 10, 0.65)', /* Moody vignette shader */
    zIndex: 1,
  },
  content: {
    position: 'relative',
    zIndex: 2,
    maxWidth: '700px',
  },
  tagline: {
    fontFamily: "'Montserrat', sans-serif",
    fontSize: '0.85rem',
    letterSpacing: '6px',
    color: '#be9b7b', /* Soft muted bronze */
    fontWeight: '600',
    display: 'block',
    removeAttribute: '15px',
    marginBottom: '15px'
  },
  title: {
    fontFamily: "'Playfair Display', serif",
    fontSize: '4.5rem',
    fontWeight: '400',
    color: '#f5f0eb', /* Premium ivory white */
    letterSpacing: '2px',
    marginBottom: '20px',
  },
  subtitle: {
    fontFamily: "'Montserrat', sans-serif",
    fontSize: '1.1rem',
    lineHeight: '1.8',
    color: '#dcd1c4', /* Silk cream text */
    fontWeight: '300',
    letterSpacing: '1px',
    marginBottom: '40px',
  },
  button: {
    backgroundColor: 'transparent',
    color: '#d4af37', /* Gold metallic text accent color */
    border: '1px solid #d4af37',
    padding: '15px 40px',
    fontSize: '0.9rem',
    letterSpacing: '3px',
    fontWeight: '600',
    cursor: 'pointer',
    borderRadius: '0px', /* Sharp, architectural luxury edges look better than round bubbles */
  }
};

export default Home;