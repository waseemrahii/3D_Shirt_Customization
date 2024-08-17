// import React from 'react';
// import { SketchPicker } from 'react-color';
// // import './ControlPanel.css';

// const ControlPanel = ({ setColor, setDesign }) => {
//   const handleColorChange = (color) => {
//     setColor(color.hex);
//   };

//   const handleTextChange = (e) => {
//     setDesign((prev) => ({ ...prev, text: e.target.value }));
//   };

//   const handleImageChange = (e) => {
//     if (e.target.files && e.target.files[0]) {
//       const reader = new FileReader();
//       reader.onload = (event) => {
//         setDesign((prev) => ({ ...prev, image: event.target.result }));
//       };
//       reader.readAsDataURL(e.target.files[0]);
//     }
//   };

//   return (
//     <div className="control-panel">
//       <h3>Customize Your T-Shirt</h3>
//       <div className="color-picker">
//         <SketchPicker onChange={handleColorChange} />
//       </div>
//       <div className="text-input">
//         <label>
//           Add Text:
//           <input type="text" onChange={handleTextChange} />
//         </label>
//       </div>
//       <div className="image-input">
//         <label>
//           Add Image:
//           <input type="file" accept="image/*" onChange={handleImageChange} />
//         </label>
//       </div>
//     </div>
//   );
// };

// export default ControlPanel;



const patterns = [
    { name: 'Stripes', url: 'path-to-stripes-pattern.png' },
    { name: 'Polka Dots', url: 'path-to-polka-dots-pattern.png' },
    // Add more patterns
  ];
  
  const applyPattern = (pattern) => {
    // Logic to apply the pattern
  };
  
  return (
    <div>
      <div className="control-panel">
        {patterns.map((pattern) => (
          <button key={pattern.name} onClick={() => applyPattern(pattern)}>
            <img src={pattern.url} alt={pattern.name} style={{ width: 50, height: 50 }} />
          </button>
        ))}
        {/* Other controls */}
      </div>
      {/* T-Shirt Canvas */}
    </div>
  );
  