
import React from 'react';
import './OfficeLocation.css'

const OfficeLocation = () => {
  const locations = [
    { city: 'Singapore', address: '4636 Bombardier Way', state: 'Worthington', country: 'California', zip: '94102', img: 'https://th.bing.com/th/id/OIP.z90lL_2daz5_iWkI9psrTAHaEK?rs=1&pid=ImgDetMain' },
    { city: 'Los Angeles', address: '794 Mcallister St.', state: 'Oak Harbor', country: 'Washington', zip: '98277', img: 'https://th.bing.com/th/id/OIP.z90lL_2daz5_iWkI9psrTAHaEK?rs=1&pid=ImgDetMain' },
    { city: 'New York', address: '4219 Snowbird Lane', state: 'Carthage', country: 'New York', zip: '13619', img: 'islmd.jpg' },
    { city: 'Berlin City', address: 'Brandenburgische Straße', state: 'Berlin Kreuzberg', country: 'Berlin', zip: '10997', img: 'https://th.bing.com/th/id/OIP.z90lL_2daz5_iWkI9psrTAHaEK?rs=1&pid=ImgDetMain' }
  ];

  return (
    <section className="office-address-section ptb-120">
      <div className="container">
        <div className="row justify-content-center office-row">

          {locations.map((location, index) => (
            <div key={index} className="col-lg-3 col-md-6 mt-4 mt-lg-0 mt-xl-0" style={{width:"32%", gap:"1rem"}}>
              <div className="rounded-custom border d-block office-address overflow-hidden z-2">
                <div className="office-content text-center p-4">
                  <img src={location.img} alt={`office-${index + 1}`} className="img-fluid office-image" />
                  <span className="office-overlay"></span>
                  <div className="office-info">
                    <h5>{location.city}</h5>
                    <address>{location.address}<br />{location.state}, {location.country}, {location.zip}</address>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfficeLocation;
