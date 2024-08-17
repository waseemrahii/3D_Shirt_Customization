// // // App.js
// // import React from 'react';
// // import TShirtImage from './TShirtImage.jsx';
// // import TShirtCustomizer from './Customizer.jsx';
// // // import './App.css'; // Add styles here

// // const MainCustomizer = () => {
// //   return (
// //     <div className="app">
// //       <header>
// //         <h1>T-Shirt Customizer</h1>
// //       </header>
// //       <main className="customizer-container">
// //         <TShirtImage />
// //         <TShirtCustomizer />
// //       </main>
// //     </div>
// //   );
// // };

// // export default MainCustomizer;


// // MainCustomizer.jsx
// import React, { useState } from 'react';
// import TShirtImage from './TShirtImage.jsx';
// import TShirtCustomizer from './TShirtCustomizer.jsx';
// import './mainShirt.css'
// const MainCustomizer = () => {
//   const [tshirtColor, setTshirtColor] = useState('#9f2929');

//   return (
//     <div className="app">
//       <header>
//         <h1>T-Shirt Customizer</h1>
//       </header>
//       <main className="customizer-container">
//         <TShirtImage color={tshirtColor} />
//         <TShirtCustomizer setTshirtColor={setTshirtColor} />
//       </main>
//     </div>
//   );
// };

// export default MainCustomizer;


import React from 'react';
import TShirtCustomizer from './TShirtCustomizer.jsx';

import ErrorBoundary from './ErrorBoundary.jsx';

function MainCustomizer() {
  return (
    <div className="App">
      <ErrorBoundary>
        <TShirtCustomizer />
      </ErrorBoundary>
    </div>
  );
}

export default MainCustomizer;
