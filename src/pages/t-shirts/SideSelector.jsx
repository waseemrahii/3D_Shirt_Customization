import React from 'react';

const SideSelector = ({ side, setSide }) => {
  return (
    <div className="side-selector">
      {['front', 'back', 'left', 'right'].map((s) => (
        <button
          key={s}
          className={side === s ? 'active' : ''}
          onClick={() => setSide(s)}
        >
          {s.charAt(0).toUpperCase() + s.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default SideSelector;
