
// import React, { useState } from 'react';
// import * as THREE from 'three';

// const AddImageForm = ({ currentMaterials, setCurrentMaterials, uniqueTitles, activeView, onClose }) => {
//   const [image, setImage] = useState(null);
//   const [position, setPosition] = useState({ x: 512, y: 512 });
//   const [scale, setScale] = useState(1);

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setImage(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const updateMaterialTexture = () => {
//     const currentMaterial = currentMaterials.find(mat => mat.title === uniqueTitles[activeView]);
//     if (!currentMaterial || !image) return;

//     const canvas = document.createElement('canvas');
//     canvas.width = 1024;
//     canvas.height = 1024;
//     const ctx = canvas.getContext('2d');

//     const img = new Image();
//     img.src = image;
//     img.onload = () => {
//       // Clear the canvas
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
      
//       // Draw the image on the canvas
//       ctx.drawImage(img, position.x, position.y, img.width * scale, img.height * scale);

//       // Create texture from canvas
//       const texture = new THREE.CanvasTexture(canvas);
//       texture.needsUpdate = true;

//       // Update the material
//       const updatedMaterial = {
//         ...currentMaterial,
//         map: texture,
//         needsUpdate: true,
//       };

//       if (currentMaterial.map) currentMaterial.map.dispose();
//       currentMaterial.map = texture;
//       currentMaterial.needsUpdate = true;

//       // Update materials state
//       setCurrentMaterials(prevMaterials =>
//         prevMaterials.map(mat =>
//           mat.title === uniqueTitles[activeView] ? updatedMaterial : mat
//         )
//       );
//     };

//     img.onerror = (error) => {
//       console.error("Image loading error: ", error);
//     };
//   };

//   const handleAddImage = () => {
//     updateMaterialTexture();
//     onClose();
//   };

//   return (
//     <div className="image-options container" style={{ marginTop: "7rem", overflow: "auto", height: "100vh", padding: "1rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
//       <h4>Add Image</h4>
//       <div className="form-group">
//         <label>Upload Image:</label>
//         <input type="file" accept="image/*" onChange={handleImageChange} style={{ width: '100%', margin: '0.5rem 0' }} />
//       </div>
//       <div className="form-group">
//         <label>Position X: {position.x}px</label>
//         <input
//           type="range"
//           min="0"
//           max="1024"
//           value={position.x}
//           onChange={(e) => setPosition(prev => ({ ...prev, x: Number(e.target.value) }))}
//           style={{ width: '100%', margin: '0.5rem 0' }}
//         />
//       </div>
//       <div className="form-group">
//         <label>Position Y: {position.y}px</label>
//         <input
//           type="range"
//           min="0"
//           max="1024"
//           value={position.y}
//           onChange={(e) => setPosition(prev => ({ ...prev, y: Number(e.target.value) }))}
//           style={{ width: '100%', margin: '0.5rem 0' }}
//         />
//       </div>
//       <div className="form-group">
//         <label>Scale: {scale}</label>
//         <input
//           type="range"
//           min="0.1"
//           max="2"
//           step="0.1"
//           value={scale}
//           onChange={(e) => setScale(Number(e.target.value))}
//           style={{ width: '100%', margin: '0.5rem 0' }}
//         />
//       </div>
//       <button onClick={handleAddImage} style={{ backgroundColor: '#4CAF50', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '4px' }}>Add Image</button>
//     </div>
//   );
// };

// export default AddImageForm;


/////// dynamicaly set the iamge 

// import React, { useState, useEffect } from 'react';
// import * as THREE from 'three';

// const AddImageForm = ({ currentMaterials, setCurrentMaterials, uniqueTitles, activeView, onClose }) => {
//   const [image, setImage] = useState(null);
//   const [position, setPosition] = useState({ x: 512, y: 512 });
//   const [scale, setScale] = useState(1);

//   useEffect(() => {
//     if (image) {
//       updateMaterialTexture();
//     }
//   }, [image, position, scale]); // Update when image, position, or scale changes

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setImage(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const updateMaterialTexture = () => {
//     const currentMaterial = currentMaterials.find(mat => mat.title === uniqueTitles[activeView]);
//     if (!currentMaterial || !image) return;

//     const canvas = document.createElement('canvas');
//     canvas.width = 1024;
//     canvas.height = 1024;
//     const ctx = canvas.getContext('2d');

//     const img = new Image();
//     img.src = image;
//     img.onload = () => {
//       // Clear the canvas
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
      
//       // Draw the image on the canvas
//       ctx.drawImage(img, position.x, position.y, img.width * scale, img.height * scale);

//       // Create texture from canvas
//       const texture = new THREE.CanvasTexture(canvas);
//       texture.needsUpdate = true;

//       // Update the material
//       const updatedMaterial = {
//         ...currentMaterial,
//         map: texture,
//         needsUpdate: true,
//       };

//       if (currentMaterial.map) currentMaterial.map.dispose();
//       currentMaterial.map = texture;
//       currentMaterial.needsUpdate = true;

//       // Update materials state
//       setCurrentMaterials(prevMaterials =>
//         prevMaterials.map(mat =>
//           mat.title === uniqueTitles[activeView] ? updatedMaterial : mat
//         )
//       );
//     };

//     img.onerror = (error) => {
//       console.error("Image loading error: ", error);
//     };
//   };

//   return (
//     <div className="image-options container" style={{ marginTop: "7rem", overflow: "auto", height: "100vh", padding: "1rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
//       <h4>Add Image</h4>
//       <div className="form-group">
//         <label>Upload Image:</label>
//         <input type="file" accept="image/*" onChange={handleImageChange} style={{ width: '100%', margin: '0.5rem 0' }} />
//       </div>
//       <div className="form-group">
//         <label>Position X: {position.x}px</label>
//         <input
//           type="range"
//           min="0"
//           max="1024"
//           value={position.x}
//           onChange={(e) => setPosition(prev => ({ ...prev, x: Number(e.target.value) }))}
//           style={{ width: '100%', margin: '0.5rem 0' }}
//         />
//       </div>
//       <div className="form-group">
//         <label>Position Y: {position.y}px</label>
//         <input
//           type="range"
//           min="0"
//           max="1024"
//           value={position.y}
//           onChange={(e) => setPosition(prev => ({ ...prev, y: Number(e.target.value) }))}
//           style={{ width: '100%', margin: '0.5rem 0' }}
//         />
//       </div>
//       <div className="form-group">
//         <label>Scale: {scale}</label>
//         <input
//           type="range"
//           min="0.1"
//           max="2"
//           step="0.1"
//           value={scale}
//           onChange={(e) => setScale(Number(e.target.value))}
//           style={{ width: '100%', margin: '0.5rem 0' }}
//         />
//       </div>
//     </div>
//   );
// };

// export default AddImageForm;



import React, { useState, useEffect } from 'react';
import * as THREE from 'three';

const AddImageForm = ({ currentMaterials, setCurrentMaterials, uniqueTitles, activeView, onClose }) => {
  // Default position and scale values
  const [image, setImage] = useState(null);
  const [position, setPosition] = useState({ x: 512, y: 512 }); // Default to start from the top-left
  const [scale, setScale] = useState(7); // Scale 1 corresponds to 20x20 pixels

  useEffect(() => {
    if (image) {
      updateMaterialTexture();
    }
  }, [image, position, scale]); // Update when image, position, or scale changes

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const updateMaterialTexture = () => {
    const currentMaterial = currentMaterials.find(mat => mat.title === uniqueTitles[activeView]);
    if (!currentMaterial || !image) return;

    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 1024;
    const ctx = canvas.getContext('2d');

    const img = new Image();
    img.src = image;
    img.onload = () => {
      // Clear the canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Calculate the desired image size based on scale
      const desiredWidth = 20 * scale;
      const desiredHeight = 20 * scale;

      // Draw the image on the canvas with a size of 20x20 pixels
      ctx.drawImage(img, position.x, position.y, desiredWidth, desiredHeight);

      // Create texture from canvas
      const texture = new THREE.CanvasTexture(canvas);
      texture.needsUpdate = true;

      // Update the material
      const updatedMaterial = {
        ...currentMaterial,
        map: texture,
        needsUpdate: true,
      };

      if (currentMaterial.map) currentMaterial.map.dispose();
      currentMaterial.map = texture;
      currentMaterial.needsUpdate = true;

      // Update materials state
      setCurrentMaterials(prevMaterials =>
        prevMaterials.map(mat =>
          mat.title === uniqueTitles[activeView] ? updatedMaterial : mat
        )
      );
    };

    img.onerror = (error) => {
      console.error("Image loading error: ", error);
    };
  };

  return (
    <div className="image-options container" style={{ marginTop: "7rem", overflow: "auto", height: "100vh", padding: "1rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
      <h4>Add Image</h4>
      <div className="form-group">
        <label>Upload Image:</label>
        <input type="file" accept="image/*" onChange={handleImageChange} style={{ width: '100%', margin: '0.5rem 0' }} />
      </div>
      <div className="form-group">
        <label>Position X: {position.x}px</label>
        <input
          type="range"
          min="0"
          max="1024"
          value={position.x}
          onChange={(e) => setPosition(prev => ({ ...prev, x: Number(e.target.value) }))}
          style={{ width: '100%', margin: '0.5rem 0' }}
        />
      </div>
      <div className="form-group">
        <label>Position Y: {position.y}px</label>
        <input
          type="range"
          min="0"
          max="1024"
          value={position.y}
          onChange={(e) => setPosition(prev => ({ ...prev, y: Number(e.target.value) }))}
          style={{ width: '100%', margin: '0.5rem 0' }}
        />
      </div>
      <div className="form-group">
        <label>Scale: {scale}</label>
        <input
          type="range"
          min="0.1"
          max="20"
          step="0.1"
          value={scale}
          onChange={(e) => setScale(Number(e.target.value))}
          style={{ width: '100%', margin: '0.5rem 0' }}
        />
      </div>
    </div>
  );
};

export default AddImageForm;



// import React, { useState, useEffect } from 'react';
// import * as THREE from 'three';

// const AddImageForm = ({ currentMaterials, setCurrentMaterials, uniqueTitles, activeView, onClose }) => {
//   const [image, setImage] = useState(null);
//   const [position, setPosition] = useState({ x: 512, y: 512 }); // Default position
//   const [scale, setScale] = useState(7); // Scale for 20x20 pixels

//   // To store the list of added images
//   const [addedImages, setAddedImages] = useState([]);

//   useEffect(() => {
//     if (image) {
//       updateMaterialTexture();
//     }
//   }, [image, position, scale]); // Update when image, position, or scale changes

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setImage(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const updateMaterialTexture = () => {
//     const currentMaterial = currentMaterials.find(mat => mat.title === uniqueTitles[activeView]);
//     if (!currentMaterial || !image) return;

//     const canvas = document.createElement('canvas');
//     canvas.width = 1024;
//     canvas.height = 1024;
//     const ctx = canvas.getContext('2d');

//     const img = new Image();
//     img.src = image;
//     img.onload = () => {
//       // Clear the canvas
//       ctx.clearRect(0, 0, canvas.width, canvas.height);

//       // Draw existing images
//       addedImages.forEach(({ src, x, y, width, height }) => {
//         const existingImg = new Image();
//         existingImg.src = src;
//         ctx.drawImage(existingImg, x, y, width, height);
//       });

//       // Calculate the desired image size based on scale
//       const desiredWidth = 20 * scale;
//       const desiredHeight = 20 * scale;

//       // Draw the new image on the canvas
//       ctx.drawImage(img, position.x, position.y, desiredWidth, desiredHeight);

//       // Create texture from canvas
//       const texture = new THREE.CanvasTexture(canvas);
//       texture.needsUpdate = true;

//       // Update the material
//       const updatedMaterial = {
//         ...currentMaterial,
//         map: texture,
//         needsUpdate: true,
//       };

//       if (currentMaterial.map) currentMaterial.map.dispose();
//       currentMaterial.map = texture;
//       currentMaterial.needsUpdate = true;

//       // Update materials state
//       setCurrentMaterials(prevMaterials =>
//         prevMaterials.map(mat =>
//           mat.title === uniqueTitles[activeView] ? updatedMaterial : mat
//         )
//       );
//     };

//     img.onerror = (error) => {
//       console.error("Image loading error: ", error);
//     };
//   };

//   const handleAddImage = () => {
//     if (image) {
//       setAddedImages(prevImages => [
//         ...prevImages,
//         {
//           src: image,
//           x: position.x,
//           y: position.y,
//           width: 20 * scale,
//           height: 20 * scale,
//         }
//       ]);
//       // Clear the current image to start fresh
//       setImage(null);
//     }
//   };

//   return (
//     <div className="image-options container" style={{ marginTop: "7rem", overflow: "auto", height: "100vh", padding: "1rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
//       <h4>Add Image</h4>
//       <div className="form-group">
//         <label>Upload Image:</label>
//         <input type="file" accept="image/*" onChange={handleImageChange} style={{ width: '100%', margin: '0.5rem 0' }} />
//       </div>
//       <div className="form-group">
//         <label>Position X: {position.x}px</label>
//         <input
//           type="range"
//           min="0"
//           max="1024"
//           value={position.x}
//           onChange={(e) => setPosition(prev => ({ ...prev, x: Number(e.target.value) }))}
//           style={{ width: '100%', margin: '0.5rem 0' }}
//         />
//       </div>
//       <div className="form-group">
//         <label>Position Y: {position.y}px</label>
//         <input
//           type="range"
//           min="0"
//           max="1024"
//           value={position.y}
//           onChange={(e) => setPosition(prev => ({ ...prev, y: Number(e.target.value) }))}
//           style={{ width: '100%', margin: '0.5rem 0' }}
//         />
//       </div>
//       <div className="form-group">
//         <label>Scale: {scale}</label>
//         <input
//           type="range"
//           min="0.1"
//           max="10"
//           step="0.1"
//           value={scale}
//           onChange={(e) => setScale(Number(e.target.value))}
//           style={{ width: '100%', margin: '0.5rem 0' }}
//         />
//       </div>
//       <button onClick={handleAddImage} style={{ padding: '0.5rem 1rem', backgroundColor: 'green', color: 'white', border: 'none', borderRadius: '4px' }}>
//         Add
//       </button>
//     </div>
//   );
// };

// export default AddImageForm;



// import React, { useState, useEffect } from 'react';
// import * as THREE from 'three';

// const AddImageForm = ({ currentMaterials, setCurrentMaterials, uniqueTitles, activeView, onClose }) => {
//   const [image, setImage] = useState(null);
//   const [position, setPosition] = useState({ x: 512, y: 512 }); // Default position
//   const [scale, setScale] = useState(7); // Scale for 20x20 pixels

//   // To store the list of added images
//   const [addedImages, setAddedImages] = useState([]);

//   // Effect to update the texture when the list of added images changes
//   useEffect(() => {
//     if (addedImages.length > 0) {
//       updateMaterialTexture();
//     }
//   }, [addedImages]);

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setImage(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const updateMaterialTexture = () => {
//     const currentMaterial = currentMaterials.find(mat => mat.title === uniqueTitles[activeView]);
//     if (!currentMaterial || !addedImages.length) return;

//     const canvas = document.createElement('canvas');
//     canvas.width = 1024;
//     canvas.height = 1024;
//     const ctx = canvas.getContext('2d');

//     // Draw all added images on the canvas
//     addedImages.forEach(({ src, x, y, width, height }) => {
//       const img = new Image();
//       img.src = src;
//       img.onload = () => {
//         ctx.drawImage(img, x, y, width, height);
//         if (src === addedImages[addedImages.length - 1].src) {
//           // Update the texture after the last image is drawn
//           const texture = new THREE.CanvasTexture(canvas);
//           texture.needsUpdate = true;

//           // Update the material
//           const updatedMaterial = {
//             ...currentMaterial,
//             map: texture,
//             needsUpdate: true,
//           };

//           if (currentMaterial.map) currentMaterial.map.dispose();
//           currentMaterial.map = texture;
//           currentMaterial.needsUpdate = true;

//           // Update materials state
//           setCurrentMaterials(prevMaterials =>
//             prevMaterials.map(mat =>
//               mat.title === uniqueTitles[activeView] ? updatedMaterial : mat
//             )
//           );
//         }
//       };
//       img.onerror = (error) => {
//         console.error("Image loading error: ", error);
//       };
//     });
//   };

//   const handleAddImage = () => {
//     if (image) {
//       setAddedImages(prevImages => [
//         ...prevImages,
//         {
//           src: image,
//           x: position.x,
//           y: position.y,
//           width: 20 * scale,
//           height: 20 * scale,
//         }
//       ]);
//       // Clear the current image to start fresh
//       setImage(null);
//     }
//   };

//   return (
//     <div className="image-options container" style={{ marginTop: "7rem", overflow: "auto", height: "100vh", padding: "1rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
//       <h4>Add Image</h4>
//       <div className="form-group">
//         <label>Upload Image:</label>
//         <input type="file" accept="image/*" onChange={handleImageChange} style={{ width: '100%', margin: '0.5rem 0' }} />
//       </div>
//       <div className="form-group">
//         <label>Position X: {position.x}px</label>
//         <input
//           type="range"
//           min="0"
//           max="1024"
//           value={position.x}
//           onChange={(e) => setPosition(prev => ({ ...prev, x: Number(e.target.value) }))}
//           style={{ width: '100%', margin: '0.5rem 0' }}
//         />
//       </div>
//       <div className="form-group">
//         <label>Position Y: {position.y}px</label>
//         <input
//           type="range"
//           min="0"
//           max="1024"
//           value={position.y}
//           onChange={(e) => setPosition(prev => ({ ...prev, y: Number(e.target.value) }))}
//           style={{ width: '100%', margin: '0.5rem 0' }}
//         />
//       </div>
//       <div className="form-group">
//         <label>Scale: {scale}</label>
//         <input
//           type="range"
//           min="0.1"
//           max="10"
//           step="0.1"
//           value={scale}
//           onChange={(e) => setScale(Number(e.target.value))}
//           style={{ width: '100%', margin: '0.5rem 0' }}
//         />
//       </div>
//       <button onClick={handleAddImage} style={{ padding: '0.5rem 1rem', backgroundColor: 'green', color: 'white', border: 'none', borderRadius: '4px' }}>
//         Add
//       </button>
//     </div>
//   );
// };

// export default AddImageForm;

