import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css'; // Ensure this file contains the necessary styles

const Hero = () => {
  return (
    <div className="cd-wrapper ">
      <h1>T Shirts Customizer</h1>
      <div id="breadcrumbs">
        <span>
          <span>
            <Link to="/">Home</Link> » <span className="breadcrumb_last" aria-current="page">T Shirts Customizer</span>
          </span>
        </span>
      </div>
    </div>
  );
};

export default Hero;
