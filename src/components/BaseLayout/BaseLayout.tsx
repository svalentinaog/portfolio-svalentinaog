import React from 'react';
import { useState, useEffect } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import Bubbles from '../Bubbles';
import { useTheme } from '../context/ThemeContext';

export default function BaseLayout({ children }: { children: React.ReactNode }) {
  const [showButton, setShowButton] = useState(false);

  const { darkMode } = useTheme();

  const handleScroll = () => {
    if (typeof window !== 'undefined' && window.scrollY > 100) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div className="container-base-layout">
      <NavBar />
      <div className="my-content">{children}</div>
      {showButton && (
        <button
          className={`button-scroll-to-top ${showButton ? 'visible' : ''}`}
          onClick={scrollToTop}
        >
          {darkMode === 0 ? (
            <img src="images/abeeja.png" alt="scroll-to-top" />
          ) : (
            <img src="images/angry.png" alt="scroll-to-top" />
          )}
        </button>
      )}

      <Bubbles amount={7} />

      <Footer />
    </div>
  );
}


