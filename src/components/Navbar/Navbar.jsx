import React, { useState, useEffect } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaUserCircle } from 'react-icons/fa';
import "./Navbar.css";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userProfileInfo, setUserProfileInfo] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
        setUserProfileInfo({
          username: user.displayName,
          email: user.email,
          photoURL: user.photoURL
        });
        const role = localStorage.getItem('role');
        setIsAdmin(role === 'admin');
      } else {
        const customLoginStatus = localStorage.getItem('isLoggedIn');
        if (customLoginStatus === 'true') {
          setIsLoggedIn(true);
          setUserProfileInfo({
            username: localStorage.getItem('username'),
            email: localStorage.getItem('email'),
            photoURL: localStorage.getItem('photoURL') || null
          });
          const role = localStorage.getItem('role');
          setIsAdmin(role === 'admin');
        } else {
          setIsLoggedIn(false);
          setUserProfileInfo(null);
          setIsAdmin(false);
        }
      }
    });

    return () => unsubscribe();
  }, [auth]);

  const handleLogout = () => {
    const customLoginStatus = localStorage.getItem('isLoggedIn');
    if (customLoginStatus === 'true') {
      localStorage.clear();
      toast.success('Successfully logged out!');
      setIsLoggedIn(false);
      setUserProfileInfo(null);
      setIsAdmin(false);
      navigate('/login');
    } else {
      signOut(auth)
        .then(() => {
          toast.success('Successfully logged out!');
          setIsLoggedIn(false);
          setUserProfileInfo(null);
          setIsAdmin(false);
          navigate('/login');
        })
        .catch((error) => {
          toast.error(`Error signing out: ${error.message}`);
        });
    }
  };

  const handleNavClick = () => {
    const navbarToggler = document.querySelector('.navbar-toggler');
    if (navbarToggler && window.innerWidth < 992) {
      navbarToggler.click();
    }
  };

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary navbar-light fixed-top">
        <Container>
          <Navbar.Brand as={NavLink} to="/">
            <img src="/title.jpg" alt="It Company Logo" className="navbar-logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto" onClick={handleNavClick}>
              <div className="search-input-wrapper">
                <input
                  autoComplete="off"
                  className="search-input"
                  name="search"
                  type="search"
                  id="search"
                  placeholder="Search"
                />
              </div>
            </Nav>
            <Nav className="ms-auto" onClick={handleNavClick} style={{ alignItems: "center" }}>
              {isLoggedIn ? (
                <div className="user-profile">
                  {userProfileInfo.photoURL ? (
                    <img src={userProfileInfo.photoURL} alt="User Profile" className="user-avatar" />
                  ) : (
                    <FaUserCircle size={40} />
                  )}
                  <div className="dropdown-menu">
                    <ul>
                      <li><NavLink to="/profile" onClick={handleNavClick}>Profile</NavLink></li>
                      {isAdmin && (
                        <li><NavLink to="/dashboard" onClick={handleNavClick}>Dashboard</NavLink></li>
                      )}
                      <li><Button onClick={handleLogout}><span className='logout'>Logout</span></Button></li>
                    </ul>
                  </div>
                </div>
              ) : (
                <>
                  <Nav.Link as={NavLink} to="/login" onClick={handleNavClick}>
                    <Button className='blackcolor'>Get Started</Button>
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <ToastContainer />
    </>
  );
}

export default Header;
