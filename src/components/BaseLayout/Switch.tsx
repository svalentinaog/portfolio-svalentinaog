import React, { useState, useEffect } from 'react';

function Switch() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const storedMode = localStorage.getItem('darkMode');
      return storedMode === 'dark' ? 1 : 0;
    }
  });

  const [isSun, setIsSun] = useState(() => {
    if (typeof window !== 'undefined') {
      const storedMode = localStorage.getItem('darkMode');
      return storedMode === 'dark' ? true : false;
    }
    return true;
  });

  const toggleThemeAndImage = () => {
    setDarkMode((prevMode) => (prevMode === 0 ? 1 : 0));
    setIsSun((prevIsSun) => !prevIsSun);
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const text = darkMode === 0 ? 'light' : 'dark';
      localStorage.setItem('darkMode', text);
      localStorage.setItem('isSun', isSun.toString());

      const html = document.querySelector('html')!;
      html.setAttribute('data-bs-theme', text);
    }
  }, [darkMode, isSun]);

  return (
    <div className='theme-switch' onClick={toggleThemeAndImage}>
      {isSun ? (
        <img src="/images/sun.png" alt="Sun" />
      ) : (
        <img src="/images/moon.png" alt="Moon" />
      )}
    </div>
  );
}

export default Switch;
