import React from 'react';

const FontSelectionModal = ({ fonts, selectedFont, setSelectedFont, onClose }) => {
  return (
    <div className="uk-modal-dialog uk-modal-body uk-width-1-2@m uk-width-3-5@l uk-width-2-3@xl">
      <button className="uk-modal-close-default uk-icon uk-close" type="button" uk-close="" onClick={onClose}>
        <svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg" data-svg="close-icon">
          <line fill="none" stroke="#000" strokeWidth="1.1" x1="1" y1="1" x2="13" y2="13"></line>
          <line fill="none" strokeWidth="1.1" x1="13" y1="1" x2="1" y2="13"></line>
        </svg>
      </button>
      <div className="prolook-font-main-container">
        <h5 className="uk-margin-remove-top uk-margin-small-bottom uk-text-uppercase uk-text-bold">Select Font</h5>
        <ul>
          {fonts.map((font) => (
            <li
              key={font}
              style={{
                fontFamily: font,
                cursor: 'pointer',
                padding: '10px',
                backgroundColor: selectedFont === font ? '#f0f0f0' : 'transparent',
              }}
              onClick={() => setSelectedFont(font)}
            >
              {font}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FontSelectionModal;
