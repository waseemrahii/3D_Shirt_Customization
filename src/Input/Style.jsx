// import React from 'react';
// import './StyledInput.css'; // Import your CSS file
// import { FiMail } from 'react-icons/fi';
// const StyledInput = () => {
 
//     return (
//       <div className="container" style={{marginTop:"8rem"}}>
//         <div className="inputBox">
//         <FiMail className="icon" />
//         <input type="text" required="required" />
//         <span>Email</span>
//     </div>
  
//       </div>
//     );
  
// }

// export default StyledInput;


// import React from 'react';
// import { FiMail } from 'react-icons/fi'; // Import the desired icon from react-icons
// import './StyledInput.css'; // Import your CSS file

// const StyledInput = () => {
//   return (
//     <div className="container" style={{ marginTop: "8rem" }}>
//       <div className="inputBox">
//         <FiMail className="icon" />
//         <input type="text" required="required" />


import React from 'react';
import './StyledInput.css'; // Import your CSS file

const StyledInput = ({ placeholderText, Icon }) => {
  return (
    <div className="container" style={{ marginTop: "8rem" }}>
      <div className="inputBox">
        <Icon className="icon" />
        <input type="text" required="required" />
        <span>{placeholderText}</span>
      </div>
    </div>
  );
};

export default StyledInput;//         <label>Email:</label>
//       </div>
//     </div>
//   );
// };

// export default StyledInput;
