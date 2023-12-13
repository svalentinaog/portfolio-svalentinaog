import React from 'react';
import { useTranslation } from "react-i18next";

export default function Entry() {
  const [lg] = useTranslation();

  return (
    <div className="container-entry-home">
      <div className="text-content-entry-home">
        <h1>{lg("entrada1")} </h1>
        <div>
          <h2>{lg("entrada2")} </h2>
          <p>{lg("entrada3")}</p>
        </div>
      </div>

      <div className="photo-entry-home">
        <img className='custom-photo' src="images/developer.png" alt="about" />
      </div>
    </div>
  );
}
