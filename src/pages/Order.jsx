import React from 'react';

function Order() {
  const items = [
    { title: "Gold Label Espresso", price: "$6.00", desc: "Sourced from single-origin Ethiopian micro-lots with bright citrus accents." },
    { title: "Silk Cream Cappuccino", price: "$7.50", desc: "Double shot extraction paired with micro-foamed velvety macadamia milk." },
    { title: "Kyoto Cold Drip", price: "$8.00", desc: "Slow-extracted over ice for 18 hours, presenting deep wine-like chocolate complex profiles." }
  ];

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <span style={styles.tagline}>THE COLLECTION</span>
        <h2 style={styles.title}>Curate Your Brew</h2>
        
        <div style={styles.menuBox}>
          {items.map((item, index) => (
            <div key={index} style={styles.itemBlock}>
              <div style={styles.mainRow}>
                <span style={styles.itemTitle}>{item.title}</span> 
                <span style={styles.gold}>{item.price}</span>
              </div>
              <p style={styles.itemDesc}>{item.desc}</p>
            </div>
          ))}
        </div>

        <button style={styles.button}>RESERVE SELECTION</button>
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
    maxWidth: '650px',
    width: '100%',
    backgroundColor: '#231c18',
  },
  tagline: { fontSize: '0.75rem', letterSpacing: '4px', color: '#be9b7b', display: 'block', marginBottom: '10px' },
  title: { fontFamily: "'Playfair Display', serif", fontSize: '2.8rem', color: '#f5f0eb', fontWeight: '400', marginBottom: '30px' },
  menuBox: { textAlign: 'left', marginBottom: '35px' },
  itemBlock: { padding: '20px 0', borderBottom: '1px solid rgba(255,255,255,0.05)' },
  mainRow: { display: 'flex', justifyContent: 'space-between', marginBottom: '6px' },
  itemTitle: { color: '#f5f0eb', fontSize: '1.1rem', letterSpacing: '1px' },
  itemDesc: { color: '#be9b7b', fontSize: '0.85rem', lineHeight: '1.5', fontWeight: '300' },
  gold: { color: '#d4af37', fontWeight: '600', fontSize: '1.1rem' },
  button: { backgroundColor: 'transparent', color: '#d4af37', border: '1px solid #d4af37', padding: '15px 40px', fontSize: '0.85rem', letterSpacing: '2px', cursor: 'pointer', width: '100%', fontWeight: '600' }
};

export default Order;