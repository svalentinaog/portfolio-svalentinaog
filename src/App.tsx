// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
// import { changeLanguage } from "i18next";
// import { useTranslation } from "react-i18next";
// import { Parallax } from "react-scroll-parallax";
// import { ParallaxProvider } from "react-scroll-parallax";
// import { useSpring, animated } from "@react-spring/web";

// function App() {
//   const [count, setCount] = useState(0);
//   const [animationRight, setAnimationRight] = useState(false);
//   const [t] = useTranslation();

//   const [springs, api] = useSpring(() => ({
//     from: { x: 0 },
//   }));

//   const handleClick = () => {
//     if (animationRight) {
//       api.start({
//         from: {
//           x: 0,
//         },
//         to: {
//           x: 100,
//         },
//       });
//       setAnimationRight(false);
//     } else {
//       api.start({
//         from: {
//           x: 100,
//         },
//         to: {
//           x: 0,
//         },
//       });
//       setAnimationRight(true);
//     }
//   };

//   return (
//     <ParallaxProvider>
//       <Parallax translateX={["-100px", "200px"]}>
//         <animated.div
//           onClick={handleClick}
//           style={{
//             width: 80,
//             height: 80,
//             background: "#ff6d6d",
//             borderRadius: 8,
//             ...springs,
//           }}
//         />
//         <div>
//           <h2>{t("Welcome to React")}</h2>
//           <button
//             onClick={() => {
//               changeLanguage("en");
//             }}
//           >
//             EN
//           </button>
//           <button
//             onClick={() => {
//               changeLanguage("es");
//             }}
//           >
//             ES
//           </button>
//           <a href="https://vitejs.dev" target="_blank">
//             <img src={viteLogo} className="logo" alt="Vite logo" />
//           </a>
//           <a href="https://react.dev" target="_blank">
//             <img src={reactLogo} className="logo react" alt="React logo" />
//           </a>
//         </div>
//         <h1>Vite + 👻 React</h1>
//         <div className="card">
//           <button onClick={() => setCount((count) => count + 1)}>
//             count is {count}
//           </button>
//           <p>
//             Edit <code>src/App.tsx</code> and save to test HMR
//           </p>
//         </div>
//         <p className="read-the-docs">
//           Click on the Vite and React logos to learn more
//         </p>
//         <div
//           style={{
//             height: "200px",
//             width: "200px",
//             backgroundColor: "yellow",
//             margin: "20px",
//           }}
//         ></div>
//         <div
//           style={{
//             height: "200px",
//             width: "200px",
//             backgroundColor: "red",
//             margin: "20px",
//           }}
//         ></div>
//         <div
//           style={{
//             height: "200px",
//             width: "200px",
//             backgroundColor: "white",
//             margin: "20px",
//           }}
//         ></div>
//         <div
//           style={{
//             height: "200px",
//             width: "200px",
//             backgroundColor: "grey",
//             margin: "20px",
//           }}
//         ></div>
//         <div
//           style={{
//             height: "200px",
//             width: "200px",
//             backgroundColor: "green",
//             margin: "20px",
//           }}
//         ></div>
//       </Parallax>
//     </ParallaxProvider>
//   );
// }

// export default App;

//----------------------------------------------------------- //

import React from 'react';
import { Route, Routes } from "react-router-dom";
import './styles/globals.scss';
import Home from './pages/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
