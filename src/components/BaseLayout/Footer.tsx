import React from 'react';
import { useTranslation } from "react-i18next";

export default function Footer() {
  const [lg] = useTranslation();

  return (
    <footer className="footer">
        <img
          src="/images/medusa2.png"
          alt="isotipo"
        />
      <p>{lg("footer")}</p>
    </footer>
  );
}
