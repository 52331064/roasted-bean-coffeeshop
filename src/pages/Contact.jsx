import React from 'react';

function Contact() {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Contact Us</h2>
        <p style={styles.text}>We'd love to hear from you! Drop by or reach out online.</p>
        <p style={styles.info}>📍 123 Coffee Lane, Brew City</p>
        <p style={styles.info}>📞 +123 456 789</p>
        <p style={styles.info}>✉️ support@roastedbean.com</p>
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
  text: { fontSize: '1.1rem', marginBottom: '20px', color: '#dcd1c4' },
  info: { fontSize: '1rem', margin: '10px 0', color: '#fff' }
};

export default Contact;