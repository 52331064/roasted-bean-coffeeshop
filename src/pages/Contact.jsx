import React from 'react';

function Contact() {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <span style={styles.tagline}>RESERVATIONS & INQUIRIES</span>
        <h2 style={styles.title}>Connect With Us</h2>
        <p style={styles.text}>Experience luxury brewing firsthand at our boutique roastery.</p>
        <div style={styles.info}>📍 123 Atelier Boulevard, Suite Luxury</div>
        <div style={styles.info}>📞 +1 (800) 555-BEAN</div>
        <div style={styles.info}>✉️ concierge@roastedbean.com</div>
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
  title: { fontFamily: "'Playfair Display', serif", fontSize: '2.8rem', color: '#f5f0eb', fontWeight: '400', marginBottom: '25px' },
  text: { fontSize: '1rem', color: '#dcd1c4', marginBottom: '30px', fontWeight: '300' },
  info: { fontSize: '0.95rem', margin: '12px 0', color: '#f5f0eb', letterSpacing: '1px' }
};

export default Contact;