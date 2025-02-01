import React from 'react';
import '../App.css';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>&copy; 2024 Amala & Albin</p>
    </footer>
  );
};

const styles = {
  footer: {
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#333',
    color: 'white',
  }
};

export default Footer;
