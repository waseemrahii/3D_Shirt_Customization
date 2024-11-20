
// import React, { useState } from 'react';
// import './FontModal.css'; // Import your CSS file for additional styling

// const FontModal = ({ isOpen, onClose, onSelectFont }) => {
//   const [selectedFont, setSelectedFont] = useState('Roboto'); // Default font

//   if (!isOpen) return null;

//   const fonts = [
//     { name: 'Roboto', family: 'Roboto' },
//     { name: 'Lora', family: 'Lora' },
//     { name: 'Open Sans', family: 'Open Sans' },
//     { name: 'Arial', family: 'Arial' },
//     { name: 'Georgia', family: 'Georgia' },
//     { name: 'Times New Roman', family: 'Times New Roman' },
//     { name: 'Courier New', family: 'Courier New' },
//     { name: 'Verdana', family: 'Verdana' },
//     { name: 'Aachen Bold', family: 'Aachen Bold NEW' },
//     { name: 'Angels', family: 'Angels NEW' },
//     { name: 'Times New Bold', family: 'Times New Bold NEW' },
//     { name: 'Valiant', family: 'Valiant NEW' },
//   ];

//   const handleFontSelection = (fontFamily) => {
//     setSelectedFont(fontFamily);
//     onSelectFont(fontFamily); // Callback to set the font in the parent component
//   };

//   return (
//     <div className="font-modal fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//       <div className="font-modal-dialog bg-white rounded-lg shadow-lg p-6 relative max-w-md w-full" style={{ fontFamily: selectedFont }}>
//         <button className="font-modal-close absolute top-2 right-2" onClick={onClose}>
//           <svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
//             <line fill="none" stroke="#000" strokeWidth="1.1" x1="1" y1="1" x2="13" y2="13" />
//             <line fill="none" stroke="#000" strokeWidth="1.1" x1="13" y1="1" x2="1" y2="13" />
//           </svg>
//         </button>
//         <h5 className="font-modal-title text-lg font-semibold mb-4">Select Font</h5>

//         <div className="font-list grid grid-cols-1 gap-4">
//           {fonts.map((font, index) => (
//             <div 
//               key={index} 
//               className="font-card border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 cursor-pointer"
//               onClick={() => handleFontSelection(font.family)}
//             >
//               <div className="font-header bg-gray-200 p-2 rounded-t-md text-center" style={{ fontFamily: font.family }}>
//                 <h5 className="font-name text-md font-medium mb-0">{font.name}</h5>
//               </div>
//               <div className="font-preview flex justify-center items-center bg-gray-100 rounded-b-md h-20">
//                 <h3 className="text-2xl" style={{ fontFamily: font.family }}>23</h3>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FontModal;




// import React, { useState } from 'react';
// import './FontModal.css'; // Import your CSS file for additional styling

// const FontModal = ({ isOpen, onClose, onSelectFont, previewText }) => {
//   const [selectedFont, setSelectedFont] = useState('Roboto'); // Default font

//   if (!isOpen) return null;

//   const fonts = [
//     { name: 'Roboto', family: 'Roboto' },
//     { name: 'Lora', family: 'Lora' },
//     { name: 'Open Sans', family: 'Open Sans' },
//     { name: 'Arial', family: 'Arial' },
//     { name: 'Georgia', family: 'Georgia' },
//     { name: 'Times New Roman', family: 'Times New Roman' },
//     { name: 'Courier New', family: 'Courier New' },
//     { name: 'Verdana', family: 'Verdana' },
//     { name: 'Aachen Bold', family: 'Aachen Bold NEW' },
//     { name: 'Angels', family: 'Angels NEW' },
//     { name: 'Times New Bold', family: 'Times New Bold NEW' },
//     { name: 'Valiant', family: 'Valiant NEW' },
//   ];

//   const handleFontSelection = (fontFamily) => {
//     setSelectedFont(fontFamily);
//     onSelectFont(fontFamily); // Callback to set the font in the parent component
//     onClose();     
//    };

//   return (
//     <div className="font-modal fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//       <div className="font-modal-dialog bg-white rounded-lg shadow-lg p-6 relative max-w-md w-full" style={{ fontFamily: selectedFont }}>
//         <button className="font-modal-close absolute top-2 right-2" onClick={onClose}>
//           <svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
//             <line fill="none" stroke="#000" strokeWidth="1.1" x1="1" y1="1" x2="13" y2="13" />
//             <line fill="none" stroke="#000" strokeWidth="1.1" x1="13" y1="1" x2="1" y2="13" />
//           </svg>
//         </button>
//         <h5 className="font-modal-title text-lg font-semibold mb-4">Select Font</h5>

//         <div className="font-list grid grid-cols-1 gap-4">
//           {fonts.map((font, index) => (
//             <div 
//               key={index} 
//               className="font-card border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 cursor-pointer"
//               onClick={() => handleFontSelection(font.family)}
//             >
//               <div className="font-header bg-gray-200 p-2 rounded">
//                 {font.name}
//                 <span className=" ml-2">{font.previewText}</span>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Text Preview Section */}
    
//       </div>
//     </div>
//   );
// };

// export default FontModal;

import React, { useState } from 'react';
import './FontModal.css'; // Import your CSS file for additional styling

const FontModal = ({ isOpen, onClose, onSelectFont, previewText }) => {
  const [selectedFont, setSelectedFont] = useState('Roboto'); // Default font

  if (!isOpen) return null;

  const fonts = [
    { name: 'Roboto', family: 'Roboto' },
    { name: 'Lora', family: 'Lora' },
    { name: 'Open Sans', family: 'Open Sans' },
    { name: 'Arial', family: 'Arial' },
    { name: 'Georgia', family: 'Georgia' },
    { name: 'Times New Roman', family: 'Times New Roman' },
    { name: 'Courier New', family: 'Courier New' },
    { name: 'Verdana', family: 'Verdana' },
    { name: 'Aachen Bold', family: 'Aachen Bold NEW' },
    { name: 'Angels', family: 'Angels NEW' },
    { name: 'Times New Bold', family: 'Times New Bold NEW' },
    { name: 'Valiant', family: 'Valiant NEW' },
  ];

  const handleFontSelection = (fontFamily) => {
    setSelectedFont(fontFamily);  // Set the selected font
    onSelectFont(fontFamily);     // Callback to set the font in the parent component
    onClose();                    // Close the modal after selecting the font
  };

  return (
    <div className="font-modal fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="font-modal-dialog bg-white rounded-lg shadow-lg p-6 relative max-w-md w-full" style={{ fontFamily: selectedFont }}>
        <button className="font-modal-close absolute top-2 right-2" onClick={onClose}>
          <svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
            <line fill="none" stroke="#000" strokeWidth="1.1" x1="1" y1="1" x2="13" y2="13" />
            <line fill="none" stroke="#000" strokeWidth="1.1" x1="13" y1="1" x2="1" y2="13" />
          </svg>
        </button>
        <h5 className="font-modal-title text-lg font-semibold mb-4">Select Font</h5>

        <div className="font-list grid grid-cols-1 gap-4">
          {fonts.map((font, index) => (
            <div 
              key={index} 
              className="font-card border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 cursor-pointer"
              onClick={() => handleFontSelection(font.family)}
              style={{ fontFamily: font.family }} // Set the font family for preview
            >
              <div className="font-header bg-gray-200 p-2 rounded">
                {font.name}
              </div>
              <p className="font-preview-text p-2">
                {previewText || 'Preview Text'} {/* Display provided preview text or fallback */}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FontModal;
