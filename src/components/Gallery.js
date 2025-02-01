import React from 'react';
import '../App.css';

const Gallery = () => {
  return (
    <section id="gallery" style={styles.gallery}>
      <div style={styles.overlay}>
        <h2 style={styles.title}>Our Gallery</h2>
        <p style={styles.subtitle}>Memories of Our Journey</p>
      </div>
    </section>
  );
};

const styles = {
  gallery: {
    height: '100vh', // Full height of the viewport
    backgroundImage: 'url("/images/cover2.jpg")',
    backgroundSize: 'cover', // Ensures the image covers the entire gallery section
    backgroundPosition: 'center center', // Centers the image within the section
    backgroundAttachment: 'fixed', // Adds a parallax scrolling effect (optional)
    position: 'relative',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    overflow: 'hidden', // Prevent any overflow outside the gallery section
  },
  
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)', // Dark overlay for better text contrast
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

export default Gallery;