// import React from 'react';
// import { Link, Outlet } from 'react-router-dom';
// import { MdBorderAll, MdDashboard, MdOutlineVerifiedUser, MdSuperscript, MdSupervisedUserCircle, MdVerifiedUser } from "react-icons/md";
// import { MdCategory } from "react-icons/md";
// import { MdDashboardCustomize } from "react-icons/md";
// import { FaRegUser } from "react-icons/fa";
// // import './Dashboard.css';

// const sharedLinks = (
//   <>
//     <li className="nav-item mt-3">
//       <Link to="/" className="nav-link"><MdDashboard /> Home</Link>
//     </li>
//     <li className="nav-item mt-3">
//       <Link to="/menu" className="nav-link"><MdDashboard /> Menu</Link>
//     </li>
  
//   </>
// );

// const DashboardLayout = () => {
//   return (
//     <div className="d-flex" style={{ marginTop: "5rem", zIndex: "1" }}>
//       <div className="d-flex flex-column flex-shrink-0 p-3 bg-light" style={{ width: "280px" }}>
//         <Link to="/dashboard" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
//           <img src="/grocery_Febicon.png" alt="logo" className="bi me-2" width="40" height="32" />
//           <span className="badge bg-primary p-2">Admin</span>
//         </Link>
//         <hr />
//         <ul className="nav nav-pills flex-column mb-auto">
//           <li className="nav-item">
//             <Link to="/dashboard" className="nav-link active" aria-current="page">
//               <MdDashboard /> Dashboard
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link to="/dashboard/categorymanagement" className="nav-link">
//               <MdCategory /> Category Management
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link to="/dashboard/productmanagement" className="nav-link">
//               <MdSupervisedUserCircle /> Add New Product
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link to="/dashboard/product/:slug" className="nav-link">
//               <MdSupervisedUserCircle /> Update Product
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link to="/dashboard/products" className="nav-link">
//               <MdSupervisedUserCircle /> All Product
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link to="/dashboard/order" className="nav-link">
//               <MdBorderAll /> Order
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link to="/dashboard/alluser" className="nav-link">
//               <MdVerifiedUser /> All User
//             </Link>
//           </li>
//         </ul>
//         <hr />
//         <ul className="nav nav-pills flex-column">
//           {sharedLinks}
//         </ul>
//       </div>
//       <div className="flex-grow-1 p-4">
//         <div className="d-flex justify-content-between align-items-center mb-4">
//           <button className="btn btn-primary d-md-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#sidebar" aria-controls="sidebar">
//             <MdDashboardCustomize />
//           </button>
//           <button className="btn btn-success text-white d-md-none">
//             <FaRegUser /> Logout
//           </button>
//         </div>
//         <Outlet />
//       </div>
//     </div>
//   );
// };

// export default DashboardLayout;




// import React from 'react';
// import { Link, Outlet } from 'react-router-dom';
// import { MdDashboard, MdOutlineAdd, MdManageSearch, MdVerifiedUser } from "react-icons/md";
// import { FaRegUser } from "react-icons/fa";
// import 'bootstrap/dist/css/bootstrap.min.css';
// // import './Dashboard.css'; // Optional for custom styles

// const DashboardLayout = () => {
//   return (
//     <div className="d-flex" style={{ marginTop: "3rem", zIndex: "1" }}>
//       <div className="d-flex flex-column flex-shrink-0 p-3 bg-light" style={{ width: "22%",padding:"3rem 1rem !important", background:'#893629', color:"white" }}>
//         <Link to="/dashboard" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
//           <img src="/logo.png" alt="logo" className="bi me-2" width="40" height="32" />
//           <span className="badge bg-primary p-2" style={{position:"absolute", left:"15%"}}>Admin</span>
//         </Link>
//         <hr />
//         <ul className="nav nav-pills flex-column mb-auto">
//           <li className="nav-item">
//             <Link to="/dashboard" className="nav-link active"  style={{background:"#65210F !important"}} aria-current="page">
//               <MdDashboard /> Dashboard
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link to="/dashboard/add-service" className="nav-link" style={{color:"white !important"}}>
//               <MdOutlineAdd /> Add Service
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link to="/dashboard/manage-service" className="nav-link">
//               <MdManageSearch /> Manage Service
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link to="/dashboard/add-blog" className="nav-link">
//               <MdOutlineAdd /> Add Blog
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link to="/dashboard/manage-blog" className="nav-link">
//               <MdManageSearch /> Manage Blog
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link to="/dashboard/user-messages" className="nav-link">
//               <MdVerifiedUser /> User Messages
//             </Link>
//           </li>
//         </ul>
//         <hr />
//       </div>
//       <div className="flex-grow-1 p-4">
//         <div className="d-flex justify-content-between align-items-center mb-4">
//           <button className="btn btn-primary d-md-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#sidebar" aria-controls="sidebar">
//             <MdDashboard />
//           </button>
//           <button className="btn btn-success text-white d-md-none">
//             <FaRegUser /> Logout
//           </button>
//         </div>
//         <Outlet />
//       </div>
//     </div>
//   );
// };

// export default DashboardLayout;

import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { MdDashboard, MdOutlineAdd, MdManageSearch, MdVerifiedUser } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Dashboard.css'; // Custom styles

const DashboardLayout = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="dashboard-container d-flex">
      <div className={`sidebar d-flex flex-column flex-shrink-0 p-3 ${showSidebar ? 'show' : ''}`}>
        <Link to="/dashboard" className="brand d-flex align-items-center mb-3 mb-md-0 me-md-auto">
          <img src="/logo.png" alt="logo" className="bi me-2 rounded" width="32%" height="32" />
          {/* <span className="badge bg-primary p-2">Admin</span> */}
        </Link>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto gap-3" >
          <li className="nav-item">
            <Link to="/dashboard" className="nav-link active">
              <MdDashboard /> Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/dashboard/add-service" className="nav-link">
              <MdOutlineAdd /> Add Service
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/dashboard/manage-service" className="nav-link">
              <MdManageSearch /> Manage Service
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/dashboard/add-blog" className="nav-link">
              <MdOutlineAdd /> Add Blog
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/dashboard/manage-blog" className="nav-link">
              <MdManageSearch /> Manage Blog
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/dashboard/user-messages" className="nav-link">
              <MdVerifiedUser /> User Messages
            </Link>
          </li>
        </ul>
        <hr />
      </div>
      <div className="content flex-grow-1 p-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <button className="btn btn-primary d-md-none btn-toggle-sidebar" type="button" onClick={toggleSidebar}>
            <MdDashboard />
          </button>
          <button className="btn btn-success text-white d-md-none">
            <FaRegUser /> Logout
          </button>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
