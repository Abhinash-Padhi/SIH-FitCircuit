import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './SignUp';
import Signin from './SignIn';
import Profile from './Profile';
import CreateProfile from './CreateProfile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/createprofile" element={<CreateProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
