import React from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../context/ThemeContext';

export default function Footer() {
  const { darkMode } = useTheme();
  const [lg] = useTranslation();

  return (
    <footer className={`footer ${darkMode === 1 ? 'dark' : 'light'}`}>
      {darkMode === 0 ? (
        <img src="/images/panal.png" alt="isotipo" />
      ) : (
        <img src="/images/medusa2.png" alt="isotipo" />
      )}
      <p>{lg('footer')}</p>
    </footer>
  );
}
