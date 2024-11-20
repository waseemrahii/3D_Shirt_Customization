
// import React from 'react';
// import { SketchPicker } from 'react-color'; // Import SketchPicker

// const ShirtOptions = 
// ({ currentMaterials, setCurrentMaterials, uniqueTitles, activeView,  onAddText, onAddImage }) => {
//   const currentTitle = uniqueTitles[activeView] || '';
//   const currentMaterial = currentMaterials.find(mat => mat.title === currentTitle) || {};

//   const handleColorChange = (color) => {
//     const updatedMaterial = {
//       ...currentMaterial,
//       color: color.hex,
//     };

//     setCurrentMaterials(prevMaterials =>
//       prevMaterials.map(mat =>
//         mat.title === currentTitle ? updatedMaterial : mat
//       )
//     );
//   };

//   return (
//     <div className="shirt-options">
//       <h4>Shirt Options</h4>
//       <label>Shirt Color:</label>
//       <SketchPicker
//         color={currentMaterial.color || '#FFFFFF'}
//         onChangeComplete={handleColorChange}
//         style={{ width: '100%', margin: '10px 0' }}
//       />
//       <button onClick={onAddText} className="btn-add">Add Text</button>
//       <button onClick={onAddImage} className="btn-add">Add Image</button>
//     </div>
//   );
// };

// export default ShirtOptions;



///////////// small box color


// import React, { useState, useEffect } from 'react';
// import { FaSortDown } from 'react-icons/fa';
// import colorOptions from './ColorOption'; // Your color options array
// import ColorWheel from './ColorWheel'; // Import the ColorWheel component
// import './ShirtOption.css';

// const ShirtOptions = ({
//   currentMaterials,
//   setCurrentMaterials,
//   uniqueTitles,
//   activeView,
//   onAddText,
//   onAddImage,
//   onAddPattern,
//   onMaterialSelect
// }) => {
//   const [showMaterialList, setShowMaterialList] = useState(false);
//   const [currentTitle, setCurrentTitle] = useState(uniqueTitles[activeView] || '');
//   const [selectedColors, setSelectedColors] = useState([]);
//   const [showColorWheel, setShowColorWheel] = useState(false);

//   const currentMaterial = currentMaterials.find(mat => mat.title === currentTitle) || {};

//   useEffect(() => {
//     if (selectedColors.length === 8) {
//       updateMaterialColor(selectedColors[selectedColors.length - 1]);
//     }
//   }, [selectedColors]);

//   const handleColorSelect = (color) => {
//     if (selectedColors.length < 8) {
//       setSelectedColors(prevColors => [...prevColors, color]);
//     } else {
//       const updatedColors = [...selectedColors];
//       updatedColors[selectedColors.length - 1] = color;
//       setSelectedColors(updatedColors);
//     }
//   };

//   const handleMaterialSelect = (title) => {
//     setCurrentTitle(title);
//     setShowMaterialList(false);
//     setShowColorWheel(true);
//     onMaterialSelect(title);
//   };

//   const handleColorWheelClick = (index) => {
//     const color = selectedColors[index];
//     updateMaterialColor(color);
//   };

//   const updateMaterialColor = (color) => {
//     const updatedMaterial = {
//       ...currentMaterial,
//       color,
//     };

//     setCurrentMaterials(prevMaterials =>
//       prevMaterials.map(mat =>
//         mat.title === currentTitle ? updatedMaterial : mat
//       )
//     );
//   };

//   const toggleMaterialList = () => {
//     setShowMaterialList(prevState => !prevState);
//   };

//   return (
//     <div className="shirt-options">
//       {/* <label>Shirt Color:</label> */}
//       <div className="material-selector flex justify-center items-center">
//         <button onClick={toggleMaterialList} className='text-black flex flex-col justify-center items-center gap-3'>
//           {currentTitle || 'Select Material'} <FaSortDown />
//         </button>
//         {showMaterialList && (
//           <div className='material-list' style={{ height:"46vh"}}>
//             <p>Select your shirt material</p>
//             <ul>
//               {uniqueTitles.map(title => (
//                 <li
//                   key={title}
//                   className={title === currentTitle ? 'selected' : ''}
//                   onClick={() => handleMaterialSelect(title)}
//                 >
//                   {title}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </div>
//       {!showColorWheel ? (
//         <div className="color-picker-container">
//           {colorOptions.map((color, index) => (
//             <div
//               key={index}
//               onClick={() => handleColorSelect(color)}
//               style={{
//                 width: '30px',
//                 height: '30px',
//                 backgroundColor: color,
//                 cursor: 'pointer',
//                 border: '1px solid #ddd',
//                 borderRadius: '5px'
//               }}
//             />
//           ))}
//         </div>
//       ) : (
//         <ColorWheel
//           selectedColors={selectedColors}
//           onColorClick={handleColorWheelClick}
//         />
//       )}
//       <div className="selected-color-container">
//         {selectedColors.map((color, index) => (
//           <div
//             key={index}
//             style={{
//               width: '30px',
//               height: '30px',
//               backgroundColor: color,
//               cursor: 'pointer',
//               border: '1px solid #ddd',
//               borderRadius: '5px',
//               color: "white",
//               textAlign: "center"
//             }}
//           >
//             {index + 1}
//           </div>
//         ))}
//       </div>
//       {/* <button onClick={onAddText} className="btn-add">Add Text</button>
//       <button onClick={onAddImage} className="btn-add">Add Image</button> */}

// <div className="options-container flex justify-between gap-3">
//         <button onClick={onAddText} className="option-button">Application</button>
//         <button onClick={onAddImage} className="option-button">Add Logo</button>
//         <button onClick={onAddPattern} className="option-button">Pattern</button>
//      </div>
//     </div>
//   );
// };

// export default ShirtOptions;



/////  adding pattern 

// import React from 'react';
// import { SketchPicker } from 'react-color'; // Import SketchPicker

// const ShirtOptions = ({ currentMaterials, setCurrentMaterials, uniqueTitles, activeView, onAddText, onAddImage, onAddPattern }) => {
//   const currentTitle = uniqueTitles[activeView] || '';
//   const currentMaterial = currentMaterials.find(mat => mat.title === currentTitle) || {};

//   const handleColorChange = (color) => {
//     const updatedMaterial = {
//       ...currentMaterial,
//       color: color.hex,
//     };

//     setCurrentMaterials(prevMaterials =>
//       prevMaterials.map(mat =>
//         mat.title === currentTitle ? updatedMaterial : mat
//       )
//     );
//   };

//   return (
//     <div className="shirt-options">
//       <h4>Shirt Options</h4>
//       <label>Shirt Color:</label>
//       <SketchPicker
//         color={currentMaterial.color || '#FFFFFF'}
//         onChangeComplete={handleColorChange}
//         style={{ width: '100%', margin: '10px 0' }}
//       />
//       <div className='flex g-3'>
//       <p onClick={onAddText} className="">Add Text</p>
//       <p onClick={onAddImage} className="">Add Image</p>
//       <p onClick={onAddPattern} className="">Add Pattern</p>
//       </div>
//     </div>
//   );
// };

// export default ShirtOptions;

//// correcct 
// import React from 'react';
// import { SketchPicker } from 'react-color'; // Import SketchPicker
// import './ShirtOption.css'
// const ShirtOptions = ({ currentMaterials, setCurrentMaterials, uniqueTitles, activeView, onAddText, onAddImage, onAddPattern }) => {
//   const currentTitle = uniqueTitles[activeView] || '';
//   const currentMaterial = currentMaterials.find(mat => mat.title === currentTitle) || {};

//   const handleColorChange = (color) => {
//     const updatedMaterial = {
//       ...currentMaterial,
//       color: color.hex,
//     };

//     setCurrentMaterials(prevMaterials =>
//       prevMaterials.map(mat =>
//         mat.title === currentTitle ? updatedMaterial : mat
//       )
//     );
//   };

//   return (
//     <div className="shirt-options">
//       <h4>Shirt Options</h4>
//       <label>Shirt Color:</label>
//       <SketchPicker
//         color={currentMaterial.color || '#FFFFFF'}
//         onChangeComplete={handleColorChange}
//         style={{ width: '100%', margin: '10px 0' }}
//       />
//       <div className="options-container flex justify-between gap-3">
//         <button onClick={onAddText} className="option-button">Application</button>
//         <button onClick={onAddImage} className="option-button">Add Logo</button>
//         <button onClick={onAddPattern} className="option-button">Pattern</button>
//       </div>
//     </div>
//   );
// };

// export default ShirtOptions;


///////// last is correct 
// import React from 'react';
// import { SketchPicker } from 'react-color'; // Import SketchPicker
// import './ShirtOption.css';

// const ShirtOptions = ({ currentMaterials, setCurrentMaterials, uniqueTitles, activeView, onAddText, onAddImage, onAddPattern }) => {
//   const currentTitle = uniqueTitles[activeView] || '';
//   const currentMaterial = currentMaterials.find(mat => mat.title === currentTitle) || {};

//   const handleColorChange = (color) => {
//     const updatedMaterial = {
//       ...currentMaterial,
//       color: color.hex,
//     };

//     setCurrentMaterials(prevMaterials =>
//       prevMaterials.map(mat =>
//         mat.title === currentTitle ? updatedMaterial : mat
//       )
//     );
//   };

//   return (
//     <div className="shirt-options">
//       <h4>Shirt Options</h4>
//       <label>Shirt Color:</label>
//       <SketchPicker
//         color={currentMaterial.color || '#FFFFFF'}
//         onChangeComplete={handleColorChange}
//         style={{ width: '100%', margin: '10px 0' }}
//       />
//       <div className="options-container flex justify-between gap-3">
//         <button onClick={onAddText} className="option-button">Application</button>
//         <button onClick={onAddImage} className="option-button">Add Logo</button>
//         <button onClick={onAddPattern} className="option-button">Pattern</button>
//       </div>
//     </div>
//   );
// };

// export default ShirtOptions;





// import React, { useState, useEffect } from 'react';
// import { FaSortDown } from 'react-icons/fa';
// import colorOptions from './ColorOption'; // Your color options array
// import ColorWheel from './ColorWheel'; // Import the ColorWheel component
// import './ShirtOption.css';

// const ShirtOptions = ({
//   currentMaterials,
//   setCurrentMaterials,
//   uniqueTitles,
//   activeView,
//   onAddText,
//   onAddImage,
//   onAddPattern,
//   onMaterialSelect,
// }) => {
//   const [showMaterialList, setShowMaterialList] = useState(false);
//   const [currentTitle, setCurrentTitle] = useState(uniqueTitles[activeView] || '');
//   const [selectedColors, setSelectedColors] = useState([]);
//   const [showColorWheel, setShowColorWheel] = useState(false);

//   const currentMaterial = currentMaterials.find((mat) => mat.title === currentTitle) || {};

//   useEffect(() => {
//     if (selectedColors.length === 8) {
//       updateMaterialColor(selectedColors[selectedColors.length - 1]);
//     }
//   }, [selectedColors]);

//   const handleColorSelect = (color) => {
//     if (selectedColors.length < 8) {
//       setSelectedColors((prevColors) => [...prevColors, color]);
//     } else {
//       const updatedColors = [...selectedColors];
//       updatedColors[selectedColors.length - 1] = color;
//       setSelectedColors(updatedColors);
//     }
//   };

//   const handleMaterialSelect = (title) => {
//     setCurrentTitle(title);
//     setShowMaterialList(false);
//     setShowColorWheel(true);
//     onMaterialSelect(title); // Notify parent of selected material
//   };

//   const handleColorWheelClick = (index) => {
//     const color = selectedColors[index];
//     updateMaterialColor(color);
//   };

//   const updateMaterialColor = (color) => {
//     const updatedMaterial = {
//       ...currentMaterial,
//       color,
//     };

//     setCurrentMaterials((prevMaterials) =>
//       prevMaterials.map((mat) =>
//         mat.title === currentTitle ? updatedMaterial : mat
//       )
//     );
//   };

//   const toggleMaterialList = () => {
//     setShowMaterialList((prevState) => !prevState);
//   };

//   return (
//     <div className="shirt-options">
//       <div className="material-selector flex justify-center items-center">
//         <button onClick={toggleMaterialList} className="text-black flex flex-col justify-center items-center gap-3">
//           {currentTitle || 'Select Material'} <FaSortDown />
//         </button>
//         {showMaterialList && (
//           <div className="material-list" style={{ height: '46vh' }}>
//             <p>Select your shirt material</p>
//             <ul>
//               {uniqueTitles.map((title) => (
//                 <li
//                   key={title}
//                   className={title === currentTitle ? 'selected' : ''}
//                   onClick={() => handleMaterialSelect(title)}
//                 >
//                   {title}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </div>
//       {!showColorWheel ? (
//         <div className="color-picker-container">
//           {colorOptions.map((color, index) => (
//             <div
//               key={index}
//               onClick={() => handleColorSelect(color)}
//               style={{
//                 width: '30px',
//                 height: '30px',
//                 backgroundColor: color,
//                 cursor: 'pointer',
//                 border: '1px solid #ddd',
//                 borderRadius: '5px',
//               }}
//             />
//           ))}
//         </div>
//       ) : (
//         <ColorWheel selectedColors={selectedColors} onColorClick={handleColorWheelClick} />
//       )}
//       <div className="selected-color-container">
//         {selectedColors.map((color, index) => (
//           <div
//             key={index}
//             style={{
//               width: '30px',
//               height: '30px',
//               backgroundColor: color,
//               cursor: 'pointer',
//               border: '1px solid #ddd',
//               borderRadius: '5px',
//               color: 'white',
//               textAlign: 'center',
//             }}
//           >
//             {index + 1}
//           </div>
//         ))}
//       </div>
//       <div className="options-container flex justify-between gap-3">
//         <button onClick={onAddText} className="option-button">Application</button>
//         <button onClick={onAddImage} className="option-button">Add Logo</button>
//         <button onClick={onAddPattern} className="option-button">Pattern</button>
//       </div>
//     </div>
//   );
// };

// export default ShirtOptions;



import React, { useState, useEffect } from 'react'; 
import { FaSortDown } from 'react-icons/fa';
import colorOptions from './ColorOption'; // Your color options array
import ColorWheel from './ColorWheel'; // Import the ColorWheel component
import './ShirtOption.css';

const ShirtOptions = ({
  currentMaterials,
  setCurrentMaterials,
  uniqueTitles,
  activeView,
  onAddText,
  onAddImage,
  onAddPattern,
  onMaterialSelect,
}) => {
  const [showMaterialList, setShowMaterialList] = useState(false);
  const [currentTitle, setCurrentTitle] = useState(uniqueTitles[activeView] || '');
  const [selectedColors, setSelectedColors] = useState([]);
  const [showColorWheel, setShowColorWheel] = useState(false);

  const currentMaterial = currentMaterials.find((mat) => mat.title === currentTitle) || {};

  useEffect(() => {
    if (selectedColors.length === 8) {
      updateMaterialColor(selectedColors[selectedColors.length - 1]);
    }
  }, [selectedColors]);

  const handleColorSelect = (color) => {
    if (selectedColors.length < 8) {
      setSelectedColors((prevColors) => [...prevColors, color]);
    } else {
      const updatedColors = [...selectedColors];
      updatedColors[selectedColors.length - 1] = color;
      setSelectedColors(updatedColors);
    }
  };

  const handleMaterialSelect = (title) => {
    setCurrentTitle(title);
    setShowMaterialList(false);
    setShowColorWheel(true);
    onMaterialSelect(title); // Notify parent of selected material
    console.log("Selected Material:", title); // Log selected material
  };

  const handleColorWheelClick = (index) => {
    const color = selectedColors[index];
    updateMaterialColor(color);
  };

  const updateMaterialColor = (color) => {
    const updatedMaterial = {
      ...currentMaterial,
      color,
    };

    setCurrentMaterials((prevMaterials) =>
      prevMaterials.map((mat) =>
        mat.title === currentTitle ? updatedMaterial : mat
      )
    );
  };

  const toggleMaterialList = () => {
    setShowMaterialList((prevState) => !prevState);
  };

  return (
    <div className="shirt-options">
      <div className="material-selector flex justify-center items-center">
        <button onClick={toggleMaterialList} className="text-black flex flex-col justify-center items-center gap-3">
          {currentTitle || 'Select Material'} <FaSortDown />
        </button>
        {showMaterialList && (
          <div className="material-list" style={{ height: '46vh' }}>
            <p>Select your shirt material</p>
            <ul>
              {uniqueTitles.map((title) => (
                <li
                  key={title}
                  className={title === currentTitle ? 'selected' : ''}
                  onClick={() => handleMaterialSelect(title)}
                >
                  {title}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      {!showColorWheel ? (
        <div className="color-picker-container">
          {colorOptions.map((color, index) => (
            <div
              key={index}
              onClick={() => handleColorSelect(color)}
              style={{
                width: '30px',
                height: '30px',
                backgroundColor: color,
                cursor: 'pointer',
                border: '1px solid #ddd',
                borderRadius: '5px',
              }}
            />
          ))}
        </div>
      ) : (
        <ColorWheel selectedColors={selectedColors} onColorClick={handleColorWheelClick} />
      )}
      <div className="selected-color-container">
        {selectedColors.map((color, index) => (
          <div
            key={index}
            style={{
              width: '30px',
              height: '30px',
              backgroundColor: color,
              cursor: 'pointer',
              border: '1px solid #ddd',
              borderRadius: '5px',
              color: 'white',
              textAlign: 'center',
            }}
          >
            {index + 1}
          </div>
        ))}
      </div>
      <div className="options-container flex justify-between gap-3">
        <button onClick={onAddText} className="option-button">Application</button>
        <button onClick={onAddImage} className="option-button">Add Logo</button>
        <button onClick={onAddPattern} className="option-button">Pattern</button>
      </div>
    </div>
  );
};

export default ShirtOptions;
