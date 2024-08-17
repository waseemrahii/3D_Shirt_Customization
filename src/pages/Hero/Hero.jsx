import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { FaPlay } from 'react-icons/fa';
import './Hero.css'
const Hero = () => {

  
  return (
    <div className='container hero-container py-4 py-md-0' style={{marginBottom:"3rem"}}>
      <div className="row align-items-center flex-md-row">
        <div className="col-md-6 order-md-1 order-1 text-container">
          <h1 className="text-center text-md-start it-solution text-black">
            We Care Your any Shirt Design
          </h1>
          <p className="lead text-center text-md-start lead">
            Proactively coordinate quality vectors vis-a-vis supply chains. Quickly engage client-centric web services.
          </p>
          <div className="text-center text-md-start">
            <div className="action-btn mt-5 d-block d-sm-flex d-lg-flex d-md-flex align-items-center">
              <Link to="/request-for-demo" className="btn me-3 red-color" >See All Design</Link>
              {/* <Link to="#" className="text-decoration-none popup-youtube d-inline-flex align-items-center watch-now-btn mt-3 mt-lg-0 mt-md-0 text-primary">
                <FaPlay className="text-primary border-2 border-primary" /> Watch Demo
              </Link> */}
            </div>
          </div>
        </div>
        <div className="col-md-6 order-md-2 order-2 img-container">
          <img src="header.svg" alt="" className="img-fluid" />
        </div>
      </div>
    </div>
  )
}

export default Hero;
