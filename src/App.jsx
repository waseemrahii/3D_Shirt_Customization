import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Header from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Login from './components/Login/Login';
import SignUp from './components/Signup/Signup';
import Contact_Page from './pages/Contact/Contact_Page';
import ContactMessages from './pages/Contact/ContactMessages';
import CustomizerPage from './pages/t-shirts/CustomizerPage';
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/customizer/:id" element={<CustomizerPage />} />
        <Route path="/contact" element={<Contact_Page />} />
        <Route path="/messages" element={<ContactMessages />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
  
      </Routes>
    </Router>
  );
}

export default App;
