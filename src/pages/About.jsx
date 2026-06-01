import React from 'react';

function About() {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Our Story</h2>
        <p style={styles.text}>
          Founded with a passion for exceptional beans, Roasted Bean Café brings premium, sustainably sourced coffee to your cup. Every batch is roasted to perfection to ensure a rich, aromatic experience.
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#fdfaf6',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
  },
  card: {
    textAlign: 'center',
    backgroundColor: '#4a3b32',
    padding: '40px',
    borderRadius: '12px',
    color: '#fff',
    maxWidth: '500px',
    width: '100%',
    boxShadow: '0px 8px 16px rgba(0,0,0,0.1)',
  },
  title: { fontSize: '2.2rem', marginBottom: '15px', color: '#f5e6d3' },
  text: { fontSize: '1.1rem', lineHeight: '1.6', color: '#dcd1c4' }
};

export default About;