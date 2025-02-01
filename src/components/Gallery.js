// Gallery.js
import React from 'react';
import '../App.css'; // Import your styles if available

const Gallery = () => {
  return (
    <section id="gallery" style={styles.gallery}>
      <div style={styles.galleryGrid}>
        <img src="https://via.placeholder.com/600x400" alt="Gallery Image 1" style={styles.image} />
        <img src="https://via.placeholder.com/400x600" alt="Gallery Image 2" style={styles.image} />
        <img src="https://via.placeholder.com/600x400" alt="Gallery Image 3" style={styles.image} />
        <img src="https://via.placeholder.com/400x400" alt="Gallery Image 4" style={styles.image} />
        <img src="https://via.placeholder.com/400x600" alt="Gallery Image 5" style={styles.image} />
        <img src="https://via.placeholder.com/600x400" alt="Gallery Image 6" style={styles.image} />
      </div>
    </section>
  );
};

const styles = {
  gallery: {
    padding: '40px 20px',
    textAlign: 'center',
    backgroundColor: '#f4f4f4',
  },
  galleryGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(6, 1fr)', // Ensure a responsive layout
    gridTemplateAreas: `
      "a a b b c c"
      "a a b b c c"
      "d e e f f f"
    `,
    
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease',
    gridColumnStart: "Depending recreates balance normal",
    // Define how specific images span across rows and columns
    gridArea: 'auto',
    cursor: 'pointer',
    transform: 'scale(1)',
  },
};

export default Gallery;
