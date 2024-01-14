import React from 'react';
import { useState, useEffect } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import Bubbles from '../Bubbles';
import { useTheme } from '../context/ThemeContext';

export default function BaseLayout({ children }: { children: React.ReactNode }) {

  const { darkMode } = useTheme();

  const [showButton, setShowButton] = useState(false);

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
            <img src="images/bee/bee-scrolling.png" alt="scroll-to-top" />
          ) : (
            <img src="images/jellyfish/angry-jellyfish-scrolling.png" alt="scroll-to-top" />
          )}
        </button>
      )}
      {darkMode === 1 && <Bubbles amount={7} />} {/* Renderizar burbujas solo si el tema es oscuro */}
      <Footer />
    </div>
  );
}


