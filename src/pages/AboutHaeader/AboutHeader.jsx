// import React from 'react';
// import './AboutHeader.css'; // Assuming you have the styles in this CSS file

// const AboutHeader = () => {
//     return (
//         <section className="about-header-section ptb-120 position-relative overflow-hidden bg-dark snipcss-YIaOU">
//             <div className="container">
//                 <div className="row">
//                     <div className="col-12">
//                         <div className="section-heading-wrap d-flex justify-content-between z-5 position-relative">
//                             <div className="about-content-left">
//                                 <div className="about-info mb-5">
//                                     <h1 className="fw-bold display-5"> Grow your Business &amp; Customer Satisfaction with Quiety </h1>
//                                     <p className="lead"> Dynamically disintermediate technically sound technologies with compelling quality vectors error-free communities. </p>
//                                     <a href="/career" className="btn btn-primary mt-4 me-3">Open Positions</a>
//                                     <a href="/about-us" aria-current="page" className="btn btn-soft-primary mt-4 router-link-exact-active router-link-active">Meet Our Team</a>
//                                 </div>
//                                 <img src="https://quiety-vue.themetags.com/img/about-img-1.98d4a173.jpg" alt="about" className="img-fluid about-img-first mt-5 rounded-custom shadow" />
//                             </div>
//                             <div className="about-content-right">
//                                 <img src="https://quiety-vue.themetags.com/img/about-img-2.4dc24eb1.jpg" alt="about" className="img-fluid mb-5 rounded-custom shadow" />
//                                 <img src="https://quiety-vue.themetags.com/img/about-img-3.0a547f03.jpg" alt="about" className="rounded-custom about-img-last shadow" />
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="bg-white position-absolute bottom-0 h-25 bottom-0 left-0 right-0 z-2 py-5"></div>
//         </section>
//     );
// }

// export default AboutHeader;



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
