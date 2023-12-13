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
      const storedIsSun = localStorage.getItem('isSun');
      return storedIsSun === 'true';
    }
    return true;
  });

  const toggleThemeAndImage = () => {
    // Cambiar el estado del modo oscuro :D
    setDarkMode((prevMode) => (prevMode === 0 ? 1 : 0));
    // y cambiar la imagen 
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

      {/* {isSun ? (
        <img src="/images/moon.png" alt="Sun" />
      ) : (
        <img src="/images/sun.png" alt="Moon" />
      )} */}
    </div>
  );
}

export default Switch;
