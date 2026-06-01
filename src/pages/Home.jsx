import React from 'react';

function Home() {
  return (
    <div style={styles.container}>
      <div style={styles.hero}>
        <h1 style={styles.title}>Roasted Bean Café</h1>
        <p style={styles.subtitle}>Freshly brewed coffee, crafted just for you.</p>
        <button style={styles.button}>Explore Menu</button>
      </div>
    </div>
  );
}

// Custom styles directly attached to your page to guarantee it looks beautiful!
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
  hero: {
    textAlign: 'center',
    backgroundColor: '#4a3b32',
    padding: '60px 40px',
    borderRadius: '12px',
    boxShadow: '0px 8px 16px rgba(0,0,0,0.1)',
    color: '#fff',
    maxWidth: '500px',
    width: '100%',
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '10px',
    color: '#f5e6d3',
  },
  subtitle: {
    fontSize: '1.2rem',
    marginBottom: '25px',
    color: '#dcd1c4',
  },
  button: {
    backgroundColor: '#be9b7b',
    color: '#fff',
    border: 'none',
    padding: '12px 30px',
    fontSize: '1rem',
    borderRadius: '25px',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: '0.3s',
  }
};

export default Home;