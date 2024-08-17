
// import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "../../firebase/firebase";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Signup.css';
import axios from 'axios'; 
import { useState } from 'react';
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const handleGoogleSignIn = (navigate) => {
  signInWithPopup(auth, googleProvider)
    .then((result) => {
      const user = result.user;
      console.log(user);
      // Save user ID to local storage
      localStorage.setItem('userId', user.uid);
      toast.success('Successfully signed in with Google!');
      setTimeout(() => navigate('/'), 3000); // Navigate to login after 3 seconds
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log(errorCode, errorMessage, email, credential);

      if (errorCode === 'auth/account-exists-with-different-credential') {
        toast.error('An account already exists with the same email address.');
      } else {
        toast.error(errorMessage);
      }
    });
};


const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log("user",  email,company, password)      
      const response = await axios.post(`http://localhost:5000/api/auth/register`, {
        username: name,
        email,
        address: company,
        password
      });

       // Delay the navigation to allow the toast to be displayed
       setTimeout(() => {
        navigate('/');
      }, 2000);
      console.log("response",response)
      console.log(response.data);
      toast.success('Registration successful!');
    } catch (error) {
      // Handle registration error
      console.error(error);
      toast.error('Registration failed. Please try again.');
    }
  };


  return (
    <div style={{ marginTop: "3rem" }}>
      <ToastContainer />
      <section className="sign-up-in-section ptb-60 snipcss-kp6G4 style-CrJym" id="style-CrJym">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-10" style={{ padding: "3rem" }}>
              <div className="pricing-content-wrap bg-custom-light  rounded-custom shadow-lg" style={{ width:"100%" }}>
               
                <div className="price-feature-col pricing-action-info container p-10 right-radius  bg-white order-0 order-lg-1 rounded" style={{padding:"2rem"}}>
                 
                  <h1 className="h3">Create an Account</h1>
                  <p className="" style={{color:"black !important"}}>Get started with your free account today. No credit card needed and no setup fees.</p>
                  <form onSubmit={handleSubmit} className=" register-form">
                    <div className="row">
                      <div className="col-sm-12 col-lg-6">
                        <label htmlFor="name" className="mb-1">Name <span className="text-danger">*</span></label>
                        <div className="input-group mb-3">
                          <input type="text" placeholder="Name"
                            id="name"
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            required aria-label="name"
                            className="form-control" />
                        </div>
                      </div>
                      <div className="col-sm-12 col-lg-6">
                        <label htmlFor="email" className="mb-1">Email <span className="text-danger">*</span></label>
                        <div className="input-group mb-3">
                          <input type="email" placeholder="Email" id="email"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            required aria-label="email" className="form-control" />
                        </div>
                      </div>
                      <div className="col-sm-12 col-lg-6">
                        <label htmlFor="company" className="mb-1">Address</label>
                        <div className="input-group mb-3">
                          <input type="text" placeholder="Company"
                            onChange={(e) => setCompany(e.target.value)}
                            value={company}
                            id="company" aria-label="company" className="form-control" />
                        </div>
                      </div>
                      <div className="col-sm-12 col-lg-6">
                        <label htmlFor="password" className="mb-1">Password <span className="text-danger">*</span></label>
                        <div className="input-group mb-3">
                          <input type="password" placeholder="Password"
                            id="password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            required aria-label="Password" className="form-control" />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-check d-flex">
                          <input type="checkbox" id="flexCheckChecked" className="form-check-input me-2" />
                          <label htmlFor="flexCheckChecked" className="form-check-label">
                            I have read and agree to the <Link to="#" className="text-decoration-none">Terms &amp; Conditions</Link>
                          </label>
                        </div>
                      </div>
                      <div className="" style={{width:"auto",margin:"0 auto"}}>
                        <button type="submit" className="btn text-white 
                         mt-4 d-block bg-black hover:text-black hover:bg-white " >Submit</button>
                      </div>
                    </div>
                    <div className="position-relative d-flex align-items-center justify-content-center mt-4 py-4">
                      <span className="divider-bar"></span>
                      <h6 className="position-absolute text-center divider-text bg-light mb-0">Or</h6>
                    </div>
                    <div className="actions-btns" onClick={() => handleGoogleSignIn(navigate)}>
                      <a href="#" className="btn google-btn mt-4 d-block  shadow-sm d-flex align-items-center text-decoration-none justify-content-center bg-black">
                        <img src="https://quiety-vue.themetags.com/img/google-icon.ab6de191.svg" alt="google" className="me-3" />
                        <span style={{color:"white"}}>Sign up with Google</span>
                      </a>
                    </div>
                    <p className="text-center  mt-4 mb-0 fw-medium font-monospace">Already have an account? <Link to="/login" className="text-decoration-none">Sign in</Link></p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
