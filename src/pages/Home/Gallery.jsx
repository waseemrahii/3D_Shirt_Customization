

// import React from 'react';
// import './Gallery.css';
// import itemsData from './itemsData.jsx'; // Ensure this path is correct

// const Gallery = () => {
//   return (
//     <section className="cd-gallery container">
//       <ul>
//         {itemsData.map((item) => (
//           <li key={item.id} className={`mix upper ${item.className} uniform-wrapper`} data-name={item.name}>
//              <span className='price'>
//             {item.adultPrice}
//              </span>
//             <div className="image-container">
//               <a href={item.customizeLink} className="flip">
//                 <img className="front" src={item.frontImageSrc} alt={item.name} />
//                 <img className="side" src={item.sideImageSrc} alt={item.name} />
//               </a>
//             </div>
//             <div className="unform-info">
//               <span>{item.name}</span>
//               <span>
//                  <a href={item.customizeLink} className="banner-button">Customize</a>
//                 </span>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </section>
//   );
// };

// export default Gallery;





import React from 'react';
import { Link } from 'react-router-dom'; // For navigation
import './Gallery.css';
import itemsData from './itemsData.jsx'; // Ensure this path is correct

const Gallery = () => {
  return (
    <section className="cd-gallery container">
      <ul>
        {itemsData.map((item) => (
          <li key={item.id} className={`mix upper ${item.className} uniform-wrapper`} data-name={item.name}>
            <span className='price'>{item.adultPrice}</span>
            <div className="image-container">
              <Link to={`/customizer/${item.id}`} className="flip"> {/* Updated to Link */}
                <img className="front" src={item.frontImageSrc} alt={item.name} />
                <img className="side" src={item.sideImageSrc} alt={item.name} />
              </Link>
            </div>
            <div className="uniform-info ">
              <span>{item.name}</span>
              <span>
                <Link to={`/customizer/${item.id}`} className="banner-button">Customize</Link> {/* Updated to Link */}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Gallery;
