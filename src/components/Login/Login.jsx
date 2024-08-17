import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css'
const Login = () => {
    const auth = getAuth();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleGoogleSignIn = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                localStorage.setItem('token', user.accessToken);
                localStorage.setItem('userId', user.uid);
                localStorage.setItem('isLoggedIn', 'true');
                localStorage.setItem('username', user.displayName);
                localStorage.setItem('email', user.email);
                localStorage.setItem('photoURL', user.photoURL);
                
                // Assuming the role is available in the response from Google sign-in
                localStorage.setItem('role', 'user'); // Change 'user' to actual role retrieved from response
                
                toast.success('Successfully signed in with Google!');
                navigate('/'); // Navigate immediately after setting localStorage
            })
            .catch((error) => {
                console.error(error.message);
                toast.error('Failed to sign in with Google.');
            });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });
            const data = await response.json();
            if (data.token && data.userId) {
                localStorage.setItem('token', data.token);
                localStorage.setItem('userId', data.userId);
                localStorage.setItem('isLoggedIn', 'true');
                localStorage.setItem('username', data.userData?.username); // Assuming username is returned
                localStorage.setItem('email', email);
                
                // Assuming the role is available in the response from the login API
                localStorage.setItem('role', data.role); // Change 'data.role' to actual role retrieved from response
                setTimeout(() => {
                    navigate('/');
                  }, 2000);
                toast.success('Login successful!');
            } else {
                toast.error(data.msg || 'Login failed.');
            }
        } catch (error) {
            console.error('Error:', error);
            toast.error('Login failed. Please try again.');
        }
    };

    return (
        <div style={{ marginTop: "3rem" }}>
            <ToastContainer />
            <section className="sign-up-in-section  page-header snipcss-sVFBJ">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-5 col-md-8 col-6" style={{ paddingTop: "3rem" }}>
                            <div className="register-wrap bg-white p-5 shadow rounded-custom">
                                <h1 className="h3">Nice to See You Again</h1>
                                <p className="" style={{color:"black !important"}}>Please log in to access your account.</p>
                                <div className="actions-btns">
                                    <button onClick={handleGoogleSignIn} className="btn google-btn shadow-sm mt-4 d-block d-flex align-items-center text-decoration-none justify-content-center">
                                        <img src="https://quiety-vue.themetags.com/img/google-icon.ab6de191.svg" alt="google" className="me-3" />
                                        <span style={{color:"black"}}> Sign in with Google</span>
                                    </button>
                                </div>
                                <div className="position-relative d-flex align-items-center justify-content-center mt-4 py-4">
                                    <span className="divider-bar"></span>
                                    <h6 className="position-absolute text-center divider-text bg-light mb-0">Or</h6>
                                </div>
                                <form onSubmit={handleSubmit} className=" register-form">
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <label htmlFor="email" className="mb-1">Email <span className="text-danger">*</span></label>
                                            <div className="input-group mb-3">
                                                <input type="email" placeholder="Email" id="email" 
                                                required="required" aria-label="email"
                                                 className="form-control" 
                                                  value={email}
                                                  onChange={(e) => setEmail(e.target.value)} />
                                            </div>
                                        </div>
                                        <div className="col-sm-12">
                                            <label htmlFor="password" className="mb-1">Password <span className="text-danger">*</span></label>
                                            <div className="input-group mb-3">
                                                <input type="password" placeholder="Password" id="password" required="required" aria-label="Password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button type="submit" className="btn bg-black text-white mt-3 d-block w-100">Submit</button>
                                        </div>
                                    </div>
                                    <p className="font-monospace fw-medium text-center text-muted mt-3 pt-4 mb-0">
                                        Don’t have an account? 
                                        <Link to="/signup" className="text-decoration-none">Sign up Today</Link><br />
                                        <Link to="/recovery" className="text-decoration-none">Forgot password</Link>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Login;




// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import './Login.css';

// const Login = () => {
//     const auth = getAuth();
//     const navigate = useNavigate();
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     const handleGoogleSignIn = () => {
//         const googleProvider = new GoogleAuthProvider();
//         signInWithPopup(auth, googleProvider)
//             .then((result) => {
//                 const user = result.user;
//                 localStorage.setItem('token', user.accessToken);
//                 localStorage.setItem('userId', user.uid);
//                 localStorage.setItem('isLoggedIn', 'true');
//                 localStorage.setItem('username', user.displayName);
//                 localStorage.setItem('email', user.email);
//                 localStorage.setItem('photoURL', user.photoURL);
//                 localStorage.setItem('role', 'user');
                
//                 toast.success('Successfully signed in with Google!');
//                 navigate('/');
//             })
//             .catch((error) => {
//                 console.error(error.message);
//                 toast.error('Failed to sign in with Google.');
//             });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await fetch('http://localhost:5000/api/auth/login', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ email, password }),
//             });
//             const data = await response.json();
//             if (data.token && data.userId) {
//                 localStorage.setItem('token', data.token);
//                 localStorage.setItem('userId', data.userId);
//                 localStorage.setItem('isLoggedIn', 'true');
//                 localStorage.setItem('username', data.userData?.username);
//                 localStorage.setItem('email', email);
//                 localStorage.setItem('role', data.role);
//                 setTimeout(() => {
//                     navigate('/');
//                   }, 2000);
//                 toast.success('Login successful!');
//             } else {
//                 toast.error(data.msg || 'Login failed.');
//             }
//         } catch (error) {
//             console.error('Error:', error);
//             toast.error('Login failed. Please try again.');
//         }
//     };

//     return (
//         <div style={{ marginTop: "3rem" }}>
//             <ToastContainer />
//             <section className="sign-up-in-section page-header snipcss-sVFBJ">
//                 <div className="container">
//                     <div className="row align-items-center justify-content-center">
//                         <div className="col-lg-5 col-md-8 col-6" style={{ paddingTop: "3rem" }}>
//                             <div className="register-wrap bg-white p-5 shadow rounded-custom">
//                                 <h1 className="h3">Nice to See You Again</h1>
//                                 <p style={{color:"black !important"}}>Please log in to access your account.</p>
//                                 <div className="actions-btns">
//                                     <button onClick={handleGoogleSignIn} className="btn google-btn shadow-sm mt-4 d-block d-flex align-items-center text-decoration-none justify-content-center">
//                                         <img src="https://quiety-vue.themetags.com/img/google-icon.ab6de191.svg" alt="google" className="me-3" />
//                                         <span style={{color:"black"}}> Sign in with Google</span>
//                                     </button>
//                                 </div>
//                                 <div className="position-relative d-flex align-items-center justify-content-center mt-4 py-4">
//                                     <span className="divider-bar"></span>
//                                     <h6 className="position-absolute text-center divider-text bg-light mb-0">Or</h6>
//                                 </div>
//                                 <form onSubmit={handleSubmit} className="register-form">
//                                     <div className="row">
//                                         <div className="col-sm-12">
//                                             <label htmlFor="email" className="mb-1">Email <span className="text-danger">*</span></label>
//                                             <div className="input-group mb-3">
//                                                 <input type="email" placeholder="Email" id="email" 
//                                                 required="required" aria-label="email"
//                                                  className="form-control" 
//                                                   value={email}
//                                                   onChange={(e) => setEmail(e.target.value)} />
//                                             </div>
//                                         </div>
//                                         <div className="col-12">
//                                             <div className="password-field position-relative">
//                                                 <label htmlFor="password" className="mb-1">Password <span className="text-danger">*</span></label>
//                                                 <div className="input-group mb-3">
//                                                     <input type="password" placeholder="Password" id="password" required="" aria-label="Password" className="form-control" 
//                                                     value={password}
//                                                     onChange={(e) => setPassword(e.target.value)} />
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <button className="btn btn-primary mt-4 d-block w-100" type="submit">Login</button>
//                                     <p className="font-monospace fw-medium text-muted mt-3 pt-4 mb-0 text-center">
//                                         Don't have an account? <Link to="/signup">Sign up now</Link>
//                                     </p>
//                                 </form>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// }

// export default Login;
