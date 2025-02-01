import React from 'react';
import '../App.css';

const Hero = () => {
  return (
    <section style={styles.hero}>
      <div style={styles.overlay}>
        <h1 style={styles.title}>We Are Getting Married</h1>
        <p className="main-p" style={styles.subtitle}>09 February 2025</p>
      </div>
    </section>
  );
};

const styles = {
  hero: {
    height: '100vh', // Full height of the viewport
    backgroundImage: 'url("/images/cover1.jpg")',
    backgroundSize: 'cover', // Ensures the image covers the entire hero section
    backgroundPosition: 'center center', // Centers the image within the section
    backgroundAttachment: 'fixed', // Adds a parallax scrolling effect (optional)
    position: 'relative',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    overflow: 'hidden', // Prevent any overflow outside the hero section
  },
  
  overlay: {
    // backgroundColor: 'rgba(0, 0, 0, 0.4)', // Dark overlay for better text contrast
    padding: '20px',
    borderRadius: '8px',
    position: 'absolute',
    top: '20%', // Move the overlay down to push the text up
    left: '50%',
    transform: 'translateX(-50%)',
    textAlign: 'center',
  },
  
  title: {
    fontSize: '48px', // Title font size
    fontWeight: '700',
    color: 'white', // Make title text white
    margin: 0, // Remove default margin for better control
    lineHeight: '1.2',
  },
  
  subtitle: {
    fontSize: '30px',
    marginTop: '10px',
    fontWeight: '600',
    color: 'white', // Ensure the subtitle is also white
  },
};

export default Hero;
