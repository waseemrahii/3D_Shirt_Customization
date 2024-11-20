////

import React, { useState } from 'react';
import './ColorWheel.css';

const ColorWheel = ({ selectedColors, onColorClick }) => {
  const numColors = selectedColors.length;
  const angleStep = 360 / numColors;
  const [activeColor, setActiveColor] = useState(null);

  const getColorWheelStyle = () => ({
   
    background: `conic-gradient(${selectedColors.map(
      (color, index) => `${color} ${index * angleStep}deg, ${color} ${(index + 1) * angleStep}deg`
    ).join(', ')})`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  });

  const handleClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const angle = Math.atan2(y - centerY, x - centerX) * (180 / Math.PI);
    const normalizedAngle = (angle + 360) % 360;
    const segmentIndex = Math.floor(normalizedAngle / angleStep);

    setActiveColor(selectedColors[segmentIndex]);
    onColorClick(segmentIndex);
  };

  return (
    <div
      className="color-wheel-container"
      style={getColorWheelStyle()}
      onClick={handleClick}
    >

      <div
        className="inner-circle"
        style={{ backgroundColor: activeColor }}
      >
        <div className="center-circle">
          <span>Center Content</span>
        </div>
      </div>
    </div>
  );
};

export default ColorWheel;
