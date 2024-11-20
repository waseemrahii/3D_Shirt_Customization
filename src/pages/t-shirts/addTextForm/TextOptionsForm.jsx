import React from 'react';
import { SketchPicker } from 'react-color';

const TextOptionsForm = ({ text, setText, fontSize, setFontSize, textColor, setTextColor, fontFamily, setFontFamily }) => {
  return (
    <div>
      <div className="form-group">
        <label>Text:</label>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={{ width: '100%', margin: '0.5rem 0' }}
        />
      </div>
      <div className="form-group">
        <label>Font Size: {fontSize}px</label>
        <input
          type="range"
          min="10"
          max="150"
          value={fontSize}
          onChange={(e) => setFontSize(Number(e.target.value))}
          style={{ width: '100%', margin: '0.5rem 0' }}
        />
      </div>
      <div className="form-group">
        <label>Text Color:</label>
        <SketchPicker
          color={textColor}
          onChange={(color) => setTextColor(color.hex)}
          style={{ width: '100%', margin: '0.5rem 0' }}
        />
      </div>
      <div className="form-group">
        <label>Font Family:</label>
        <select
          value={fontFamily}
          onChange={(e) => setFontFamily(e.target.value)}
          style={{ width: '100%', margin: '0.5rem 0' }}
        >
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
    </div>
  );
};

export default TextOptionsForm;
