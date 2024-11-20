import React, { useRef, useEffect } from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';

const TShirt = ({ modelPath, materials, scale, selectedMaterialName, text }) => {
  const modelRef = useRef();
  const gltf = useLoader(GLTFLoader, modelPath);

  useEffect(() => {
    if (gltf.scene && modelRef.current) {
      gltf.scene.traverse((node) => {
        if (node.isMesh) {
          const material = node.material;

          // Handle the material if it is an array
          const handleMaterial = (mat) => {
            const matchingMaterial = materials.find(matData => matData.name === mat.name);
            if (matchingMaterial) {
              mat.color.set(matchingMaterial.color);

              if (matchingMaterial.pattern) {
                const textureLoader = new THREE.TextureLoader();
                textureLoader.load(matchingMaterial.pattern, (texture) => {
                  mat.map = texture;
                  mat.needsUpdate = true;
                });
              } else if (matchingMaterial.map) {
                mat.map = matchingMaterial.map;
                mat.needsUpdate = true;
              }

              mat.needsUpdate = true;

              // Highlight the selected material
              if (selectedMaterialName === mat.name) {
                mat.emissive.set('#ff0000'); // Red color for highlight
                mat.emissiveIntensity = 1; // Optional: Increase intensity
              } else {
                mat.emissive.set('#000000'); // Reset to default
                mat.emissiveIntensity = 0; // Optional: Reset intensity
              }
            }
          };

          if (Array.isArray(material)) {
            material.forEach(handleMaterial);
          } else {
            handleMaterial(material);
          }
        }
      });
    }
  }, [gltf, materials, selectedMaterialName]);

  useEffect(() => {
    if (gltf.scene) {
      const box = new THREE.Box3().setFromObject(gltf.scene);
      const center = box.getCenter(new THREE.Vector3());
      gltf.scene.position.sub(center);
    }
  }, [gltf]);

  return (
    <>
      <primitive object={gltf.scene} ref={modelRef} scale={scale} />
      {text && (
        <mesh position={[0, 0, 0]} renderOrder={1}>
          <textGeometry args={[text, { font: 'helvetiker', size: 1, height: 0.1 }]} />
          <meshBasicMaterial color="white" />
        </mesh>
      )}
    </>
  );
};

export default TShirt;
