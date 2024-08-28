import React from 'react';
import './Welcome.css';
import portrait from './images/portrait.jpg'

function Welcome() {
  return (
    <div className="container">
      <div className="image-container">
        <img id="fitness-image" src={portrait} alt="Fitness" />
      </div>
      <div className="text-overlay">
        <h1>Welcome to FitCircuit!</h1>
        <p>Empowering you to achieve your fitness goals every step of the way.</p>
        <ul>
          <li>Track and Monitor Progress</li>
          <li>Enhance Nutritional Habits</li>
          <li>Improve Sleep Quality</li>
          <li>Increase Physical Activity</li>
        </ul>
        <button className="get-started-button">Get Started</button>
      </div>
    </div>
  );
}

export default Welcome;
