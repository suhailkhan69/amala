import React, { useState, useEffect } from 'react';
import '../App.css'; // Ensure you import the CSS file

const Counter = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date('2025-02-09T00:00:00'); // Target date
    const now = new Date();
    const difference = targetDate - now;

    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [isScrolled, setIsScrolled] = useState(false); // Track scroll position

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight / 2); // Detect when user scrolls past the Hero section
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`counter ${isScrolled ? 'scrolled' : ''}`}>
      <div className="time">
        <span>{timeLeft.days || 0} Days</span> : <span>{timeLeft.hours || 0} Hours</span> :{' '}
        <span>{timeLeft.minutes || 0} Minutes</span> : <span>{timeLeft.seconds || 0} Seconds</span>
      </div>
    </div>
  );
};

export default Counter;