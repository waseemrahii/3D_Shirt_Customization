// // //////////////////////////////

// import React, { useRef, useEffect } from 'react';
// import { Canvas, useLoader } from '@react-three/fiber';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// import { OrbitControls } from '@react-three/drei';
// import * as THREE from 'three';

// const TShirt = ({ modelPath, materials, scale }) => {
//   const modelRef = useRef();
//   const gltf = useLoader(GLTFLoader, modelPath);

//   useEffect(() => {
//     if (gltf.scene && modelRef.current) {
//       gltf.scene.traverse((node) => {
//         if (node.isMesh) {
//           const material = node.material;

//           if (Array.isArray(material)) {
//             material.forEach((mat) => {
//               const matchingMaterial = materials.find(matData => matData.name === mat.name);
//               if (matchingMaterial) {
//                 mat.color.set(matchingMaterial.color);
//                 mat.needsUpdate = true;
//               }
//             });
//           } else {
//             const matchingMaterial = materials.find(matData => matData.name === material.name);
//             if (matchingMaterial) {
//               material.color.set(matchingMaterial.color);
//               material.needsUpdate = true;
//             }
//           }
//         }
//       });
//     }
//   }, [gltf, materials, modelPath]);

//   useEffect(() => {
//     const box = new THREE.Box3().setFromObject(gltf.scene);
//     const center = box.getCenter(new THREE.Vector3());
//     gltf.scene.position.sub(center);
//   }, [gltf]);

//   return (
//     <primitive object={gltf.scene} ref={modelRef} scale={scale} />
//   );
// };

// const TShirtModel = ({ modelPath, materials, setControl, scale, fov }) => {
//   const orbitRef = useRef();

//   useEffect(() => {
//     if (orbitRef.current) {
//       setControl(orbitRef.current);
//     }
//   }, [setControl]);

//   return (
//     <Canvas
//       style={{ height: '100%', width: '100%' }}
//       camera={{ position: [0, 1.6, 3], fov: fov }} // Use the dynamic FOV prop here
//       gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
//     >
//       <ambientLight intensity={0.5} />
//       <directionalLight position={[10, 10, 5]} intensity={1.5} />
//       <TShirt modelPath={modelPath} materials={materials} scale={scale} />
//       <OrbitControls
//         ref={orbitRef}
//         minDistance={2}
//         maxDistance={5}
//         enablePan={false}
//         enableRotate={true}
//         enableZoom={true}
//         target={[0, 0, 0]}
//         enableDamping={false}
//         dampingFactor={0}
//         zoomSpeed={0.5}
//       />
//     </Canvas>
//   );
// };

// export default TShirtModel;





////////////////// with t-shirt with custom adding text 

// import React, { useRef, useEffect } from 'react';
// import { Canvas, useLoader } from '@react-three/fiber';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// import { OrbitControls } from '@react-three/drei';
// import * as THREE from 'three';

// const TShirt = ({ modelPath, materials, scale, text, fontSize, textColor, fontFamily, selectedMaterial }) => {
//   const modelRef = useRef();
//   const gltf = useLoader(GLTFLoader, modelPath);

//   useEffect(() => {
//     if (gltf.scene && modelRef.current) {
//       gltf.scene.traverse((node) => {
//         if (node.isMesh) {
//           const material = node.material;

//           if (Array.isArray(material)) {
//             material.forEach((mat) => {
//               const matchingMaterial = materials.find(matData => matData.name === mat.name);
//               if (matchingMaterial) {
//                 mat.color.set(matchingMaterial.color);
//                 mat.needsUpdate = true;
//               }
//             });
//           } else {
//             const matchingMaterial = materials.find(matData => matData.name === material.name);
//             if (matchingMaterial) {
//               material.color.set(matchingMaterial.color);
//               material.needsUpdate = true;
//             }
//           }

//           if (selectedMaterial && node.name === selectedMaterial) {
//             const canvas = document.createElement('canvas');
//             const context = canvas.getContext('2d');
//             const textureSize = 1024;

//             canvas.width = textureSize;
//             canvas.height = textureSize;
//             context.clearRect(0, 0, canvas.width, canvas.height);
//             context.fillStyle = textColor;
//             context.font = `${fontSize}px ${fontFamily}`;
//             context.textAlign = 'center';
//             context.textBaseline = 'middle';
//             context.fillText(text, canvas.width / 2, canvas.height / 2);

//             const textTexture = new THREE.CanvasTexture(canvas);
//             material.map = textTexture;
//             material.needsUpdate = true;
//           }
//         }
//       });
//     }
//   }, [gltf, materials, text, fontSize, textColor, fontFamily, selectedMaterial]);

//   return <primitive ref={modelRef} object={gltf.scene} scale={scale} />;
// };

// const TShirtModel = ({ modelPath, materials, scale, setControl, fov, text, fontSize, textColor, fontFamily, selectedMaterial }) => {
//   const orbitRef = useRef(null);

//   useEffect(() => {
//     if (setControl) {
//       setControl(orbitRef);
//     }
//   }, [setControl]);

//   return (
//     <Canvas
//       camera={{ position: [0, 0, 5], fov }}
//       style={{ height: '500px', width: '500px', touchAction: 'none' }}
//       gl={{ preserveDrawingBuffer: true }}
//     >
//       <ambientLight intensity={0.5} />
//       <directionalLight position={[10, 10, 10]} intensity={1} />
//       <TShirt
//         modelPath={modelPath}
//         materials={materials}
//         scale={scale}
//         text={text}
//         fontSize={fontSize}
//         textColor={textColor}
//         fontFamily={fontFamily}
//         selectedMaterial={selectedMaterial}
//       />
//       <OrbitControls ref={orbitRef} />
//     </Canvas>
//   );
// };

// export default TShirtModel;



// import React, { useRef, useEffect } from 'react';
// import { Canvas, useLoader } from '@react-three/fiber';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// import { OrbitControls } from '@react-three/drei';
// import * as THREE from 'three';

// const TShirt = ({ modelPath, materials, scale, text, fontSize, textColor, fontFamily, selectedMaterial }) => {
//   const modelRef = useRef();
//   const gltf = useLoader(GLTFLoader, modelPath);

//   useEffect(() => {
//     if (gltf.scene && modelRef.current) {
//       gltf.scene.traverse((node) => {
//         if (node.isMesh) {
//           const material = node.material;

//           if (Array.isArray(material)) {
//             material.forEach((mat) => {
//               const matchingMaterial = materials.find(matData => matData.name === mat.name);
//               if (matchingMaterial) {
//                 mat.color.set(matchingMaterial.color);
//                 mat.needsUpdate = true;
//               }
//             });
//           } else {
//             const matchingMaterial = materials.find(matData => matData.name === material.name);
//             if (matchingMaterial) {
//               material.color.set(matchingMaterial.color);
//               material.needsUpdate = true;
//             }
//           }

//           if (selectedMaterial && node.name === selectedMaterial) {
//             const canvas = document.createElement('canvas');
//             const context = canvas.getContext('2d');
//             const textureSize = 1024;

//             canvas.width = textureSize;
//             canvas.height = textureSize;
//             context.clearRect(0, 0, canvas.width, canvas.height);
//             context.fillStyle = textColor;
//             context.font = `${fontSize}px ${fontFamily}`;
//             context.textAlign = 'center';
//             context.textBaseline = 'middle';
//             context.fillText(text, canvas.width / 2, canvas.height / 2);

//             const textTexture = new THREE.CanvasTexture(canvas);
//             material.map = textTexture;
//             material.needsUpdate = true;
//           }
//         }
//       });

//       // Center the model
//       const box = new THREE.Box3().setFromObject(gltf.scene);
//       const center = box.getCenter(new THREE.Vector3());
//       gltf.scene.position.sub(center);
//     }
//   }, [gltf, materials, text, fontSize, textColor, fontFamily, selectedMaterial]);

//   return <primitive ref={modelRef} object={gltf.scene} scale={scale} />;
// };

// const TShirtModel = ({ modelPath, materials, scale, setControl, fov, text, fontSize, textColor, fontFamily, selectedMaterial }) => {
//   const orbitRef = useRef(null);

//   useEffect(() => {
//     if (setControl && orbitRef.current) {
//       setControl.current = orbitRef.current;
//     }
//   }, [setControl]);

//   return (
//     <Canvas
//       camera={{ position: [0, 1.6, 3], fov }}
//       style={{ height: '500px', width: '500px', touchAction: 'none' }}
//       gl={{ preserveDrawingBuffer: true }}
//     >
//       <ambientLight intensity={0.5} />
//       <directionalLight position={[10, 10, 10]} intensity={1} />
//       <TShirt
//         modelPath={modelPath}
//         materials={materials}
//         scale={scale}
//         text={text}
//         fontSize={fontSize}
//         textColor={textColor}
//         fontFamily={fontFamily}
//         selectedMaterial={selectedMaterial}
//       />
//       <OrbitControls
//         ref={orbitRef}
//         enablePan={false} // Disable panning
//         enableRotate={true}
//         enableZoom={true}
//         target={[0, 0, 0]} // Keep rotation centered on the model
//         maxPolarAngle={Math.PI / 2} // Limit rotation to horizontal
//         minPolarAngle={0} // Prevent downward rotation
//       />
//     </Canvas>
//   );
// };

// export default TShirtModel;





// import React, { useRef, useEffect } from 'react';
// import { Canvas, useLoader } from '@react-three/fiber';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// import { OrbitControls } from '@react-three/drei';
// import * as THREE from 'three';

// const TShirt = ({ modelPath, materials, scale }) => {
//   const modelRef = useRef();
//   const gltf = useLoader(GLTFLoader, modelPath);

//   useEffect(() => {
//     if (gltf.scene && modelRef.current) {
//       gltf.scene.traverse((node) => {
//         if (node.isMesh) {
//           const material = node.material;

//           if (Array.isArray(material)) {
//             material.forEach((mat) => {
//               const matchingMaterial = materials.find(matData => matData.name === mat.name);
//               if (matchingMaterial) {
//                 mat.color.set(matchingMaterial.color);

//                 // If a custom texture is set, apply it
//                 if (matchingMaterial.texture) {
//                   mat.map = matchingMaterial.texture;
//                 }

//                 mat.needsUpdate = true;
//               }
//             });
//           } else {
//             const matchingMaterial = materials.find(matData => matData.name === material.name);
//             if (matchingMaterial) {
//               material.color.set(matchingMaterial.color);

//               // If a custom texture is set, apply it
//               if (matchingMaterial.texture) {
//                 material.map = matchingMaterial.texture;
//               }

//               material.needsUpdate = true;
//             }
//           }
//         }
//       });
//     }
//   }, [gltf, materials, modelPath]);

//   useEffect(() => {
//     const box = new THREE.Box3().setFromObject(gltf.scene);
//     const center = box.getCenter(new THREE.Vector3());
//     gltf.scene.position.sub(center);
//   }, [gltf]);

//   return (
//     <primitive object={gltf.scene} ref={modelRef} scale={scale} />
//   );
// };

// const TShirtModel = ({ modelPath, materials, setControl, scale, fov }) => {
//   const orbitRef = useRef();

//   useEffect(() => {
//     if (orbitRef.current) {
//       setControl(orbitRef.current);
//     }
//   }, [setControl]);

//   return (
//     <Canvas
//       style={{ height: '100%', width: '100%' }}
//       camera={{ position: [0, 1.6, 3], fov: fov }} // Use the dynamic FOV prop here
//       gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
//     >
//       <ambientLight intensity={0.5} />
//       <directionalLight position={[10, 10, 5]} intensity={1.5} />
//       <TShirt modelPath={modelPath} materials={materials} scale={scale} />
//       <OrbitControls
//         ref={orbitRef}
//         minDistance={2}
//         maxDistance={5}
//         enablePan={false}
//         enableRotate={true}
//         enableZoom={true}
//         target={[0, 0, 0]}
//         enableDamping={false}
//         dampingFactor={0}
//         zoomSpeed={0.5}
//       />
//     </Canvas>
//   );
// };

// export default TShirtModel;




// import React, { useRef, useEffect } from 'react';
// import { Canvas, useLoader } from '@react-three/fiber';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// import { OrbitControls } from '@react-three/drei';
// import * as THREE from 'three';

// const TShirt = ({ modelPath, materials, scale }) => {
//   const modelRef = useRef();
//   const gltf = useLoader(GLTFLoader, modelPath);

//   useEffect(() => {
//     if (gltf.scene && modelRef.current) {
//       gltf.scene.traverse((node) => {
//         if (node.isMesh) {
//           const material = node.material;

//           if (Array.isArray(material)) {
//             material.forEach((mat) => {
//               const matchingMaterial = materials.find(matData => matData.name === mat.name);
//               if (matchingMaterial) {
//                 mat.color.set(matchingMaterial.color);

//                 // If a custom texture is set, apply it
//                 if (matchingMaterial.texture) {
//                   mat.map = matchingMaterial.texture;
//                 }

//                 mat.needsUpdate = true;
//               }
//             });
//           } else {
//             const matchingMaterial = materials.find(matData => matData.name === material.name);
//             if (matchingMaterial) {
//               material.color.set(matchingMaterial.color);

//               // If a custom texture is set, apply it
//               if (matchingMaterial.texture) {
//                 material.map = matchingMaterial.texture;
//               }

//               material.needsUpdate = true;
//             }
//           }
//         }
//       });
//     }
//   }, [gltf, materials, modelPath]);

//   useEffect(() => {
//     const box = new THREE.Box3().setFromObject(gltf.scene);
//     const center = box.getCenter(new THREE.Vector3());
//     gltf.scene.position.sub(center);
//   }, [gltf]);

//   return (
//     <primitive object={gltf.scene} ref={modelRef} scale={scale} />
//   );
// };

// const TShirtModel = ({ modelPath, materials, setControl, scale, fov }) => {
//   const orbitRef = useRef();

//   useEffect(() => {
//     if (orbitRef.current) {
//       setControl(orbitRef.current);
//     }
//   }, [setControl]);

//   return (
//     <Canvas
//       style={{ height: '100%', width: '100%' }}
//       camera={{ position: [0, 1.6, 3], fov: fov }} // Use the dynamic FOV prop here
//       gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
//     >
//       <ambientLight intensity={0.5} />
//       <directionalLight position={[10, 10, 5]} intensity={1.5} />
//       <TShirt modelPath={modelPath} materials={materials} scale={scale} />
//       <OrbitControls
//         ref={orbitRef}
//         minDistance={2}
//         maxDistance={5}
//         enablePan={false}
//         enableRotate={true}
//         enableZoom={true}
//         target={[0, 0, 0]}
//         enableDamping={false}
//         dampingFactor={0}
//         zoomSpeed={0.5}
//       />
//     </Canvas>
//   );
// };

// export default TShirtModel;


import React, { useRef, useEffect } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const TShirt = ({ modelPath, materials, scale }) => {
  const modelRef = useRef();
  const gltf = useLoader(GLTFLoader, modelPath);

  useEffect(() => {
    if (gltf.scene && modelRef.current) {
      gltf.scene.traverse((node) => {
        if (node.isMesh) {
          const material = node.material;

          if (Array.isArray(material)) {
            material.forEach((mat) => {
              const matchingMaterial = materials.find(matData => matData.name === mat.name);
              if (matchingMaterial) {
                mat.color.set(matchingMaterial.color);

                // Apply the custom texture if it exists
                if (matchingMaterial.map) {
                  mat.map = matchingMaterial.map;
                }

                mat.needsUpdate = true;
              }
            });
          } else {
            const matchingMaterial = materials.find(matData => matData.name === material.name);
            if (matchingMaterial) {
              material.color.set(matchingMaterial.color);

              // Apply the custom texture if it exists
              if (matchingMaterial.map) {
                material.map = matchingMaterial.map;
              }

              material.needsUpdate = true;
            }
          }
        }
      });
    }
  }, [gltf, materials, modelPath]);

  useEffect(() => {
    const box = new THREE.Box3().setFromObject(gltf.scene);
    const center = box.getCenter(new THREE.Vector3());
    gltf.scene.position.sub(center);
  }, [gltf]);

  return (
    <primitive object={gltf.scene} ref={modelRef} scale={scale} />
  );
};

const TShirtModel = ({ modelPath, materials, setControl, scale, fov }) => {
  const orbitRef = useRef();

  useEffect(() => {
    if (orbitRef.current) {
      setControl(orbitRef.current);
    }
  }, [setControl]);

  return (
    <Canvas
      style={{ height: '100%', width: '100%' }}
      camera={{ position: [0, 1.6, 3], fov: fov }} // Use the dynamic FOV prop here
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} />
      <TShirt modelPath={modelPath} materials={materials} scale={scale} />
      <OrbitControls
        ref={orbitRef}
        minDistance={2}
        maxDistance={5}
        enablePan={false}
        enableRotate={true}
        enableZoom={true}
        target={[0, 0, 0]}
        enableDamping={false}
        dampingFactor={0}
        zoomSpeed={0.5}
      />
    </Canvas>
  );
};

export default TShirtModel;

