import React from 'react';

const Bubbles = () => {
  const numBubbles = 10; // Número de burbujas 

  return (
    <>
      {Array.from({ length: numBubbles }).map((_, index) => (
        <div key={index} className="bubble" style={{ left: `${Math.random() * 100}vw` }} />
      ))}
    </>
  );
};

export default Bubbles;
