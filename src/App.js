import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Section from './components/Section';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Counter from './components/Counter';
import OurStory from './components/OurStory';
import TeamSection from './components/TeamSection'; // Import the TeamSection component
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './App.css';

function App() {
  // Data for The Girls section
  const girls = [
    {
      name: 'Athira Rajan',
     
      image: '/images/nate.jpg', // Replace with actual image path
    },
    {
      name: 'Athira CG',
      
      image: '/images/athira.jpg', // Replace with actual image path
    },
    {
      name: "Maria Angel Shony",
     
      image: '/images/maria.jpg', // Replace with actual image path
    },
    {
      name: 'Anu',
      
      image: '/images/girl4.jpg', // Replace with actual image path
    },
    {
      name: 'Jomol Joseph',
      
      image: '/images/jomol.jpg', // Replace with actual image path
    },
    {
      name: 'Aleena C R',
     
      image: '/images/girl6.jpg', // Replace with actual image path
    },
  ];

  // Data for The Guys section
  const guys = [
    {
      name: 'Polson',
      
      image: '/images/polson.jpg', // Replace with actual image path
    },
    {
      name: 'Suhail Khan',
      
      image: '/images/suhail.jpg', // Replace with actual image path
    },
    {
      name: 'Gokul Krishna S G',
      
      image: '/images/gokul.jpg', // Replace with actual image path
    },
    {
      name: 'Benjith P J',
      
      image: '/images/benith.jpg', // Replace with actual image path
    },
    {
      name: 'Achachan',
      
      image: '/images/guy5.jpg', // Replace with actual image path
    },
    {
      name: 'Renjith',
      
      image: '/images/renjith.jpg', // Replace with actual image path
    },
  ];

  // Data for The Kids section
  const kids = [
    {
      name: 'Thommu',
      
      image: '/images/kid1.jpg', // Replace with actual image path
    },
    {
      name: 'Ishalu',
      
      image: '/images/kid2.jpg', // Replace with actual image path
    },
    
  ];

  return (
    <div>
      {/* <Counter /> */}
      <Navbar />
      <Hero />
      <OurStory />
      <Gallery />
      <TeamSection id="bridesmaids" title="The Girls" members={girls} />
      <TeamSection id="bridesmen" title="The Guys" members={guys} />
      <TeamSection id="kids" title="The Kids" members={kids} />
      <Footer />
    </div>
  );
}

export default App;