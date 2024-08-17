import React from 'react';
// import './TShirtPreview.css';

const TShirtPreview = ({ side, color, design }) => {
  return (
    <div className="tshirt-preview">
      {/* Placeholder for the t-shirt rendering */}
      <div
        className="tshirt"
        style={{ backgroundColor: color }}
      >
        <div className={`design-${side}`}>
          {design.image && <img src={design.image} alt="Design" />}
          {design.text && <p>{design.text}</p>}
        </div>
      </div>
    </div>
  );
};

export default TShirtPreview;
