import React from 'react';

interface BubblesProps {
  amount: number;
}

const Bubbles: React.FC<BubblesProps> = ({ amount }) => {
  const bubbles = Array.from({ length: amount }, (_, index) => (
    <div key={index}></div>
  ));

  return (
    <div className="bubbles">
      {bubbles}
    </div>
  );
};

export default Bubbles;
