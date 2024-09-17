import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './SignUp';
import Signin from './SignIn';
import Profile from './Profile';
import CreateProfile from './CreateProfile';
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Welcome from './Welcome'
import Gyms from './Gyms';
import MealPlanner from './MealPlanner';
import SleepTracker from './SleepTracker';
import FitnessCalculator from './components/FitnessCalculator';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/createprofile" element={<CreateProfile />} />
        <Route path="/gyms" element={<Gyms />} />
        <Route path="/mealplanner" element={<MealPlanner/>}/>
        <Route path="/sleeptracker" element={<SleepTracker/>}/>
        <Route path="/fitnesscalculator" element={<FitnessCalculator/>}/>
      </Routes>
    </Router>
  );
}

export default App;
