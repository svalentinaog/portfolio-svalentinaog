import React from 'react';
import { useTranslation } from "react-i18next";
import { useTheme } from './context/ThemeContext';

export default function Start() {
  const [lg] = useTranslation();

  const { darkMode } = useTheme();

  return (
    <div id="section1" className={`container-start-home paddings ${darkMode === 1 ? 'dark' : 'light'}`}>
      <div className="text-content-start-home">
        <h1>{lg("start1")} </h1>
        <div>
          <h2>{lg("start2")} </h2>
          <p>{lg("start3")}</p>
        </div>
      </div>

      <div className="photo-start-home">
        {darkMode === 0 ? (
          <img className='custom-photo' src="images/image-start-light.png" alt="about" />
        ) : (
          <img className='custom-photo' src="images/developer.png" alt="about" />
        )}
      </div>
    </div>
  );
}

