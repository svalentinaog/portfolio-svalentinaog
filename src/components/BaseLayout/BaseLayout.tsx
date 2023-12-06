import { useState, useEffect } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

export default function BaseLayout({ children }: { children: React.ReactNode }) {
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="up-arrow"
            height="1.5rem"
            viewBox="0 0 512 512"
          >
            <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" />
          </svg>
        </button>
      )}
      <Footer />
    </div>
  );
}


