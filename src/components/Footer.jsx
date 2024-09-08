import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>FitCircuit</h4>
          <ul>
            <li><a href="/">Get Started</a></li>
            <li><a href="/">Contact Us</a></li>
            <li><a href="/">Profile</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Explore</h4>
          <ul>
            <li><a href="/">Nearby Gyms</a></li>
            <li><a href="/">Workout Plans</a></li>
            <li><a href="/">Diet Plans</a></li>
            <li><a href="/">Sleep Activity</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>More from FitCircuit</h4>
          <ul>
            <li><a href="/">Our Story</a></li>
            <li><a href="/">Blog</a></li>
            <li><a href="/">FAQ's</a></li>
            <li><a href="/">Sign In</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Let's Stay Connected</h4>
          <p>Enter your email to unlock 10% OFF.</p>
          <form className="email-form">
            <input type="email" placeholder="Your Email" />
            <button type="submit">Submit</button>
          </form>
          <div className="social-icons">
            <a href="/"><i className="fab fa-facebook"></i></a>
            <a href="/"><i className="fab fa-instagram"></i></a>
            <a href="/"><i className="fab fa-twitter"></i></a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>© 2024 FitCircuit.co</p>
        <ul>
          <li><a href="/">Terms of Service</a></li>
          <li><a href="/">Privacy Policy</a></li>
          <li><a href="/">Refund Policy</a></li>
          <li><a href="/">Accessibility</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer
