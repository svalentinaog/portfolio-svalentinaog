import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '../context/ThemeContext';

function Switch() {
  const { darkMode, toggleTheme } = useTheme();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const text = darkMode === 0 ? 'light' : 'dark';
      localStorage.setItem('darkMode', text);

      const html = document.querySelector('html')!;
      html.setAttribute('data-bs-theme', text);
    }
  }, [darkMode]);

  return (
    <div className='theme-switch' onClick={toggleTheme}>
      {darkMode === 0 ? (
        <FontAwesomeIcon className='icon-switch moon' icon={faMoon} />
        ) : (
        <FontAwesomeIcon className='icon-switch sun' icon={faSun} />
      )}
    </div>
  );
}

export default Switch;
