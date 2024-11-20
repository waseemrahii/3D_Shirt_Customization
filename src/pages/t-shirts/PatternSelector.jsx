
import React from 'react';

const patterns = [
  { id: '1', name: 'Pattern 1', imageUrl: '/pattern1.png' },
  { id: '2', name: 'Pattern 2', imageUrl: '/pattern2.png' },
  { id: '0', name: 'Pattern 0', imageUrl: '/pattern.png' },
  { id: '5', name: 'Pattern 4', imageUrl: '/pattern3.png' },
  // Add more patterns as needed
];

const PatternSelector = ({ onSelectPattern, onClose }) => {
  return (
    <div className="pattern-selector container">
      <h3>Select a Pattern</h3>
      <button className="close-btn" onClick={onClose}>Close</button>
      <div className="pattern-grid">
        {patterns.map(pattern => (
          <div
            key={pattern.id}
            className="pattern-item"
            onClick={() => onSelectPattern(pattern.imageUrl)}
          >
            <img src={pattern.imageUrl} alt={pattern.name} />
            <p>{pattern.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PatternSelector;
