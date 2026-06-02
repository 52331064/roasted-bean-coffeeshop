import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      onLogin(email);
      navigate('/'); // Redirect back home on successful logic entry
    } else {
      alert('Please enter your boutique member credentials.');
    }
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.card}>
        <span style={styles.tagline}>ROASTED BEAN CONCIERGE</span>
        <h2 style={styles.title}>Member Portal</h2>
        
        <div style={styles.inputGroup}>
          <label style={styles.label}>EMAIL ADDRESS</label>
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input} 
            placeholder="name@luxury.com"
            required
          />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>PASSWORD</label>
          <input 
            type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input} 
            placeholder="••••••••"
            required
          />
        </div>

        <button type="submit" style={styles.button}>SIGN IN TO EXPERIENCE</button>
      </form>
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
    border: '1px solid rgba(212, 175, 55, 0.2)',
    padding: '50px 40px',
    maxWidth: '450px',
    width: '100%',
    backgroundColor: '#231c18',
    textAlign: 'center'
  },
  tagline: { fontSize: '0.75rem', letterSpacing: '4px', color: '#be9b7b', display: 'block', marginBottom: '10px' },
  title: { fontFamily: "'Playfair Display', serif", fontSize: '2.5rem', color: '#f5f0eb', fontWeight: '400', marginBottom: '35px' },
  inputGroup: { textAlign: 'left', marginBottom: '25px' },
  label: { fontSize: '0.75rem', color: '#be9b7b', letterSpacing: '2px', display: 'block', marginBottom: '8px', fontWeight: '600' },
  input: {
    width: '100%',
    backgroundColor: '#1a1512',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    padding: '12px 15px',
    color: '#f5f0eb',
    fontSize: '0.95rem',
    fontFamily: "'Montserrat', sans-serif",
    outline: 'none',
  },
  button: { 
    backgroundColor: 'transparent', 
    color: '#d4af37', 
    border: '1px solid #d4af37', 
    padding: '15px 40px', 
    fontSize: '0.85rem', 
    letterSpacing: '2px', 
    cursor: 'pointer', 
    width: '100%',
    fontWeight: '600',
    marginTop: '10px'
  }
};

export default Login;