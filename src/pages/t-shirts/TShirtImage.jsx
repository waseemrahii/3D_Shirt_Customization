import React from 'react';

const TShirtImage = ({ color }) => {
  return (
    <div className="tshirt-container">
      <img src="/outerr.png" alt="T-Shirt" className="tshirt-base" style={{ backgroundColor: color }} />
    </div>
  );
};

export default TShirtImage;

