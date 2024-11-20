
////////////////// corrrect fort and 
// import React, { useState, useEffect } from 'react';
// import { SketchPicker } from 'react-color';
// import RangeSlider from './RangeSlider'; // Import the RangeSlider component
// import * as THREE from 'three';
// import '@fontsource/roboto'; 
// import '@fontsource/lora'; 
// import '@fontsource/open-sans'; 
// import './AddTextForm.css'; // Import the CSS file
// import CircularSlider from './CircularSlider';

// const AddTextForm = ({ currentMaterials, setCurrentMaterials, uniqueTitles, activeView, onClose }) => {
//   const [text, setText] = useState('');
//   const [fontSize, setFontSize] = useState(80);
//   const [position, setPosition] = useState({ x: 512, y: 512 });
//   const [textColor, setTextColor] = useState('#FFFFFF');
//   const [fontFamily, setFontFamily] = useState('Roboto');
//   const [textRotation, setTextRotation] = useState(0);
//   const [letterSpacing, setLetterSpacing] = useState(0);
//   const [lineHeight, setLineHeight] = useState(1.2);
//   const [border, setBorder] = useState(false);
//   const [borderColor, setBorderColor] = useState('#000000');
//   const [borderWidth, setBorderWidth] = useState(5);
//   const [shadow, setShadow] = useState(false);
//   const [shadowColor, setShadowColor] = useState('#000000');
//   const [shadowBlur, setShadowBlur] = useState(10);
//   const [stroke, setStroke] = useState(false);
//   const [strokeColor, setStrokeColor] = useState('#000000');
//   const [strokeWidth, setStrokeWidth] = useState(5);

//   const isValidHex = (hex) => /^#[0-9A-F]{6}$/i.test(hex);

//   const updateMaterialTexture = () => {
//     const currentMaterial = currentMaterials.find(mat => mat.title === uniqueTitles[activeView]);
//     if (!currentMaterial) return;

//     let validColor = isValidHex(currentMaterial.color) ? currentMaterial.color : '#FFFFFF';

//     const canvas = document.createElement('canvas');
//     canvas.width = 1024;
//     canvas.height = 1024;
//     const ctx = canvas.getContext('2d');

//     ctx.fillStyle = validColor;
//     ctx.fillRect(0, 0, canvas.width, canvas.height);

//     ctx.font = `bold ${fontSize}px ${fontFamily}`;
//     ctx.fillStyle = textColor;
//     ctx.textAlign = 'center';
//     ctx.textBaseline = 'middle';
//     ctx.letterSpacing = `${letterSpacing}px`;
//     ctx.lineHeight = lineHeight;

//     // Save the current state
//     ctx.save();

//     // Apply position, rotation, and other transformations
//     ctx.translate(position.x, position.y);
//     ctx.rotate(textRotation * Math.PI / 180);

//     // Draw the border (stroke) first
//     if (border) {
//       ctx.strokeStyle = borderColor;
//       ctx.lineWidth = borderWidth;
//       ctx.strokeText(text, 0, 0);
//     }

//     // Draw the shadow
//     if (shadow) {
//       ctx.shadowColor = shadowColor;
//       ctx.shadowBlur = shadowBlur;
//       ctx.shadowOffsetX = shadowBlur / 2;
//       ctx.shadowOffsetY = shadowBlur / 2;
//     }

//     // Draw the stroke (if enabled)
//     if (stroke) {
//       ctx.lineWidth = strokeWidth;
//       ctx.strokeStyle = strokeColor;
//       ctx.strokeText(text, 0, 0);
//     }

//     // Draw the text
//     ctx.fillText(text, 0, 0);

//     // Restore the state to undo transformations
//     ctx.restore();

//     const texture = new THREE.CanvasTexture(canvas);
//     texture.needsUpdate = true;

//     const updatedMaterial = {
//       ...currentMaterial,
//       map: texture,
//       needsUpdate: true,
//     };

//     if (currentMaterial.map) currentMaterial.map.dispose();
//     currentMaterial.map = texture;
//     currentMaterial.needsUpdate = true;

//     setCurrentMaterials(prevMaterials =>
//       prevMaterials.map(mat =>
//         mat.title === uniqueTitles[activeView] ? updatedMaterial : mat
//       )
//     );
//   };

//   useEffect(() => {
//     updateMaterialTexture();
//   }, [text, fontSize, textColor, fontFamily, position, textRotation, shadow, shadowColor, shadowBlur, stroke, strokeColor, strokeWidth, border, borderColor, borderWidth, letterSpacing, lineHeight]);

//   const handleAddText = () => {
//     updateMaterialTexture();
//     onClose();
//   };


//   return (
//     <div className="text-options">
//       <h4>Add Text</h4>
//       <div className="form-group d-flex g-3">
//         <label style={{width:"50%"}}>Text:</label>
//         <input
//           type="text"
//           value={text}
//           onChange={(e) => setText(e.target.value)}
//           className="text-input"
//         />
//       </div>
    
//       <div className="form-group">
//         <RangeSlider 
//           value={fontSize} 
//           onChange={setFontSize} 
//           min={10} 
//           max={150} 
//           step={1} 
//           label="Font Size" 
//           unit="px" 
//         />
//       </div>


//       <div className="form-group d-flex g-3">
//         <label style={{width:"50%"}} >Font Family:</label>
//         <select
//           value={fontFamily}
//           onChange={(e) => setFontFamily(e.target.value)}
//           className="font-select"
//         >
//           <option value="Roboto">Roboto</option>
//           <option value="Lora">Lora</option>
//           <option value="Open Sans">Open Sans</option>
//           <option value="Arial">Arial</option>
//           <option value="Georgia">Georgia</option>
//           <option value="Times New Roman">Times New Roman</option>
//           <option value="Courier New">Courier New</option>
//           <option value="Verdana">Verdana</option>
//         </select>
//       </div>

//       <div className="form-group">
//         <RangeSlider 
//           value={position.x} 
//           onChange={(value) => setPosition(prev => ({ ...prev, x: value }))} 
//           min={0} 
//           max={1024} 
//           step={1} 
//           label="Position X" 
//           unit="px" 
//         />
//       </div>

//       <div className="form-group">
//         <RangeSlider 
//           value={position.y} 
//           onChange={(value) => setPosition(prev => ({ ...prev, y: value }))} 
//           min={0} 
//           max={1024} 
//           step={1} 
//           label="Position Y" 
//           unit="px" 
//         />
//       </div>

//       <div className="form-group">
//         {/* <RangeSlider 
//           value={textRotation} 
//           onChange={setTextRotation} 
//           min={0} 
//           max={360} 
//           step={1} 
//           label="Rotation" 
//           unit="°" 
//         /> */}

// <CircularSlider
//           value={textRotation} 
//           onChange={setTextRotation} 
//           min={0} 
//           max={360} 
//           step={1} 
//           label="Rotation" 
//           unit="°" 
//         />
//       </div>

//       <div className="form-group">
//         <RangeSlider 
//           value={letterSpacing} 
//           onChange={setLetterSpacing} 
//           min={-10} 
//           max={30} 
//           step={1} 
//           label="Letter Spacing" 
//           unit="px" 
//         />
//       </div>

//       <div className="form-group">
//         <RangeSlider 
//           value={lineHeight} 
//           onChange={setLineHeight} 
//           min={1} 
//           max={3} 
//           step={0.1} 
//           label="Line Height" 
//           unit="" 
//         />
//       </div>
//       <div className="form-group flex">
//         <label>Text Color:</label>
//         <SketchPicker
//           color={textColor}
//           onChange={(color) => setTextColor(color.hex)}
//           className="color-picker"
//         />
//       </div>

//       <div className="form-group">
//         <label>Border:</label>
//         <input
//           type="checkbox"
//           checked={border}
//           onChange={(e) => setBorder(e.target.checked)}
//         />
//       </div>
//       {border && (
//         <div className="form-group">
//           <label>Border Color:</label>
//           <SketchPicker
//             color={borderColor}
//             onChange={(color) => setBorderColor(color.hex)}
//             className="color-picker"
//           />
//           <RangeSlider 
//             value={borderWidth} 
//             onChange={setBorderWidth} 
//             min={1} 
//             max={20} 
//             step={1} 
//             label="Border Width" 
//             unit="px" 
//           />
//         </div>
//       )}

//       <div className="form-group">
//         <label>Shadow:</label>
//         <input
//           type="checkbox"
//           checked={shadow}
//           onChange={(e) => setShadow(e.target.checked)}
//         />
//       </div>
//       {shadow && (
//         <div className="form-group">
//           <label>Shadow Color:</label>
//           <SketchPicker
//             color={shadowColor}
//             onChange={(color) => setShadowColor(color.hex)}
//             className="color-picker"
//           />
//           <RangeSlider 
//             value={shadowBlur} 
//             onChange={setShadowBlur} 
//             min={0} 
//             max={50} 
//             step={1} 
//             label="Shadow Blur" 
//             unit="px" 
//           />
//         </div>
//       )}

//       <div className="form-group">
//         <label>Stroke:</label>
//         <input
//           type="checkbox"
//           checked={stroke}
//           onChange={(e) => setStroke(e.target.checked)}
//         />
//       </div>
//       {stroke && (
//         <div className="form-group">
//           <label>Stroke Color:</label>
//           <SketchPicker
//             color={strokeColor}
//             onChange={(color) => setStrokeColor(color.hex)}
//             className="color-picker"
//           />
//           <RangeSlider 
//             value={strokeWidth} 
//             onChange={setStrokeWidth} 
//             min={1} 
//             max={20} 
//             step={1} 
//             label="Stroke Width" 
//             unit="px" 
//           />
//         </div>
//       )}

//       <button onClick={handleAddText} className="btn-add-text">Add Text</button>
//     </div>
//   );
// };

// export default AddTextForm;


//////// add font style form

// import React, { useState, useEffect } from 'react';
// import { SketchPicker } from 'react-color';
// import RangeSlider from './RangeSlider';
// import CircularSlider from './CircularSlider';
// import FontModal from './FontModal'; // Import the FontModal component
// import './AddTextForm.css'; // Import your CSS file
// import * as THREE from 'three';

// const AddTextForm = ({ currentMaterials, setCurrentMaterials, uniqueTitles, activeView, onClose }) => {
//   const [text, setText] = useState('');
//   const [fontSize, setFontSize] = useState(80);
//   const [position, setPosition] = useState({ x: 512, y: 512 });
//   const [textColor, setTextColor] = useState('#FFFFFF');
//   const [fontFamily, setFontFamily] = useState('Roboto');
//   const [textRotation, setTextRotation] = useState(0);
//   const [letterSpacing, setLetterSpacing] = useState(0);
//   const [lineHeight, setLineHeight] = useState(1.2);
//   const [border, setBorder] = useState(false);
//   const [borderColor, setBorderColor] = useState('#000000');
//   const [borderWidth, setBorderWidth] = useState(5);
//   const [shadow, setShadow] = useState(false);
//   const [shadowColor, setShadowColor] = useState('#000000');
//   const [shadowBlur, setShadowBlur] = useState(10);
//   const [stroke, setStroke] = useState(false);
//   const [strokeColor, setStrokeColor] = useState('#000000');
//   const [strokeWidth, setStrokeWidth] = useState(5);
//   const [isFontModalOpen, setFontModalOpen] = useState(false);

//   const updateMaterialTexture = () => {
//     const currentMaterial = currentMaterials.find(mat => mat.title === uniqueTitles[activeView]);
//     if (!currentMaterial) return;

//     const canvas = document.createElement('canvas');
//     canvas.width = 1024;
//     canvas.height = 1024;
//     const ctx = canvas.getContext('2d');

//     ctx.fillStyle = currentMaterial.color || '#FFFFFF';
//     ctx.fillRect(0, 0, canvas.width, canvas.height);

//     ctx.font = `bold ${fontSize}px ${fontFamily}`;
//     ctx.fillStyle = textColor;
//     ctx.textAlign = 'center';
//     ctx.textBaseline = 'middle';
//     ctx.letterSpacing = `${letterSpacing}px`;
//     ctx.lineHeight = lineHeight;

//     ctx.save();
//     ctx.translate(position.x, position.y);
//     ctx.rotate(textRotation * Math.PI / 180);

//     if (border) {
//       ctx.strokeStyle = borderColor;
//       ctx.lineWidth = borderWidth;
//       ctx.strokeText(text, 0, 0);
//     }

//     if (shadow) {
//       ctx.shadowColor = shadowColor;
//       ctx.shadowBlur = shadowBlur;
//       ctx.shadowOffsetX = shadowBlur / 2;
//       ctx.shadowOffsetY = shadowBlur / 2;
//     }

//     if (stroke) {
//       ctx.lineWidth = strokeWidth;
//       ctx.strokeStyle = strokeColor;
//       ctx.strokeText(text, 0, 0);
//     }

//     ctx.fillText(text, 0, 0);
//     ctx.restore();

//     const texture = new THREE.CanvasTexture(canvas);
//     texture.needsUpdate = true;

//     const updatedMaterial = {
//       ...currentMaterial,
//       map: texture,
//       needsUpdate: true,
//     };

//     if (currentMaterial.map) currentMaterial.map.dispose();
//     currentMaterial.map = texture;
//     currentMaterial.needsUpdate = true;

//     setCurrentMaterials(prevMaterials =>
//       prevMaterials.map(mat =>
//         mat.title === uniqueTitles[activeView] ? updatedMaterial : mat
//       )
//     );
//   };

//   useEffect(() => {
//     updateMaterialTexture();
//   }, [text, fontSize, textColor, fontFamily, position, textRotation, shadow, shadowColor, shadowBlur, stroke, strokeColor, strokeWidth, border, borderColor, borderWidth, letterSpacing, lineHeight]);

//   const handleAddText = () => {
//     updateMaterialTexture();
//     onClose();
//   };

//   return (
//     <div className="text-options">
//       <h4>Add Text</h4>
//       <div className="form-group d-flex g-3">
//         <label style={{width:"50%"}}>Text:</label>
//         <input
//           type="text"
//           value={text}
//           onChange={(e) => setText(e.target.value)}
//           className="text-input"
//         />
//       </div>
    
//       <div className="form-group">
//         <RangeSlider 
//           value={fontSize} 
//           onChange={setFontSize} 
//           min={10} 
//           max={150} 
//           step={1} 
//           label="Font Size" 
//           unit="px" 
//         />
//       </div>

//       {/* <div className="form-group d-flex g-3">
//         <label style={{width:"50%"}} >Font Family:</label>
//         <button onClick={() => setFontModalOpen(true)} className="font-select-button">
//           {fontFamily}
//         </button>
//       </div> */}
//         <div className="form-group d-flex g-3">
//         <label style={{width:"50%"}}>Font Family:</label>
//         <button onClick={() => setFontModalOpen(true)} className="font-select-button">
//           {fontFamily}
//         </button>
//       </div>


//       <div className="form-group">
//         <RangeSlider 
//           value={position.x} 
//           onChange={(value) => setPosition(prev => ({ ...prev, x: value }))} 
//           min={0} 
//           max={1024} 
//           step={1} 
//           label="Position X" 
//           unit="px" 
//         />
//       </div>

//       <div className="form-group">
//         <RangeSlider 
//           value={position.y} 
//           onChange={(value) => setPosition(prev => ({ ...prev, y: value }))} 
//           min={0} 
//           max={1024} 
//           step={1} 
//           label="Position Y" 
//           unit="px" 
//         />
//       </div>

//       <div className="form-group">
//         <SketchPicker
//           color={textColor}
//           onChangeComplete={(color) => setTextColor(color.hex)}
//         />
//       </div>

//       <div className="form-group">
//         <RangeSlider 
//           value={textRotation} 
//           onChange={setTextRotation} 
//           min={0} 
//           max={360} 
//           step={1} 
//           label="Rotation" 
//           unit="°" 
//         />
//       </div>

//       <div className="form-group">
//         <RangeSlider 
//           value={letterSpacing} 
//           onChange={setLetterSpacing} 
//           min={-10} 
//           max={10} 
//           step={1} 
//           label="Letter Spacing" 
//           unit="px" 
//         />
//       </div>

//       <div className="form-group">
//         <RangeSlider 
//           value={lineHeight} 
//           onChange={setLineHeight} 
//           min={0.5} 
//           max={2} 
//           step={0.1} 
//           label="Line Height" 
//           unit="" 
//         />
//       </div>

//       <div className="form-group d-flex g-3">
//         <label style={{width:"50%"}} >Border:</label>
//         <input 
//           type="checkbox" 
//           checked={border} 
//           onChange={(e) => setBorder(e.target.checked)} 
//         />
//       </div>

//       {border && (
//         <div className="form-group">
//           <SketchPicker 
//             color={borderColor} 
//             onChangeComplete={(color) => setBorderColor(color.hex)} 
//           />
//           <RangeSlider 
//             value={borderWidth} 
//             onChange={setBorderWidth} 
//             min={1} 
//             max={20} 
//             step={1} 
//             label="Border Width" 
//             unit="px" 
//           />
//         </div>
//       )}

//       <div className="form-group d-flex g-3">
//         <label style={{width:"50%"}} >Shadow:</label>
//         <input 
//           type="checkbox" 
//           checked={shadow} 
//           onChange={(e) => setShadow(e.target.checked)} 
//         />
//       </div>

//       {shadow && (
//         <div className="form-group">
//           <SketchPicker 
//             color={shadowColor} 
//             onChangeComplete={(color) => setShadowColor(color.hex)} 
//           />
//           <RangeSlider 
//             value={shadowBlur} 
//             onChange={setShadowBlur} 
//             min={0} 
//             max={50} 
//             step={1} 
//             label="Shadow Blur" 
//             unit="px" 
//           />
//         </div>
//       )}

//       <div className="form-group d-flex g-3">
//         <label style={{width:"50%"}} >Stroke:</label>
//         <input 
//           type="checkbox" 
//           checked={stroke} 
//           onChange={(e) => setStroke(e.target.checked)} 
//         />
//       </div>

//       {stroke && (
//         <div className="form-group">
//           <SketchPicker 
//             color={strokeColor} 
//             onChangeComplete={(color) => setStrokeColor(color.hex)} 
//           />
//           <RangeSlider 
//             value={strokeWidth} 
//             onChange={setStrokeWidth} 
//             min={1} 
//             max={20} 
//             step={1} 
//             label="Stroke Width" 
//             unit="px" 
//           />
//         </div>
//       )}
//        {isFontModalOpen && (
//         <FontModal
//           isOpen={isFontModalOpen}
//           onClose={() => setFontModalOpen(false)}
//           onSelectFont={(fontFamily) => {
//             setFontFamily(fontFamily);
//             setFontModalOpen(false);
//           }}
//         />
//       )}


//       <button onClick={handleAddText} className="btn btn-primary">Add Text</button>
//       <button onClick={onClose} className="btn btn-secondary">Close</button>

//       {/* <FontModal
//         isOpen={isFontModalOpen}
//         onClose={() => setFontModalOpen(false)}
//         onSelectFont={(font) => {
//           setFontFamily(font);
//           setFontModalOpen(false);
//         }}
//       /> */}
      
     
//     </div>
//   );
// };

// export default AddTextForm;





// import React, { useState, useEffect } from 'react';
// import { SketchPicker } from 'react-color';
// import RangeSlider from './RangeSlider';
// import CircularSliderComponent from './CircularSlider';
// import FontModal from './FontModal';
// import * as THREE from 'three';
// import './AddTextForm.css';

// const AddTextForm = ({ currentMaterials, setCurrentMaterials, uniqueTitles, activeView, onClose }) => {
//   const [text, setText] = useState('');
//   const [fontSize, setFontSize] = useState(80);
//   const [position, setPosition] = useState({ x: 512, y: 512 });
//   const [textColor, setTextColor] = useState('#000000');
//   const [fontFamily, setFontFamily] = useState('Roboto');
//   const [textRotation, setTextRotation] = useState(0);

//   const [letterSpacing, setLetterSpacing] = useState(0);
//   const [lineHeight, setLineHeight] = useState(1.2);
//   const [border, setBorder] = useState(false);
//   const [borderColor, setBorderColor] = useState('#000000');
//   const [borderWidth, setBorderWidth] = useState(5);
//   const [shadow, setShadow] = useState(false);
//   const [shadowColor, setShadowColor] = useState('#000000');
//   const [shadowBlur, setShadowBlur] = useState(10);
//   const [stroke, setStroke] = useState(false);
//   const [strokeColor, setStrokeColor] = useState('#000000');
//   const [strokeWidth, setStrokeWidth] = useState(5);
//   const [isFontModalOpen, setFontModalOpen] = useState(false);

//   const updateMaterialTexture = () => {
//     const currentMaterial = currentMaterials.find(mat => mat.title === uniqueTitles[activeView]);
//     if (!currentMaterial) return;

//     const canvas = document.createElement('canvas');
//     canvas.width = 1024;
//     canvas.height = 1024;
//     const ctx = canvas.getContext('2d');

//     // Set the background color based on the current material color
//     ctx.fillStyle = currentMaterial.color || '#FFFFFF';
//     ctx.fillRect(0, 0, canvas.width, canvas.height);

//     // Set the text styles and properties
//     ctx.font = `bold ${fontSize}px ${fontFamily}`;
//     ctx.fillStyle = textColor;
//     ctx.textAlign = 'center';
//     ctx.textBaseline = 'middle';
//     ctx.letterSpacing = `${letterSpacing}px`;
//     ctx.lineHeight = lineHeight;

//     ctx.save();
//     ctx.translate(position.x, position.y);
//     ctx.rotate(textRotation * Math.PI / 180);

//     // Apply border if enabled
//     if (border) {
//       ctx.strokeStyle = borderColor;
//       ctx.lineWidth = borderWidth;
//       ctx.strokeText(text, 0, 0);
//     }

//     // Apply shadow if enabled
//     if (shadow) {
//       ctx.shadowColor = shadowColor;
//       ctx.shadowBlur = shadowBlur;
//       ctx.shadowOffsetX = shadowBlur / 2;
//       ctx.shadowOffsetY = shadowBlur / 2;
//     }

//     // Apply stroke if enabled
//     if (stroke) {
//       ctx.lineWidth = strokeWidth;
//       ctx.strokeStyle = strokeColor;
//       ctx.strokeText(text, 0, 0);
//     }

//     // Draw the text
//     ctx.fillText(text, 0, 0);
//     ctx.restore();

//     const texture = new THREE.CanvasTexture(canvas);
//     texture.needsUpdate = true;

//     const updatedMaterial = {
//       ...currentMaterial,
//       map: texture,
//       needsUpdate: true,
//     };

//     if (currentMaterial.map) currentMaterial.map.dispose();
//     currentMaterial.map = texture;
//     currentMaterial.needsUpdate = true;

//     setCurrentMaterials(prevMaterials =>
//       prevMaterials.map(mat =>
//         mat.title === uniqueTitles[activeView] ? updatedMaterial : mat
//       )
//     );
//   };

//   useEffect(() => {
//     updateMaterialTexture();
//   }, [text, fontSize, textColor, fontFamily, position, textRotation, shadow, shadowColor, shadowBlur, stroke, strokeColor, strokeWidth, border, borderColor, borderWidth, letterSpacing, lineHeight]);

//   const handleAddText = () => {
//     updateMaterialTexture();
//     onClose();
//   };

//   return (

//     <div className="text-options">
//       <h4>Add Text</h4>
//         <div>

     
//       <div className="form-group d-flex g-3">
//         <label style={{width:"50%"}}>Text:</label>
//         <input
//           type="text"
//           value={text}
//           onChange={(e) => setText(e.target.value)}
//           className="text-input"
//         />
//       </div>
    
//       <div className="form-group">
//         <RangeSlider 
//           value={fontSize} 
//           onChange={setFontSize} 
//           min={10} 
//           max={150} 
//           step={1} 
//           label="Font Size" 
//           unit="px" 
//         />
//       </div>

//       <div className="form-group d-flex g-3">
//         <label style={{width:"50%"}}>Font Family:</label>
//         <button onClick={() => setFontModalOpen(true)} className="font-select-button">
//           {fontFamily}
//         </button>
//       </div>

//       <div className="form-group">
//         <RangeSlider 
//           value={position.x} 
//           onChange={(value) => setPosition(prev => ({ ...prev, x: value }))} 
//           min={0} 
//           max={1024} 
//           step={1} 
//           label="X Position" 
//         />
//       </div>
//       <div className="form-group">
//         <RangeSlider 
//           value={position.y} 
//           onChange={(value) => setPosition(prev => ({ ...prev, y: value }))} 
//           min={0} 
//           max={1024} 
//           step={1} 
//           label="Y Position" 
//         />
//       </div>

//       {/* <div className="form-group">
//         <CircularSlider 
//           value={textRotation} 
//           onChange={setTextRotation} 
//           min={-180} 
//           max={180} 
//           step={1} 
//           label="Rotation" 
//           unit="deg" 
//         />
//       </div> */}
//             <div className="form-group">
     


// <CircularSliderComponent
//         value={textRotation}
//         onChange={setTextRotation}
//         min={-180}
//         max={180}
//         label="Rotation"
//       />

//       </div>

//       <div className="form-group mb-3">
//         <label>Text Color:</label>
//         <SketchPicker
//           color={textColor}
//           onChangeComplete={(color) => setTextColor(color.hex)}
//           style={{ width: '100%', margin: '10px 0' }}
//         />
//       </div>

      

//       <div className="form-group">
//         <RangeSlider 
//           value={letterSpacing} 
//           onChange={setLetterSpacing} 
//           min={-5} 
//           max={20} 
//           step={0.1} 
//           label="Letter Spacing" 
//           unit="px" 
//         />
//       </div>

//       <div className="form-group">
//         <RangeSlider 
//           value={lineHeight} 
//           onChange={setLineHeight} 
//           min={0.5} 
//           max={2} 
//           step={0.1} 
//           label="Line Height" 
//           unit="" 
//         />
//       </div>

//       <div className="form-group">
//         <label>
//           <input
//             type="checkbox"
//             checked={border}
//             onChange={() => setBorder(prev => !prev)}
//           /> Border
//         </label>
//         {border && (
//           <>
//             <SketchPicker
//               color={borderColor}
//               onChangeComplete={(color) => setBorderColor(color.hex)}
//             />
//             <RangeSlider 
//               value={borderWidth} 
//               onChange={setBorderWidth} 
//               min={1} 
//               max={20} 
//               step={1} 
//               label="Border Width" 
//               unit="px" 
//             />
//           </>
//         )}
//       </div>

//       <div className="form-group">
//         <label>
//           <input
//             type="checkbox"
//             checked={shadow}
//             onChange={() => setShadow(prev => !prev)}
//           /> Shadow
//         </label>
//         {shadow && (
//           <>
//             <SketchPicker
//               color={shadowColor}
//               onChangeComplete={(color) => setShadowColor(color.hex)}
//             />
//             <RangeSlider 
//               value={shadowBlur} 
//               onChange={setShadowBlur} 
//               min={1} 
//               max={50} 
//               step={1} 
//               label="Shadow Blur" 
//               unit="px" 
//             />
//           </>
//         )}
//       </div>

//       <div className="form-group">
//         <label>
//           <input
//             type="checkbox"
//             checked={stroke}
//             onChange={() => setStroke(prev => !prev)}
//           /> Stroke
//         </label>
//         {stroke && (
//           <>
//             <SketchPicker
//               color={strokeColor}
//               onChangeComplete={(color) => setStrokeColor(color.hex)}
//             />
//             <RangeSlider 
//               value={strokeWidth} 
//               onChange={setStrokeWidth} 
//               min={1} 
//               max={20} 
//               step={1} 
//               label="Stroke Width" 
//               unit="px" 
//             />
//           </>
//         )}
//       </div>

//       <div className="form-group">
//         <button onClick={handleAddText} className="add-text-button">Add Text</button>
//       </div>

//       </div>
//       <FontModal
//         isOpen={isFontModalOpen}
//         onClose={() => setFontModalOpen(false)}
//         onSelectFont={(font) => {
//           setFontFamily(font);
//           setFontModalOpen(false);
//         }}
//       />
//     </div>
//   );
// };

// export default AddTextForm;



/////////correct

// import React, { useState, useEffect } from 'react';
// import { SketchPicker } from 'react-color';
// import RangeSlider from './RangeSlider';
// import CircularSliderComponent from './CircularSliderComponent';
// import FontModal from './FontModal';
// import * as THREE from 'three';
// import './AddTextForm.css';

// const AddTextForm = ({ currentMaterials, setCurrentMaterials, uniqueTitles, activeView, onClose }) => {
//   const [text, setText] = useState('');
//   const [fontSize, setFontSize] = useState(80);
//   const [position, setPosition] = useState({ x: 512, y: 512 });
//   const [textColor, setTextColor] = useState('#000000');
//   const [fontFamily, setFontFamily] = useState('Roboto');
//   const [textRotation, setTextRotation] = useState(0);

//   const [letterSpacing, setLetterSpacing] = useState(0);
//   const [lineHeight, setLineHeight] = useState(1.2);
//   const [border, setBorder] = useState(false);
//   const [borderColor, setBorderColor] = useState('#000000');
//   const [borderWidth, setBorderWidth] = useState(5);
//   const [shadow, setShadow] = useState(false);
//   const [shadowColor, setShadowColor] = useState('#000000');
//   const [shadowBlur, setShadowBlur] = useState(10);
//   const [stroke, setStroke] = useState(false);
//   const [strokeColor, setStrokeColor] = useState('#000000');
//   const [strokeWidth, setStrokeWidth] = useState(5);
//   const [isFontModalOpen, setFontModalOpen] = useState(false);

//   useEffect(() => {
//     console.log('Current Rotation Value:', textRotation);
//   }, [textRotation]);

//   const updateMaterialTexture = () => {
//     const currentMaterial = currentMaterials.find(mat => mat.title === uniqueTitles[activeView]);
//     if (!currentMaterial) return;

//     const canvas = document.createElement('canvas');
//     canvas.width = 1024;
//     canvas.height = 1024;
//     const ctx = canvas.getContext('2d');

//     // Set the background color based on the current material color
//     ctx.fillStyle = currentMaterial.color || '#FFFFFF';
//     ctx.fillRect(0, 0, canvas.width, canvas.height);

//     // Set the text styles and properties
//     ctx.font = `bold ${fontSize}px ${fontFamily}`;
//     ctx.fillStyle = textColor;
//     ctx.textAlign = 'center';
//     ctx.textBaseline = 'middle';
//     ctx.letterSpacing = `${letterSpacing}px`;
//     ctx.lineHeight = lineHeight;

//     ctx.save();
//     ctx.translate(position.x, position.y);
//     ctx.rotate(textRotation * Math.PI / 180);

//     // Apply border if enabled
//     if (border) {
//       ctx.strokeStyle = borderColor;
//       ctx.lineWidth = borderWidth;
//       ctx.strokeText(text, 0, 0);
//     }

//     // Apply shadow if enabled
//     if (shadow) {
//       ctx.shadowColor = shadowColor;
//       ctx.shadowBlur = shadowBlur;
//       ctx.shadowOffsetX = shadowBlur / 2;
//       ctx.shadowOffsetY = shadowBlur / 2;
//     }

//     // Apply stroke if enabled
//     if (stroke) {
//       ctx.lineWidth = strokeWidth;
//       ctx.strokeStyle = strokeColor;
//       ctx.strokeText(text, 0, 0);
//     }

//     // Draw the text
//     ctx.fillText(text, 0, 0);
//     ctx.restore();

//     const texture = new THREE.CanvasTexture(canvas);
//     texture.needsUpdate = true;

//     const updatedMaterial = {
//       ...currentMaterial,
//       map: texture,
//       needsUpdate: true,
//     };

//     if (currentMaterial.map) currentMaterial.map.dispose();
//     currentMaterial.map = texture;
//     currentMaterial.needsUpdate = true;

//     setCurrentMaterials(prevMaterials =>
//       prevMaterials.map(mat =>
//         mat.title === uniqueTitles[activeView] ? updatedMaterial : mat
//       )
//     );
//   };

//   useEffect(() => {
//     updateMaterialTexture();
//   }, [text, fontSize, textColor, fontFamily, position, textRotation, shadow, shadowColor, shadowBlur, stroke, strokeColor, strokeWidth, border, borderColor, borderWidth, letterSpacing, lineHeight]);

//   const handleAddText = () => {
//     updateMaterialTexture();
//     onClose();
//   };

//   return (
//     <div className="text-options">
//       <h4>Add Text</h4>
//       <div className="form-group d-flex g-3">
//         <label style={{ width: "50%" }}>Text:</label>
//         <input
//           type="text"
//           value={text}
//           onChange={(e) => setText(e.target.value)}
//           className="text-input"
//         />
//       </div>
    
//       <div className="form-group">
//         <RangeSlider 
//           value={fontSize} 
//           onChange={setFontSize} 
//           min={10} 
//           max={150} 
//           step={1} 
//           label="Font Size" 
//           unit="px" 
//         />
//       </div>

//       <div className="form-group d-flex g-3">
//         <label style={{ width: "50%" }}>Font Family:</label>
//         <button onClick={() => setFontModalOpen(true)} className="font-select-button">
//           {fontFamily}
//         </button>
//       </div>




//       <div className="form-group">
//         <RangeSlider 
//           value={position.x} 
//           onChange={(value) => setPosition(prev => ({ ...prev, x: value }))} 
//           min={0} 
//           max={1024} 
//           step={1} 
//           label="X Position" 
//         />
//       </div>
//       <div className="form-group">
//         <RangeSlider 
//           value={position.y} 
//           onChange={(value) => setPosition(prev => ({ ...prev, y: value }))} 
//           min={0} 
//           max={1024} 
//           step={1} 
//           label="Y Position" 
//         />
//       </div>

//       <div className="form-group">
//         <CircularSliderComponent
//           value={textRotation}
//           onChange={setTextRotation}
//           min={-180}
//           max={180}
//           label="Rotation"
//         />
//       </div>

//       <div className="form-group mb-3">
//         <label>Text Color:</label>
//         <SketchPicker
//           color={textColor}
//           onChangeComplete={(color) => setTextColor(color.hex)}
//           style={{ width: '100%', margin: '10px 0' }}
//         />
//       </div>

//       <div className="form-group">
//         <RangeSlider 
//           value={letterSpacing} 
//           onChange={setLetterSpacing} 
//           min={-5} 
//           max={20} 
//           step={0.1} 
//           label="Letter Spacing" 
//           unit="px" 
//         />
//       </div>

//       <div className="form-group">
//         <RangeSlider 
//           value={lineHeight} 
//           onChange={setLineHeight} 
//           min={0.5} 
//           max={2} 
//           step={0.1} 
//           label="Line Height" 
//           unit="" 
//         />
//       </div>

//       <div className="form-group">
//         <label>
//           <input
//             type="checkbox"
//             checked={border}
//             onChange={() => setBorder(prev => !prev)}
//           />
//           Border
//         </label>
//         {border && (
//           <>
//             <SketchPicker
//               color={borderColor}
//               onChangeComplete={(color) => setBorderColor(color.hex)}
//               style={{ width: '100%', margin: '10px 0' }}
//             />
//             <RangeSlider 
//               value={borderWidth} 
//               onChange={setBorderWidth} 
//               min={1} 
//               max={10} 
//               step={1} 
//               label="Border Width" 
//               unit="px" 
//             />
//           </>
//         )}
//       </div>

//       <div className="form-group">
//         <label>
//           <input
//             type="checkbox"
//             checked={shadow}
//             onChange={() => setShadow(prev => !prev)}
//           />
//           Shadow
//         </label>
//         {shadow && (
//           <>
//             <SketchPicker
//               color={shadowColor}
//               onChangeComplete={(color) => setShadowColor(color.hex)}
//               style={{ width: '100%', margin: '10px 0' }}
//             />
//             <RangeSlider 
//               value={shadowBlur} 
//               onChange={setShadowBlur} 
//               min={0} 
//               max={50} 
//               step={1} 
//               label="Shadow Blur" 
//               unit="px" 
//             />
//           </>
//         )}
//       </div>

//       <div className="form-group">
//         <label>
//           <input
//             type="checkbox"
//             checked={stroke}
//             onChange={() => setStroke(prev => !prev)}
//           />
//           Stroke
//         </label>
//         {stroke && (
//           <>
//             <SketchPicker
//               color={strokeColor}
//               onChangeComplete={(color) => setStrokeColor(color.hex)}
//               style={{ width: '100%', margin: '10px 0' }}
//             />
//             <RangeSlider 
//               value={strokeWidth} 
//               onChange={setStrokeWidth} 
//               min={1} 
//               max={10} 
//               step={1} 
//               label="Stroke Width" 
//               unit="px" 
//             />
//           </>
//         )}
//       </div>

//       <button onClick={handleAddText} className="add-text-button">
//         Add Text
//       </button>

//       {isFontModalOpen && (
//         // <FontModal
//         //   isOpen={isFontModalOpen}
//         //   onClose={() => setFontModalOpen(false)}
//         //   onSelectFont={setFontFamily}


//         // />

//         <FontModal
//   isOpen={isFontModalOpen}
//   onClose={() => setFontModalOpen(false)}
//   onSelectFont={setFontFamily}
//   previewText={text} // Pass the text value to FontModal
// />

//       )}
//     </div>
//   );
// };

// export default AddTextForm;



// AddTextForm.jsx


import React, { useState, useEffect } from 'react';
import { SketchPicker } from 'react-color';
import RangeSlider from './RangeSlider';
import CircularSliderComponent from './CircularSliderComponent';
import FontModal from './FontModal';
import * as THREE from 'three';
import './AddTextForm.css';

const AddTextForm = ({
  currentMaterials = [], // Default to empty array if not provided
  setCurrentMaterials,
  uniqueTitles = [], // Default to empty array if not provided
  activeView = 0,
  onClose,
}) => {
  const [text, setText] = useState('');
  const [fontSize, setFontSize] = useState(80);
  const [position, setPosition] = useState({ x: 512, y: 512 });
  const [textColor, setTextColor] = useState('#000000');
  const [fontFamily, setFontFamily] = useState('Roboto');
  const [textRotation, setTextRotation] = useState(0);
  const [letterSpacing, setLetterSpacing] = useState(0);
  const [lineHeight, setLineHeight] = useState(1.2);
  const [border, setBorder] = useState(false);
  const [borderColor, setBorderColor] = useState('#000000');
  const [borderWidth, setBorderWidth] = useState(5);
  const [shadow, setShadow] = useState(false);
  const [shadowColor, setShadowColor] = useState('#000000');
  const [shadowBlur, setShadowBlur] = useState(10);
  const [stroke, setStroke] = useState(false);
  const [strokeColor, setStrokeColor] = useState('#000000');
  const [strokeWidth, setStrokeWidth] = useState(5);
  const [isFontModalOpen, setFontModalOpen] = useState(false);

  // Ensure that we have valid currentMaterial before proceeding
  const currentMaterial = currentMaterials.find(mat => mat.title === uniqueTitles[activeView]) || {};

  useEffect(() => {
    console.log('Current Rotation Value:', textRotation);
  }, [textRotation]);

  const updateMaterialTexture = () => {
    if (!currentMaterial) {
      console.error('No current material found');
      return;
    }

    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 1024;
    const ctx = canvas.getContext('2d');

    if (!ctx) {
      console.error('Canvas context not available');
      return;
    }

    // Set the background color based on the current material color
    ctx.fillStyle = currentMaterial.color || '#FFFFFF';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Set the text styles and properties
    ctx.font = `bold ${fontSize}px ${fontFamily}`;
    ctx.fillStyle = textColor;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.letterSpacing = `${letterSpacing}px`;
    ctx.lineHeight = lineHeight;

    ctx.save();
    ctx.translate(position.x, position.y);
    ctx.rotate(textRotation * Math.PI / 180);

    // Apply border if enabled
    if (border) {
      ctx.strokeStyle = borderColor;
      ctx.lineWidth = borderWidth;
      ctx.strokeText(text, 0, 0);
    }

    // Apply shadow if enabled
    if (shadow) {
      ctx.shadowColor = shadowColor;
      ctx.shadowBlur = shadowBlur;
      ctx.shadowOffsetX = shadowBlur / 2;
      ctx.shadowOffsetY = shadowBlur / 2;
    }

    // Apply stroke if enabled
    if (stroke) {
      ctx.lineWidth = strokeWidth;
      ctx.strokeStyle = strokeColor;
      ctx.strokeText(text, 0, 0);
    }

    // Draw the text
    ctx.fillText(text, 0, 0);
    ctx.restore();

    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;

    const updatedMaterial = {
      ...currentMaterial,
      map: texture,
      needsUpdate: true,
    };

    if (currentMaterial.map) currentMaterial.map.dispose();
    currentMaterial.map = texture;
    currentMaterial.needsUpdate = true;

    setCurrentMaterials(prevMaterials =>
      prevMaterials.map(mat =>
        mat.title === uniqueTitles[activeView] ? updatedMaterial : mat
      )
    );
  };

  useEffect(() => {
    updateMaterialTexture();
  }, [text, fontSize, textColor, fontFamily, position, textRotation, shadow, shadowColor, shadowBlur, stroke, strokeColor, strokeWidth, border, borderColor, borderWidth]);

  return (
    <div className="add-text-form">
      <h3>Add Text</h3>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter your text here"
      />
      <div className="text-settings">
        <label>
          Font Size:
          <RangeSlider min={10} max={100} value={fontSize} onChange={setFontSize} />
        </label>
        <label>
          Position X:
          <RangeSlider min={0} max={1024} value={position.x} onChange={(value) => setPosition(prev => ({ ...prev, x: value }))} />
        </label>
        <label>
          Position Y:
          <RangeSlider min={0} max={1024} value={position.y} onChange={(value) => setPosition(prev => ({ ...prev, y: value }))} />
        </label>
        <label>
          Rotation:
          <CircularSliderComponent value={textRotation} onChange={setTextRotation} />
        </label>
        <label>
          Text Color:
          <SketchPicker color={textColor} onChangeComplete={(color) => setTextColor(color.hex)} />
        </label>
        <label>
          Font Family:
          <button onClick={() => setFontModalOpen(true)}>Select Font</button>
        </label>
        {isFontModalOpen && <FontModal onSelectFont={setFontFamily} onClose={() => setFontModalOpen(false)} />}
        {/* Other settings for letterSpacing, lineHeight, border, shadow, etc. */}
      </div>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default AddTextForm;
