import React from 'react';

function Order() {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Place Your Order</h2>
        <p style={styles.text}>Select your favorite brew and pick it up hot!</p>
        <div style={styles.menuItem}>☕ Espresso — $3.50</div>
        <div style={styles.menuItem}>🥛 Latte — $4.50</div>
        <div style={styles.menuItem}>🧊 Cold Brew — $4.00</div>
        <button style={styles.button}>Confirm Order</button>
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
  menuItem: { backgroundColor: '#5c4a3e', padding: '10px', borderRadius: '6px', margin: '10px 0' },
  button: { backgroundColor: '#be9b7b', color: '#fff', border: 'none', padding: '12px 30px', fontSize: '1rem', borderRadius: '25px', cursor: 'pointer', fontWeight: 'bold', marginTop: '15px' }
};

export default Order;