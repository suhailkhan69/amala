import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Section from './components/Section';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Counter from './components/Counter';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './App.css';

function App() {
  return (
    <div>
       <Counter />
      <Navbar />
      <Hero />
     
      <Section id="story" title="Our Story">
       
      </Section>
    
      <Section id="gallery" title="Our Gallery">
        
      </Section>
      <Gallery />
      <Section id="bridesmaids" title="The Girls">
        
      </Section>
      <Section id="bridesmen" title="The Guys">
       
      </Section>
      <Section id="kids" title="The Kids">
        
      </Section>
      <Footer />
    </div>
  );
}

export default App;
