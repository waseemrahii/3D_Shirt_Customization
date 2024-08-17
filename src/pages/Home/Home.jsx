
import React from 'react';
import Gallery from './Gallery'; // Import the Gallery component
import Hero from './Hero';

const Home = () => {
  return (
    <div style={{ marginTop: "4rem" }}>
       <Hero />
      <Gallery />
    </div>
  );
};

export default Home;
