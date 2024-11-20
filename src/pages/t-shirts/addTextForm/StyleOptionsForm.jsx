import React from 'react';
import { SketchPicker } from 'react-color';

const StyleOptionsForm = ({ border, setBorder, borderColor, setBorderColor, borderWidth, setBorderWidth, shadow, setShadow, shadowColor, setShadowColor, shadowBlur, setShadowBlur, stroke, setStroke, strokeColor, setStrokeColor, strokeWidth, setStrokeWidth }) => {
  return (
    <div>
      <div className="form-group">
        <label>Border:</label>
        <input
          type="checkbox"
          checked={border}
          onChange={() => setBorder(!border)}
          style={{ margin: '0.5rem 0' }}
        />
        {border && (
          <>
            <label>Border Color:</label>
            <SketchPicker
              color={borderColor}
              onChange={(color) => setBorderColor(color.hex)}
              style={{ width: '100%', margin: '0.5rem 0' }}
            />
            <label>Border Width: {borderWidth}px</label>
            <input
              type="range"
              min="1"
              max="20"
              value={borderWidth}
              onChange={(e) => setBorderWidth(Number(e.target.value))}
              style={{ width: '100%', margin: '0.5rem 0' }}
            />
          </>
        )}
      </div>
      <div className="form-group">
        <label>Shadow:</label>
        <input
          type="checkbox"
          checked={shadow}
          onChange={() => setShadow(!shadow)}
          style={{ margin: '0.5rem 0' }}
        />
        {shadow && (
          <>
            <label>Shadow Color:</label>
            <SketchPicker
              color={shadowColor}
              onChange={(color) => setShadowColor(color.hex)}
              style={{ width: '100%', margin: '0.5rem 0' }}
            />
            <label>Shadow Blur: {shadowBlur}px</label>
            <input
              type="range"
              min="0"
              max="50"
              value={shadowBlur}
              onChange={(e) => setShadowBlur(Number(e.target.value))}
              style={{ width: '100%', margin: '0.5rem 0' }}
            />
          </>
        )}
      </div>
      <div className="form-group">
        <label>Stroke:</label>
        <input
          type="checkbox"
          checked={stroke}
          onChange={() => setStroke(!stroke)}
          style={{ margin: '0.5rem 0' }}
        />
        {stroke && (
          <>
            <label>Stroke Color:</label>
            <SketchPicker
              color={strokeColor}
              onChange={(color) => setStrokeColor(color.hex)}
              style={{ width: '100%', margin: '0.5rem 0' }}
            />
            <label>Stroke Width: {strokeWidth}px</label>
            <input
              type="range"
              min="1"
              max="20"
              value={strokeWidth}
              onChange={(e) => setStrokeWidth(Number(e.target.value))}
              style={{ width: '100%', margin: '0.5rem 0' }}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default StyleOptionsForm;
