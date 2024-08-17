
// import React, { useState, useRef } from 'react';
// import { ChromePicker } from 'react-color';
// import { FaChevronLeft, FaChevronRight, FaTrash } from 'react-icons/fa';
// import TShirtModel from './TShirtModel';
// import './mainShirt.css';

// const TShirtCustomizer = ({ modelPath, materials ,scale, fov }) => {
//   const [currentMaterials, setCurrentMaterials] = useState(materials);
//   const [activeView, setActiveView] = useState(0); // Index of the currently active view
//   const [uniqueTitles, setUniqueTitles] = useState(Array.from(new Set(materials.map(mat => mat.title)))); // List of unique titles
//   const controlRef = useRef(null);

//   const handleChangeColor = (name, color) => {
//     setCurrentMaterials(prevMaterials =>
//       prevMaterials.map(mat =>
//         mat.name === name ? { ...mat, color: color.hex } : mat
//       )
//     );
//   };

//   const handleNext = () => {
//     setActiveView(prevView => (prevView + 1) % uniqueTitles.length);
//   };

//   const handlePrev = () => {
//     setActiveView(prevView => (prevView - 1 + uniqueTitles.length) % uniqueTitles.length);
//   };

//   const handleRemoveView = (index) => {
//     setUniqueTitles(prevTitles => {
//       const updatedTitles = prevTitles.filter((_, idx) => idx !== index);
//       // Adjust the active view index if it is greater than the length of the updated titles
//       setActiveView(prevActiveView => (prevActiveView >= updatedTitles.length ? updatedTitles.length - 1 : prevActiveView));
//       return updatedTitles;
//     });
//   };

//   // Determine the current view title
//   const currentTitle = uniqueTitles[activeView] || '';

//   // Filter materials based on the title for the current view
//   const filteredMaterials = currentMaterials.filter(mat => mat.title === currentTitle);

//   return (
//     <div className="customizer-container container mt-5">
//       <div className="model-container">
//         {/* <TShirtModel modelPath={modelPath} materials={currentMaterials} setControl={controlRef} /> */}
//         <TShirtModel
//          modelPath={modelPath}
//           materials={currentMaterials}
//            scale={scale} 
//         setControl={controlRef}
//         fov={fov} 
//         />

//       </div>
     
//       <div className="controls-container p-4" style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.1)" }}>
//         <div className="options_panel_header" style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.1)" }}>
//           <div className="prev double-header" onClick={handlePrev}>
//             <FaChevronLeft />
//           </div>
//           <div className="main double-header">
//             <span className="part_label">{currentTitle}</span><br />
//             <br />
//             <span className="nOf">{filteredMaterials.length} {filteredMaterials.length > 1 ? 'items' : 'item'}</span>
//           </div>
//           <div className="next double-header" onClick={handleNext}>
//             <FaChevronRight />
//           </div>
//           {/* <div className="remove-view" onClick={() => handleRemoveView(activeView)}>
//             <FaTrash />
//           </div> */}
//         </div>

//         <div className="color-picker">
//           {filteredMaterials.map(mat => (
//             <div key={mat.name}>
//               <div className="color-picker-header">
//                 <span>{mat.title}</span>
//               </div>
//               <ChromePicker 
//                 color={mat.color} 
//                 onChange={color => handleChangeColor(mat.name, color)} 
//               />
//             </div>
//           ))}
//         </div>

//         {/* <div className="view-buttons" style={{ marginTop: "3rem" }}>
//           {uniqueTitles.map((title, index) => (
//             <button key={index} onClick={() => setActiveView(index)}>
//               {title}
//             </button>
//           ))}
//         </div> */}
//       </div>
//     </div>
//   );
// };

// export default TShirtCustomizer;



// ///////////////////////////// is corect for add text 

// import React, { useState, useRef } from 'react';
// import { ChromePicker } from 'react-color';
// import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
// import TShirtModel from './TShirtModel';
// import * as THREE from 'three';  // Import THREE.js
// import './mainShirt.css';

// const TShirtCustomizer = ({ modelPath, materials, scale, fov }) => {
//   const [currentMaterials, setCurrentMaterials] = useState(materials);
//   const [activeView, setActiveView] = useState(0); // Index of the currently active view
//   const [uniqueTitles, setUniqueTitles] = useState(Array.from(new Set(materials.map(mat => mat.title)))); // List of unique titles
//   const [text, setText] = useState(''); // Text to be added
//   const controlRef = useRef(null);

//   const isValidHex = (hex) => /^#[0-9A-F]{6}$/i.test(hex);

//   const handleChangeColor = (name, color) => {
//     const validColor = isValidHex(color.hex) ? color.hex : '#FFFFFF';
//     setCurrentMaterials(prevMaterials =>
//       prevMaterials.map(mat =>
//         mat.name === name ? { ...mat, color: validColor } : mat
//       )
//     );
//   };


//   // const handleAddText = () => {
//   //   setCurrentMaterials(prevMaterials =>
//   //     prevMaterials.map(mat => {
//   //       if (mat.title === uniqueTitles[activeView]) {
//   //         console.log(`Adding text: "${text}" to material: "${mat.name}"`);
  
//   //         // Validate and correct the hex color
//   //         let validColor = isValidHex(mat.color) ? mat.color : '#FFFFFF';
  
//   //         // Create a canvas and set its size to a high resolution
//   //         const canvas = document.createElement('canvas');
//   //         canvas.width = 1024;
//   //         canvas.height = 1024;
//   //         const ctx = canvas.getContext('2d');
  
//   //         // Draw the black rectangle background
//   //         ctx.fillStyle = '#000000'; // Black color
//   //         ctx.fillRect(0, 0, canvas.width, canvas.height);
  
//   //         // Draw the material color rectangle
//   //         ctx.fillStyle = validColor;
//   //         ctx.fillRect(0, 0, canvas.width, canvas.height);
  
//   //         // Set text properties
//   //         ctx.font = 'bold 80px Arial';
//   //         ctx.fillStyle = '#FFFFFF'; // Text color
//   //         ctx.textAlign = 'center';
//   //         ctx.textBaseline = 'middle';
  
//   //         // Calculate the position to center the text
//   //         const textWidth = ctx.measureText(text).width;
//   //         const padding = 50; // Padding around the text
//   //         const rectWidth = Math.max(textWidth + padding * 2, 300); // Rectangle width
//   //         const rectHeight = 150; // Rectangle height
  
//   //         // Draw the centered rectangle for text
//   //         ctx.fillStyle = '#000000'; // Rectangle color
//   //         ctx.fillRect((canvas.width - rectWidth) / 2, (canvas.height - rectHeight) / 2, rectWidth, rectHeight);
  
//   //         // Draw the text on the rectangle
//   //         ctx.fillStyle = '#FFFFFF'; // Text color
//   //         ctx.fillText(text, canvas.width / 2, canvas.height / 2);
  
//   //         // Convert the canvas to a texture
//   //         const texture = new THREE.CanvasTexture(canvas);
//   //         texture.needsUpdate = true;
  
//   //         console.log('Canvas:', canvas);
//   //         console.log('Texture:', texture);
  
//   //         // Update the material with the new texture
//   //         const updatedMaterial = {
//   //           ...mat,
//   //           map: texture, // Assign the texture map
//   //           needsUpdate: true, // Ensure the material is updated
//   //         };
  
//   //         // Force the material update
//   //         if (mat.map) mat.map.dispose(); // Dispose of the old texture if it exists
//   //         mat.map = texture; // Assign the new texture
//   //         mat.needsUpdate = true; // Mark the material for update
  
//   //         console.log('Updated Material:', updatedMaterial);
  
//   //         return updatedMaterial;
//   //       }
//   //       return mat;
//   //     })
//   //   );
//   // };
  

//   const handleAddText = () => {
//     setCurrentMaterials(prevMaterials =>
//       prevMaterials.map(mat => {
//         if (mat.title === uniqueTitles[activeView]) {
//           console.log(`Adding text: "${text}" to material: "${mat.name}"`);
  
//           // Validate and correct the hex color
//           let validColor = isValidHex(mat.color) ? mat.color : '#FFFFFF';
  
//           // Create a canvas and set its size to a high resolution
//           const canvas = document.createElement('canvas');
//           canvas.width = 1024;
//           canvas.height = 1024;
//           const ctx = canvas.getContext('2d');
  
//           // Step 1: Draw the material color background first
//           ctx.fillStyle = validColor;
//           ctx.fillRect(0, 0, canvas.width, canvas.height);
  
//           // Optional: Draw the logo or other elements here, if applicable
//           // ctx.drawImage(logoImage, xPosition, yPosition, width, height);
  
//           // Step 2: Draw the text on top of everything
//           ctx.font = 'bold 80px Arial';
//           ctx.fillStyle = '#FFFFFF'; // Text color
//           ctx.textAlign = 'center';
//           ctx.textBaseline = 'middle';
  
//           // Calculate the position to center the text
//           const textWidth = ctx.measureText(text).width;
//           const padding = 50; // Padding around the text
//           const rectWidth = Math.max(textWidth + padding * 2, 300); // Rectangle width
//           const rectHeight = 150; // Rectangle height
  
//           // Draw the centered rectangle for text
//           ctx.fillStyle = 'rgba(0, 0, 0, 0.5)'; // Semi-transparent rectangle background
//           ctx.fillRect(
//             (canvas.width - rectWidth) / 2,
//             (canvas.height - rectHeight) / 2,
//             rectWidth,
//             rectHeight
//           );
  
//           // Draw the text on top of the rectangle
//           ctx.fillStyle = '#FFFFFF'; // Text color
//           ctx.fillText(text, canvas.width / 2, canvas.height / 2);
  
//           // Convert the canvas to a texture
//           const texture = new THREE.CanvasTexture(canvas);
//           texture.needsUpdate = true;
  
//           console.log('Canvas:', canvas);
//           console.log('Texture:', texture);
  
//           // Update the material with the new texture
//           const updatedMaterial = {
//             ...mat,
//             map: texture, // Assign the texture map
//             needsUpdate: true, // Ensure the material is updated
//           };
  
//           // Force the material update
//           if (mat.map) mat.map.dispose(); // Dispose of the old texture if it exists
//           mat.map = texture; // Assign the new texture
//           mat.needsUpdate = true; // Mark the material for update
  
//           console.log('Updated Material:', updatedMaterial);
  
//           return updatedMaterial;
//         }
//         return mat;
//       })
//     );
//   };
  
//   const handleNext = () => {
//     setActiveView(prevView => (prevView + 1) % uniqueTitles.length);
//   };

//   const handlePrev = () => {
//     setActiveView(prevView => (prevView - 1 + uniqueTitles.length) % uniqueTitles.length);
//   };

//   const currentTitle = uniqueTitles[activeView] || '';
//   const filteredMaterials = currentMaterials.filter(mat => mat.title === currentTitle);

//   return (
//     <div className="customizer-container container mt-5">
//       <div className="model-container">
//         <TShirtModel
//           modelPath={modelPath}
//           materials={currentMaterials}
//           scale={scale}
//           setControl={controlRef}
//           fov={fov}
//         />
//       </div>
//       <div className="controls-container p-4" style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.1)" }}>
//         <div className="options_panel_header" style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.1)" }}>
//           <div className="prev double-header" onClick={handlePrev}>
//             <FaChevronLeft />
//           </div>
//           <div className="main double-header">
//             <span className="part_label">{currentTitle}</span><br />
//             <br />
//             <span className="nOf">{filteredMaterials.length} {filteredMaterials.length > 1 ? 'items' : 'item'}</span>
//           </div>
//           <div className="next double-header" onClick={handleNext}>
//             <FaChevronRight />
//           </div>
//         </div>

//         <div className="color-picker">
//           {filteredMaterials.map(mat => (
//             <div key={mat.name}>
//               <div className="color-picker-header">
//                 <span>{mat.title}</span>
//               </div>
//               <ChromePicker 
//                 color={mat.color} 
//                 onChange={color => handleChangeColor(mat.name, color)} 
//               />
//             </div>
//           ))}
//         </div>

//         <div className="text-addition">
//           <input
//             type="text"
//             value={text}
//             onChange={(e) => setText(e.target.value)}
//             placeholder="Enter text"
//             style={{ width: '100%', margin: '10px 0' }}
//           />
//           <button onClick={handleAddText} style={{ width: '100%' }}>Add Text</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TShirtCustomizer;


////////////////// in this we add thhe reszing and text 

// import React, { useState, useRef } from 'react';
// import { ChromePicker } from 'react-color';
// import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
// import TShirtModel from './TShirtModel';
// import * as THREE from 'three';  // Import THREE.js
// import './mainShirt.css';

// const TShirtCustomizer = ({ modelPath, materials, scale, fov }) => {
//   const [currentMaterials, setCurrentMaterials] = useState(materials);
//   const [activeView, setActiveView] = useState(0); // Index of the currently active view
//   const [uniqueTitles, setUniqueTitles] = useState(Array.from(new Set(materials.map(mat => mat.title)))); // List of unique titles
//   const [text, setText] = useState(''); // Text to be added
//   const [fontSize, setFontSize] = useState(80); // Font size
//   const [position, setPosition] = useState({ x: 512, y: 512 }); // Position (x, y)
//   const [textColor, setTextColor] = useState('#FFFFFF'); // Text color
//   const [fontFamily, setFontFamily] = useState('Arial'); // Font family
//   const controlRef = useRef(null);

//   const isValidHex = (hex) => /^#[0-9A-F]{6}$/i.test(hex);

//   const handleChangeColor = (name, color) => {
//     const validColor = isValidHex(color.hex) ? color.hex : '#FFFFFF';
//     setCurrentMaterials(prevMaterials =>
//       prevMaterials.map(mat =>
//         mat.name === name ? { ...mat, color: validColor } : mat
//       )
//     );
//   };

//   const handleAddText = () => {
//     setCurrentMaterials(prevMaterials =>
//       prevMaterials.map(mat => {
//         if (mat.title === uniqueTitles[activeView]) {
//           console.log(`Adding text: "${text}" to material: "${mat.name}"`);
  
//           // Validate and correct the hex color
//           let validColor = isValidHex(mat.color) ? mat.color : '#FFFFFF';
  
//           // Create a canvas and set its size to a high resolution
//           const canvas = document.createElement('canvas');
//           canvas.width = 1024;
//           canvas.height = 1024;
//           const ctx = canvas.getContext('2d');
  
//           // Draw the material color background
//           ctx.fillStyle = validColor;
//           ctx.fillRect(0, 0, canvas.width, canvas.height);
  
//           // Set text properties
//           ctx.font = `bold ${fontSize}px ${fontFamily}`;
//           ctx.fillStyle = textColor; // Text color
//           ctx.textAlign = 'center';
//           ctx.textBaseline = 'middle';
  
//           // Draw the text on the canvas at the specified position
//           ctx.fillText(text, position.x, position.y);
  
//           // Convert the canvas to a texture
//           const texture = new THREE.CanvasTexture(canvas);
//           texture.needsUpdate = true;
  
//           console.log('Canvas:', canvas);
//           console.log('Texture:', texture);
  
//           // Update the material with the new texture
//           const updatedMaterial = {
//             ...mat,
//             map: texture, // Assign the texture map
//             needsUpdate: true, // Ensure the material is updated
//           };
  
//           // Force the material update
//           if (mat.map) mat.map.dispose(); // Dispose of the old texture if it exists
//           mat.map = texture; // Assign the new texture
//           mat.needsUpdate = true; // Mark the material for update
  
//           console.log('Updated Material:', updatedMaterial);
  
//           return updatedMaterial;
//         }
//         return mat;
//       })
//     );
//   };

//   const handleNext = () => {
//     setActiveView(prevView => (prevView + 1) % uniqueTitles.length);
//   };

//   const handlePrev = () => {
//     setActiveView(prevView => (prevView - 1 + uniqueTitles.length) % uniqueTitles.length);
//   };

//   const handlePositionChange = (direction) => {
//     setPosition(prevPosition => {
//       switch (direction) {
//         case 'up':
//           return { ...prevPosition, y: prevPosition.y - 10 };
//         case 'down':
//           return { ...prevPosition, y: prevPosition.y + 10 };
//         case 'left':
//           return { ...prevPosition, x: prevPosition.x - 10 };
//         case 'right':
//           return { ...prevPosition, x: prevPosition.x + 10 };
//         default:
//           return prevPosition;
//       }
//     });
//   };

//   const currentTitle = uniqueTitles[activeView] || '';
//   const filteredMaterials = currentMaterials.filter(mat => mat.title === currentTitle);

//   return (
//     <div className="customizer-container container mt-5">
//       <div className="model-container">
//         <TShirtModel
//           modelPath={modelPath}
//           materials={currentMaterials}
//           scale={scale}
//           setControl={controlRef}
//           fov={fov}
//         />
//       </div>
//       <div className="controls-container p-4" style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.1)" }}>
//         <div className="options_panel_header" style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.1)" }}>
//           <div className="prev double-header" onClick={handlePrev}>
//             <FaChevronLeft />
//           </div>
//           <div className="main double-header">
//             <span className="part_label">{currentTitle}</span><br />
//             <br />
//             <span className="nOf">{filteredMaterials.length} {filteredMaterials.length > 1 ? 'items' : 'item'}</span>
//           </div>
//           <div className="next double-header" onClick={handleNext}>
//             <FaChevronRight />
//           </div>
//         </div>

//         <div className="color-picker">
//           {filteredMaterials.map(mat => (
//             <div key={mat.name}>
//               <div className="color-picker-header">
//                 <span>{mat.title}</span>
//               </div>
//               <ChromePicker 
//                 color={mat.color} 
//                 onChange={color => handleChangeColor(mat.name, color)} 
//               />
//             </div>
//           ))}
//         </div>

//         <div className="text-addition">
//           <input
//             type="text"
//             value={text}
//             onChange={(e) => setText(e.target.value)}
//             placeholder="Enter text"
//             style={{ width: '100%', margin: '10px 0' }}
//           />

//           <label>Font Size:</label>
//           <input
//             type="number"
//             value={fontSize}
//             onChange={(e) => setFontSize(Number(e.target.value))}
//             style={{ width: '100%', margin: '10px 0' }}
//           />

//           <label>Text Color:</label>
//           <ChromePicker
//             color={textColor}
//             onChange={(color) => setTextColor(color.hex)}
//             style={{ width: '100%', margin: '10px 0' }}
//           />

//           <label>Font Family:</label>
//           <select
//             value={fontFamily}
//             onChange={(e) => setFontFamily(e.target.value)}
//             style={{ width: '100%', margin: '10px 0' }}
//           >
//             <option value="Arial">Arial</option>
//             <option value="Verdana">Verdana</option>
//             <option value="Times New Roman">Times New Roman</option>
//             <option value="Courier New">Courier New</option>
//             <option value="Georgia">Georgia</option>
//           </select>

//           <label>Position:</label>
//           <div className="position-controls" style={{ marginBottom: '10px' }}>
//             <button onClick={() => handlePositionChange('up')}>Up</button>
//             <button onClick={() => handlePositionChange('down')}>Down</button>
//             <button onClick={() => handlePositionChange('left')}>Left</button>
//             <button onClick={() => handlePositionChange('right')}>Right</button>
//           </div>

//           <button onClick={handleAddText} style={{ width: '100%' }}>Add Text</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TShirtCustomizer;


import React, { useState, useRef } from 'react';
import { ChromePicker } from 'react-color';
import { FaChevronLeft, FaChevronRight, FaEdit } from 'react-icons/fa';
import TShirtModel from './TShirtModel';
import * as THREE from 'three';
import Modal from 'react-modal';
import './mainShirt.css';

const TShirtCustomizer = ({ modelPath, materials, scale, fov }) => {
  const [currentMaterials, setCurrentMaterials] = useState(materials);
  const [activeView, setActiveView] = useState(0);
  const [uniqueTitles, setUniqueTitles] = useState(Array.from(new Set(materials.map(mat => mat.title))));
  const [text, setText] = useState('');
  const [fontSize, setFontSize] = useState(80);
  const [position, setPosition] = useState({ x: 512, y: 512 });
  const [textColor, setTextColor] = useState('#FFFFFF');
  const [fontFamily, setFontFamily] = useState('Arial');
  const [modalIsOpen, setModalIsOpen] = useState(false); // Modal state
  const controlRef = useRef(null);

  const isValidHex = (hex) => /^#[0-9A-F]{6}$/i.test(hex);

  const handleChangeColor = (name, color) => {
    const validColor = isValidHex(color.hex) ? color.hex : '#FFFFFF';
    setCurrentMaterials(prevMaterials =>
      prevMaterials.map(mat =>
        mat.name === name ? { ...mat, color: validColor } : mat
      )
    );
  };

  const handleAddText = () => {
    setCurrentMaterials(prevMaterials =>
      prevMaterials.map(mat => {
        if (mat.title === uniqueTitles[activeView]) {
          let validColor = isValidHex(mat.color) ? mat.color : '#FFFFFF';

          const canvas = document.createElement('canvas');
          canvas.width = 1024;
          canvas.height = 1024;
          const ctx = canvas.getContext('2d');

          ctx.fillStyle = validColor;
          ctx.fillRect(0, 0, canvas.width, canvas.height);

          ctx.font = `bold ${fontSize}px ${fontFamily}`;
          ctx.fillStyle = textColor;
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';

          ctx.fillText(text, position.x, position.y);

          const texture = new THREE.CanvasTexture(canvas);
          texture.needsUpdate = true;

          const updatedMaterial = {
            ...mat,
            map: texture,
            needsUpdate: true,
          };

          if (mat.map) mat.map.dispose();
          mat.map = texture;
          mat.needsUpdate = true;

          return updatedMaterial;
        }
        return mat;
      })
    );
    setModalIsOpen(false); // Close modal after adding text
  };

  const handleNext = () => {
    setActiveView(prevView => (prevView + 1) % uniqueTitles.length);
  };

  const handlePrev = () => {
    setActiveView(prevView => (prevView - 1 + uniqueTitles.length) % uniqueTitles.length);
  };

  const handlePositionChange = (direction) => {
    setPosition(prevPosition => {
      switch (direction) {
        case 'up':
          return { ...prevPosition, y: prevPosition.y - 10 };
        case 'down':
          return { ...prevPosition, y: prevPosition.y + 10 };
        case 'left':
          return { ...prevPosition, x: prevPosition.x - 10 };
        case 'right':
          return { ...prevPosition, x: prevPosition.x + 10 };
        default:
          return prevPosition;
      }
    });
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const currentTitle = uniqueTitles[activeView] || '';
  const filteredMaterials = currentMaterials.filter(mat => mat.title === currentTitle);

  return (
    <div className="customizer-container container mt-5">
      <div className="model-container">
        <TShirtModel
          modelPath={modelPath}
          materials={currentMaterials}
          scale={scale}
          setControl={controlRef}
          fov={fov}
        />
      </div>
      <div className="controls-container p-4" style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.1)" }}>
        <div className="options_panel_header" style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.1)" }}>
          <div className="prev double-header" onClick={handlePrev}>
            <FaChevronLeft />
          </div>
          <div className="main double-header">
            <span className="part_label">{currentTitle}</span><br />
            <br />
            <span className="nOf">{filteredMaterials.length} {filteredMaterials.length > 1 ? 'items' : 'item'}</span>
          </div>
          <div className="next double-header" onClick={handleNext}>
            <FaChevronRight />
          </div>
        </div>

        <div className="color-picker">
          {filteredMaterials.map(mat => (
            <div key={mat.name}>
              <div className="color-picker-header">
                <span>{mat.title}</span>
              </div>
              <ChromePicker 
                color={mat.color} 
                onChange={color => handleChangeColor(mat.name, color)} 
              />
            </div>
          ))}
        </div>

        <div className="text-addition">
          <FaEdit onClick={openModal} style={{ cursor: 'pointer', fontSize: '24px', marginBottom: '10px' }} />
          {/* <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Text Customization"
            style={{
              content: {
                top: '0',
                right: '0',
                left: 'auto',
                bottom: 'auto',
                height: '100%',
                width: '100%',
                overflowY: 'auto',
              },
            }}
          >
            <div style={{ padding: '20px' }}>
              <h2>Customize Text</h2>
              <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter text"
                style={{ width: '100%', margin: '10px 0' }}
              />

              <label>Font Size:</label>
              <input
                type="number"
                value={fontSize}
                onChange={(e) => setFontSize(Number(e.target.value))}
                style={{ width: '100%', margin: '10px 0' }}
              />

              <label>Text Color:</label>
              <ChromePicker
                color={textColor}
                onChange={(color) => setTextColor(color.hex)}
                style={{ width: '100%', margin: '10px 0' }}
              />

              <label>Font Family:</label>
              <select
                value={fontFamily}
                onChange={(e) => setFontFamily(e.target.value)}
                style={{ width: '100%', margin: '10px 0' }}
              >
                <option value="Arial">Arial</option>
                <option value="Verdana">Verdana</option>
                <option value="Times New Roman">Times New Roman</option>
                <option value="Courier New">Courier New</option>
                <option value="Georgia">Georgia</option>
              </select>

              <label>Position:</label>
              <div className="position-controls" style={{ marginBottom: '10px' }}>
                <button onClick={() => handlePositionChange('up')}>Up</button>
                <button onClick={() => handlePositionChange('down')}>Down</button>
                <button onClick={() => handlePositionChange('left')}>Left</button>
                <button onClick={() => handlePositionChange('right')}>Right</button>
              </div>

              <button onClick={handleAddText} style={{ width: '100%' }}>Add Text</button>
              <button onClick={closeModal} style={{ width: '100%', marginTop: '10px' }}>Cancel</button>
            </div>
          </Modal> */}

<Modal
  isOpen={modalIsOpen}
  onRequestClose={closeModal}
  contentLabel="Text Customization"
  style={{
    content: {
      top: '3rem',
      right: '0',
      left: 'auto',
      bottom: 'auto',
      height: '100%',
      width: controlRef.current ? `${controlRef.current.offsetWidth}px` : '50%', // Matches controller container width
      overflowY: 'auto',
    },
  }}
>
  <div style={{ padding: '20px' }}>
    <h2>Customize Text</h2>
    <input
      type="text"
      value={text}
      onChange={(e) => setText(e.target.value)}
      placeholder="Enter text"
      style={{ width: '100%', margin: '10px 0' }}
    />

    <label>Font Size:</label>
    <input
      type="number"
      value={fontSize}
      onChange={(e) => setFontSize(Number(e.target.value))}
      style={{ width: '100%', margin: '10px 0' }}
    />

    <label>Text Color:</label>
    <ChromePicker
      color={textColor}
      onChange={(color) => setTextColor(color.hex)}
      style={{ width: '100%', margin: '10px 0' }}
    />

    <label>Font Family:</label>
    <select
      value={fontFamily}
      onChange={(e) => setFontFamily(e.target.value)}
      style={{ width: '100%', margin: '10px 0' }}
    >
      <option value="Arial">Arial</option>
      <option value="Verdana">Verdana</option>
      <option value="Times New Roman">Times New Roman</option>
      <option value="Courier New">Courier New</option>
      <option value="Georgia">Georgia</option>
    </select>

    <label>Position:</label>
    <div className="position-controls" style={{ marginBottom: '10px' }}>
      <button onClick={() => handlePositionChange('up')}>Up</button>
      <button onClick={() => handlePositionChange('down')}>Down</button>
      <button onClick={() => handlePositionChange('left')}>Left</button>
      <button onClick={() => handlePositionChange('right')}>Right</button>
    </div>

    <button onClick={handleAddText} style={{ width: '100%' }}>Add Text</button>
    <button onClick={closeModal} style={{ width: '100%', marginTop: '10px' }}>Cancel</button>
  </div>
</Modal>

        </div>
      </div>
    </div>
  );
};

export default TShirtCustomizer;
