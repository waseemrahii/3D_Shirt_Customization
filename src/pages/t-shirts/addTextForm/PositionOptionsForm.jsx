import React from 'react';

const PositionOptionsForm = ({ position, setPosition, textRotation, setTextRotation, letterSpacing, setLetterSpacing, lineHeight, setLineHeight }) => {
  return (
    <div>
      <div className="form-group">
        <label>Position X: {position.x}px</label>
        <input
          type="range"
          min="0"
          max="1024"
          value={position.x}
          onChange={(e) => setPosition((prev) => ({ ...prev, x: Number(e.target.value) }))}
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
          onChange={(e) => setPosition((prev) => ({ ...prev, y: Number(e.target.value) }))}
          style={{ width: '100%', margin: '0.5rem 0' }}
        />
      </div>
      <div className="form-group">
        <label>Rotation: {textRotation}°</label>
        <input
          type="range"
          min="0"
          max="360"
          value={textRotation}
          onChange={(e) => setTextRotation(Number(e.target.value))}
          style={{ width: '100%', margin: '0.5rem 0' }}
        />
      </div>
      <div className="form-group">
        <label>Letter Spacing: {letterSpacing}px</label>
        <input
          type="range"
          min="0"
          max="50"
          value={letterSpacing}
          onChange={(e) => setLetterSpacing(Number(e.target.value))}
          style={{ width: '100%', margin: '0.5rem 0' }}
        />
      </div>
      <div className="form-group">
        <label>Line Height: {lineHeight}</label>
        <input
          type="range"
          min="0.5"
          max="3"
          step="0.1"
          value={lineHeight}
          onChange={(e) => setLineHeight(Number(e.target.value))}
          style={{ width: '100%', margin: '0.5rem 0' }}
        />
      </div>
    </div>
  );
};

export default PositionOptionsForm;
