

// import React, { useState, useRef, useEffect } from 'react';
// import './CircularSlider.css'; // Import the CSS for styling

// const CircularSlider = ({ value, onChange, min, max, step, label, unit }) => {
//   const [angle, setAngle] = useState(((value - min) / (max - min)) * 360);
//   const radius = 80; // Radius of the circular slider
//   const center = radius;
//   const handleRef = useRef(null);
//   const isDragging = useRef(false);

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       if (isDragging.current) {
//         const rect = handleRef.current.getBoundingClientRect();
//         const x = e.clientX - rect.left - center;
//         const y = e.clientY - rect.top - center;
//         const newAngle = Math.atan2(y, x) * (180 / Math.PI) + 90; // Convert to degrees
//         const clampedAngle = (newAngle + 360) % 360;
//         const newValue = Math.round(((clampedAngle / 360) * (max - min)) + min);
//         onChange(newValue);
//         setAngle(clampedAngle);
//       }
//     };

//     const handleMouseUp = () => {
//       if (isDragging.current) {
//         isDragging.current = false;
//         document.removeEventListener('mousemove', handleMouseMove);
//         document.removeEventListener('mouseup', handleMouseUp);
//         // Snap to nearest step
//         const snappedValue = Math.round(value / step) * step;
//         onChange(snappedValue);
//         setAngle(((snappedValue - min) / (max - min)) * 360);
//       }
//     };

//     const handleMouseDown = () => {
//       isDragging.current = true;
//       document.addEventListener('mousemove', handleMouseMove);
//       document.addEventListener('mouseup', handleMouseUp);
//     };

//     handleRef.current.addEventListener('mousedown', handleMouseDown);

//     return () => {
//       handleRef.current.removeEventListener('mousedown', handleMouseDown);
//     };
//   }, [angle, max, min, onChange, step, value]);

//   const handleX = center + (radius - 10) * Math.cos((angle - 90) * (Math.PI / 180));
//   const handleY = center + (radius - 10) * Math.sin((angle - 90) * (Math.PI / 180));

//   return (
//     <div className="circular-slider d-flex g-4">
//       <div className="slider-label">{label}</div>
//       <div className="slider-wrapper">
//         <svg width={2 * radius} height={2 * radius}>
//           <circle
//             cx={center}
//             cy={center}
//             r={radius}
//             stroke="#ddd"
//             strokeWidth="10"
//             fill="#f5f5f5" // Gray background
//             className="background-circle"
//           />
//           <circle
//             cx={center}
//             cy={center}
//             r={radius}
//             stroke="#00f"
//             strokeWidth="10"
//             strokeDasharray={`${(angle / 360) * 2 * Math.PI * radius} ${(1 - angle / 360) * 2 * Math.PI * radius}`}
//             fill="none"
//             transform={`rotate(-90 ${center} ${center})`}
//           />
//         </svg>
//         <div
//           className="handle"
//           ref={handleRef}
//           style={{ left: `${handleX}px`, top: `${handleY}px`, transform: `translate(-50%, -50%)` }}
//         >
//           <div className="handle-inner">
//             {value}{unit}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CircularSlider;


// import React, { useEffect } from 'react';
// import CircularSlider from '@fseehawer/react-circular-slider';
// // import './CircularSliderComponent.css';

// const CircularSliderComponent = ({ value, onChange, min, max, label }) => {
//   useEffect(() => {
//     console.log('Rotation Value:', value);
//   }, [value]);

//   return (
//     <div className="circular-slider-container">
//       <label className="slider-label">{label}: {value}°</label>
//       <CircularSlider
//         min={min}
//         max={max}
//         value={value}
//         knobPosition="right"
//         appendToValue="°"
//         valueFontSize="4rem"
//         trackColor="#eeeeee"
//         trackDraggable={true}
//         continuous={{
//           enabled: true,
//           clicks: 100,
//           increment: 1,
//         }}
//         onChange={onChange}
//         knobColor="#005a58"
//         knobSize={72}
//         progressColorFrom="#00bfbd"
//         progressColorTo="#005a58"
//         progressSize={24}
//         trackSize={24}
//       >
//         <img
//           src="/images/icons8-power-off-button-80.png"
//           alt="Knob Icon"
//           className="knob-icon"
//           style={{ transform: `rotate(${value}deg)` }}
//         />
//       </CircularSlider>
//     </div>
//   );
// };

// export default CircularSliderComponent;



import React, { useEffect, useState } from 'react';
import CircularSlider from '@fseehawer/react-circular-slider';
import './CircularSliderComponent.css';

const CircularSliderComponent = ({ value, onChange, min, max, label }) => {
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    console.log('Rotation Value:', value);
  }, [value]);

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  return (
    <div
      className="circular-slider-container"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      <label className="slider-label">{label}: {value}°</label>
      <CircularSlider
        min={min}
        max={max}
        value={value}
        knobPosition="right"
        appendToValue="°"
        valueFontSize="4rem"
        trackColor="#eeeeee"
        trackDraggable={true}
        continuous={{
          enabled: true,
          clicks: 100,
          increment: 1,
        }}
        onChange={onChange}
        knobColor="#005a58"
        knobSize={72}
        progressColorFrom="#00bfbd"
        progressColorTo="#005a58"
        progressSize={24}
        trackSize={24}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      >
        <img
          src="/images/icons8-power-off-button-80.png"
          alt="Knob Icon"
          className="knob-icon"
          style={{ transform: `rotate(${value}deg)` }}
        />
      </CircularSlider>
    </div>
  );
};

export default CircularSliderComponent;
