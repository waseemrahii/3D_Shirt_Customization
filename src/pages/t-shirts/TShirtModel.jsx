

//////////////

import React, { useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import TShirt from './TShirt.jsx';

const TShirtModel = ({ modelPath, materials, scale, setControl, fov, selectedMaterialName }) => {
  const orbitRef = useRef();

  useEffect(() => {
    if (orbitRef.current) {
      setControl(orbitRef.current);
    }
  }, [setControl]);

  return (
    <Canvas
      style={{ height: '100%', width: '100%' }}
      camera={{ position: [0, 1.6, 3], fov: fov }}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} />
      <TShirt
        modelPath={modelPath}
        materials={materials}
        scale={scale}
        selectedMaterialName={selectedMaterialName} // Pass the selected material to TShirt
      />
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

//

