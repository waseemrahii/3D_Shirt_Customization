import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
// import './SearchForm.css'; // Import the CSS file for styles

const SearchForm = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // Implement the search functionality here
    console.log('Searching for:', searchQuery);
  };

  return (
    <div className="cell small-8 medium-8 large-3 xxlarge-3 right snipcss-mzJFb">
      <div className="search-form-wrapper">
        <label htmlFor="search">
          {/* <span>Search</span> */}
          <div className="search-input-wrapper">
            <input
              autoComplete="off"
              className="icon-search"
              name="search"
              type="search"
              id="search"
              placeholder="Search"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <FaSearch id="filtersubmit" className="search-icon" onClick={handleSearchSubmit} />
          </div>
        </label>
      </div>
      <ul className="list-group" id="result"></ul>
    </div>
  );
};

export default SearchForm;
