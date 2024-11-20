
// ///////////// 

import React, { useState } from 'react';
import { SketchPicker } from 'react-color';
import './TextForm.css'
import SizeSlider from './RangeSlider';
const TextFormControls = ({
  text, setText,
  fontSize, setFontSize,
  position, setPosition,
  textColor, setTextColor,
  fontFamily, setFontFamily,
  textRotation, setTextRotation,
  letterSpacing, setLetterSpacing,
  lineHeight, setLineHeight,
  border, setBorder,
  borderColor, setBorderColor,
  borderWidth, setBorderWidth,
  shadow, setShadow,
  shadowColor, setShadowColor,
  shadowBlur, setShadowBlur,
  shadowType, setShadowType,
  strokeOptions = [],  // Default to empty array
  setStrokeOptions,
  undo, redo, handleAddText,
  historyIndex, historyLength
}) => {
  const [currentStroke, setCurrentStroke] = useState({
    color: '#000000',
    width: 1
  });

  const handleAddStroke = () => {
    setStrokeOptions(prevStrokes => [...prevStrokes, currentStroke]);
  };

  const toggleStrokeOptions = () => {
    setStrokeOptions(prevStrokes => 
      prevStrokes.length > 0 ? [] : [currentStroke]
    );
  };

  return (
    <div>
      <div className="form-group">
        <label>Text:</label>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      </div>
       <SizeSlider />
      <div className="form-group">
        <label>Font Size:</label>
        <input type="range" min="10" max="200" value={fontSize} onChange={(e) => setFontSize(parseInt(e.target.value))} />
      </div>

      <div className="form-group">
        <label>Position X:</label>
        <input type="range" min="-500" max="500" value={position.x} onChange={(e) => setPosition({...position, x: parseInt(e.target.value)})} />
      </div>

      <div className="form-group">
        <label>Position Y:</label>
        <input type="range" min="-500" max="500" value={position.y} onChange={(e) => setPosition({...position, y: parseInt(e.target.value)})} />
      </div>

      <div className="form-group">
        <label>Text Color:</label>
        <SketchPicker color={textColor} onChangeComplete={(color) => setTextColor(color.hex)} />
      </div>

      <div className="form-group">
        <label>Font Family:</label>
        <select value={fontFamily} onChange={(e) => setFontFamily(e.target.value)}>
          <option value="Roboto">Roboto</option>
          <option value="Lora">Lora</option>
          <option value="Open Sans">Open Sans</option>
          <option value="Arial">Arial</option>
          <option value="Georgia">Georgia</option>
          <option value="Times New Roman">Times New Roman</option>
          <option value="Courier New">Courier New</option>
          <option value="Verdana">Verdana</option>
        </select>
      </div>

      <div className="form-group">
        <label>Text Rotation:</label>
        <input type="range" min="0" max="360" value={textRotation} onChange={(e) => setTextRotation(parseInt(e.target.value))} />
      </div>

      <div className="form-group">
        <label>Letter Spacing:</label>
        <input type="number" value={letterSpacing} onChange={(e) => setLetterSpacing(parseFloat(e.target.value))} />
      </div>

      <div className="form-group">
        <label>Line Height:</label>
        <input type="number" step="0.1" value={lineHeight} onChange={(e) => setLineHeight(parseFloat(e.target.value))} />
      </div>

      <div className="form-group">
        <label>Border:</label>
        <input type="checkbox" checked={border} onChange={() => setBorder(!border)} />
      </div>

      {border && (
        <>
          <div className="form-group">
            <label>Border Color:</label>
            <SketchPicker color={borderColor} onChangeComplete={(color) => setBorderColor(color.hex)} />
          </div>

          <div className="form-group">
            <label>Border Width:</label>
            <input type="number" value={borderWidth} onChange={(e) => setBorderWidth(parseInt(e.target.value))} />
          </div>
        </>
      )}

      <div className="form-group">
        <label>Shadow:</label>
        <input type="checkbox" checked={shadow} onChange={() => setShadow(!shadow)} />
      </div>

      {shadow && (
        <>
          <div className="form-group">
            <label>Shadow Type:</label>
            <select value={shadowType} onChange={(e) => setShadowType(e.target.value)}>
              <option value="drop">Drop Shadow</option>
              <option value="inner">Inner Shadow</option>
              <option value="outer">Outer Shadow</option>
              {/* Add other shadow types here */}
            </select>
          </div>

          <div className="form-group">
            <label>Shadow Color:</label>
            <SketchPicker color={shadowColor} onChangeComplete={(color) => setShadowColor(color.hex)} />
          </div>

          <div className="form-group">
            <label>Shadow Blur:</label>
            <input type="number" value={shadowBlur} onChange={(e) => setShadowBlur(parseInt(e.target.value))} />
          </div>
        </>
      )}

      <div className="form-group">
        <label>Stroke:</label>
        <input type="checkbox" checked={strokeOptions.length > 0} onChange={toggleStrokeOptions} />
      </div>

      {strokeOptions.length > 0 && (
        <>
          <div className="form-group">
            <label>Stroke Color:</label>
            <SketchPicker color={currentStroke.color} onChangeComplete={(color) => setCurrentStroke({...currentStroke, color: color.hex})} />
          </div>

          <div className="form-group">
            <label>Stroke Width:</label>
            <input type="number" value={currentStroke.width} onChange={(e) => setCurrentStroke({...currentStroke, width: parseInt(e.target.value)})} />
          </div>

          <button onClick={handleAddStroke}>Add Stroke</button>

          <div className="form-group">
            <label>Existing Strokes:</label>
            <ul>
              {strokeOptions.map((stroke, index) => (
                <li key={index}>
                  Color: {stroke.color}, Width: {stroke.width}
                </li>
              ))}
            </ul>
          </div>
        </>
      )}

      <div className="form-controls">
        <button onClick={undo} disabled={historyIndex <= 0}>Undo</button>
        <button onClick={redo} disabled={historyIndex >= historyLength - 1}>Redo</button>
        <button onClick={handleAddText}>Add Text</button>
      </div>
    </div>
  );
};

export default TextFormControls;
