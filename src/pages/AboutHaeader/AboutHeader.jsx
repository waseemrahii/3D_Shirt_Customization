import React from 'react';
import './AboutHeader.css'; // Import the scoped CSS file
import { Link } from 'react-router-dom';

const AboutHeader = () => {
    return (
        <section className="about-header-section">
            <div className="about-header-container">
                <div className="about-header-row">
                    <div className="about-header-col-12">
                        <div className="section-heading-wrap p-5">
                            <div className="about-content-left">
                                <div className="about-info ">
                                    <h1 className="fw-bold display-5"> Grow your Business &amp; Customer Satisfaction with TShirts </h1>
                                    <p className="leads"> Dynamically disintermediate technically sound technologies with compelling quality vectors error-free communities. </p>
                                    <Link to={"/career"} className="btn red-color mt-4 me-3">Open Positions</Link>
                                    <Link to={"/about-us"} className="btn btn-soft-primary mt-4">Meet Our Team</Link>
                                </div>
                                {/* <img src="shirts3.jpeg" alt="about" className="img-fluid about-img-first mt-5 rounded-custom shadow "  /> */}
                            </div>
                            <div className="about-content-right">
                                <img src="shirt2.jpg " alt="about" className="img-fluid mb-5 rounded-custom shadow" />
                                {/* <img src="shirt1.jpeg" alt="about" className="rounded-custom about-img-last shadow" /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white-overlay"></div>
        </section>
    );
}

export default AboutHeader;
