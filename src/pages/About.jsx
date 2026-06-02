import React from 'react';

function About() {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <span style={styles.tagline}>OUR HERITAGE</span>
        <h2 style={styles.title}>The Craft</h2>
        <p style={styles.text}>
          Every single bean is chosen from elite micro-lots and roasted with architectural precision to balance complex flavor profiles. We live for the art of coffee.
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '80vh',
    backgroundColor: '#1a1512',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '40px 20px',
  },
  card: {
    textAlign: 'center',
    border: '1px solid rgba(212, 175, 55, 0.2)',
    padding: '50px 40px',
    maxWidth: '600px',
    backgroundColor: '#231c18',
  },
  tagline: { fontSize: '0.75rem', letterSpacing: '4px', color: '#be9b7b', display: 'block', marginBottom: '10px' },
  title: { fontFamily: "'Playfair Display', serif", fontSize: '2.8rem', color: '#f5f0eb', fontWeight: '400', marginBottom: '20px' },
  text: { fontSize: '1rem', lineHeight: '1.8', color: '#dcd1c4', fontWeight: '300' }
};

export default About;