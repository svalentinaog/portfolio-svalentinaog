import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { changeLanguage } from "i18next";
import { useTranslation } from "react-i18next";
function App() {
  const [count, setCount] = useState(0);
  const [t, i18] = useTranslation();
  return (
    <>
      <div>
        <h2>{t("Welcome to React")}</h2>
        <button
          onClick={() => {
            changeLanguage("en");
          }}
        >
          EN
        </button>
        <button
          onClick={() => {
            changeLanguage("es");
          }}
        >
          ES
        </button>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + 👻 React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
