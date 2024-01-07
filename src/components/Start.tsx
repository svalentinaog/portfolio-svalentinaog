import React from 'react';
import { useTranslation } from "react-i18next";

export default function Start() {
  const [lg] = useTranslation();

  return (
    <div id="section1" className="container-start-home">
      <div className="text-content-start-home">
        <h1>{lg("entrada1")} </h1>
        <div>
          <h2>{lg("entrada2")} </h2>
          <p>{lg("entrada3")}</p>
        </div>
      </div>

      <div className="photo-start-home">
        <img className='custom-photo' src="images/developer.png" alt="about" />
      </div>
    </div>
  );
}
