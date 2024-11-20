// Controls.js
import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Controls = ({ activeView, uniqueTitles, handlePrev, handleNext }) => {
  return (
    <div className="options_panel_header mb-4" style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.1)", display: "flex", gap: "1rem" }}>
      <div className="prev double">
        <FaChevronLeft onClick={handlePrev} />
      </div>
      <div className="title-container">
        <h3>{uniqueTitles[activeView]}</h3>
      </div>
      <div className="next double">
        <FaChevronRight onClick={handleNext} />
      </div>
    </div>
  );
};

export default Controls;
