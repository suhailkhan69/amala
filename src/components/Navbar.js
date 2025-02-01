import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import '../App.css'; // Make sure the CSS is imported

const Navbar = () => {
  const [isScrolling, setIsScrolling] = useState(false);

  // Track scroll events to hide or show the navbar
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolling(true);
    } else {
      setIsScrolling(false);
    }
  };

  // Set up the scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav style={isScrolling ? styles.navbarHidden : styles.navbar}>
      <div className="main-logo" style={styles.logo}>A&A</div>
      {/* Uncomment the links if you want to include navigation */}
      {/* <ul style={styles.navLinks}>
        <li><Link to="story" smooth={true} duration={500}>Our Story</Link></li>
        <li><Link to="gallery" smooth={true} duration={500}>Our Gallery</Link></li>
        <li><Link to="bridesmaids" smooth={true} duration={500}>The Girls</Link></li>
        <li><Link to="bridesmen" smooth={true} duration={500}>The Guys</Link></li>
        <li><Link to="kids" smooth={true} duration={500}>The Kids</Link></li>
      </ul> */}
    </nav>
  );
};

const styles = {
  navbar: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'transparent',
    color: 'white',
    boxShadow: 'none',
    padding: '20px 50px',
    zIndex: 1000,
    display: 'flex',
    justifyContent: 'space-between', // Align items to left (logo) and right (links)
    alignItems: 'center', // Center items vertically
    transition: 'top 0.3s ease-in-out',
  },

  navbarHidden: {
    position: 'fixed',
    top: '-80px',
    left: 0,
    right: 0,
    backgroundColor: 'transparent',
    color: 'white',
    boxShadow: 'none',
    padding: '20px 50px',
    zIndex: 1000,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    transition: 'top 0.3s ease-in-out',
  },

  logo: {
    fontFamily: 'Dancing Script, cursive',
    fontSize: '40px',
    fontWeight: '600',
    color: 'white',
    marginLeft: '0', // Align logo to the left
  },

  // Uncomment this section if you plan to add navigation links
  navLinks: {
    listStyle: 'none',
    display: 'flex',
    gap: '20px',
    margin: 0,
    padding: 0,
  },
};

export default Navbar;
