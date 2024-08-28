import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './SignUp';
import Signin from './SignIn';
import Profile from './Profile';
import CreateProfile from './CreateProfile';
import Home from './Home'
import About from './About'
import Socials from './Socials'
import Contact from './Contact'
import Welcome from './Welcome'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/socials" element={<Socials />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/createprofile" element={<CreateProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
