import React from 'react'
import './About.css';
import { useEffect } from 'react';
import Navbar from './components/Navbar'

const About = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.fade-in'); 

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    elements.forEach(element => {
      observer.observe(element);
    });
    
    return () => {
      elements.forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="about-page">
      <Navbar/>

      <div className="about-background">
        <h1 className="drop-down-text h1class">About Us</h1>
        <p className="drop-down-text pclass">
          Dedicated to enhancing your well-being with <br></br> precise tracking and tailored motivation!
        </p>
      </div>

      <div className="additional-info-background">
        <h1 className="additional-info-title fade-in">Empowering you to lead a more vibrant, joyful, and healthy life.</h1>
        <p className="additional-info-text fade-in">
        Our mission is to make fitness accessible to everyone, no matter their budget or gym facilities. 
        We offer a variety of free, high-quality workout videos, along with affordable and effective fitness programs, 
        meal plans, and valuable insights into health, nutrition, and fitness.
        </p>
      </div>
    </div>
  );
};

export default About
