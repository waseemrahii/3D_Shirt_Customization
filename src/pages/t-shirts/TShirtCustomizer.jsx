///////////////

import React, { useState, useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import TShirtModel from './TShirtModel.jsx';
import AddTextForm from './AddTextForm.jsx';
import AddImageForm from './AddImageForm.jsx';
import ShirtOptions from './ShirtOptions.jsx';
import PatternSelector from './PatternSelector.jsx';
import './mainShirt.css';

const TShirtCustomizer = ({ modelPath, materials, scale, fov }) => {
  const controlRef = useRef(null);

  const [currentMaterials, setCurrentMaterials] = useState(materials);
  const [activeView, setActiveView] = useState(0);
  const [uniqueTitles] = useState(Array.from(new Set(materials.map(mat => mat.title))));
  const [showTextAddition, setShowTextAddition] = useState(false);
  const [showImageAddition, setShowImageAddition] = useState(false);
  const [showPatternSelector, setShowPatternSelector] = useState(false);
  const [selectedMaterial, setSelectedMaterial] = useState(uniqueTitles[0] || '');
  const [text, setText] = useState(''); // State for text

  const handleNext = () => {
    setActiveView(prevView => (prevView + 1) % uniqueTitles.length);
  };

  const handlePrev = () => {
    setActiveView(prevView => (prevView - 1 + uniqueTitles.length) % uniqueTitles.length);
  };

  const currentTitle = uniqueTitles[activeView] || '';
  const filteredMaterials = currentMaterials.filter(mat => mat.title === currentTitle);

  const handleAddImage = (imageData) => {
    setShowImageAddition(false);
  };

  const handlePatternSelect = (patternUrl) => {
    const updatedMaterials = currentMaterials.map(mat => 
      mat.title === currentTitle ? { ...mat, pattern: patternUrl } : mat
    );
    setCurrentMaterials(updatedMaterials);
    setShowPatternSelector(false);
  };

  const handleTextAdd = (newText) => {
    setText(newText); // Update the text state
    setShowTextAddition(false);
  };

  return (
    <div className="customizer-container container">
      <div className="model-container mt-10">
        <TShirtModel
          modelPath={modelPath}
          materials={currentMaterials}
          scale={scale}
          setControl={controlRef}
          fov={fov}
          selectedMaterialName={selectedMaterial}
          text={text} // Pass text to TShirtModel
        />
      </div>
      <div className="controls-container p-4 container" style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.1)" }}>
        {/* <div className="options_panel_header mt-5" style={{marginTop:"5rem",boxShadow: "10px 10px 10px rgba(0,0,0,0.1)", display: "flex", gap: "1rem"  }}>
          <div className="prev double">
            <FaChevronLeft onClick={handlePrev} />
          </div>
          <div className="title-container">
            <>{currentTitle}</>
          </div>
          <div className="next double">
            <FaChevronRight onClick={handleNext} />
          </div>
        </div> */}
        
        {showTextAddition ? (
          <AddTextForm
            currentMaterials={currentMaterials}
            setCurrentMaterials={setCurrentMaterials}
            uniqueTitles={uniqueTitles}
            activeView={activeView}
            onAddText={handleTextAdd}
            onClose={() => setShowTextAddition(false)}
          />
        ) : showImageAddition ? (
          <AddImageForm
            currentMaterials={currentMaterials}
            setCurrentMaterials={setCurrentMaterials}
            uniqueTitles={uniqueTitles}
            activeView={activeView}
            onClose={() => setShowImageAddition(false)}
          />
        ) : showPatternSelector ? (
          <PatternSelector
            onSelectPattern={handlePatternSelect}
            onClose={() => setShowPatternSelector(false)}
          />
        ) : (
          <ShirtOptions
            currentMaterials={currentMaterials}
            setCurrentMaterials={setCurrentMaterials}
            uniqueTitles={uniqueTitles}
            activeView={activeView}
            onAddText={() => setShowTextAddition(true)}
            onAddImage={() => setShowImageAddition(true)}
            onAddPattern={() => setShowPatternSelector(true)}
            onMaterialSelect={(materialName) => setSelectedMaterial(materialName)}
          />
        )}
      </div>
    </div>
  );
};

export default TShirtCustomizer;

