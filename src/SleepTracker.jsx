import React, { useState, useEffect } from 'react';
import './SleepTracker.css'; 
import bg2 from './images/bg2.jpg'
import book from './images/book.jpg'
import phone from './images/phone.jpg'
import meditation from './images/meditation.jpg'
import bowl from './images/bowl.jpg'
import graph from './images/graph.png'
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const SleepTracker = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [totalSleep, setTotalSleep] = useState('');
  const [sleepWarning, setSleepWarning] = useState('');

  const slides = [
    { src: bg2, text: 'Here are some tips you can follow' },
    { src: book, text: 'Reading a book before bed helps to calm down nerves' },
    { src: phone, text: 'Decrease your screen time before sleep' },
    { src: meditation, text: 'Few minutes meditation can ease your mind' },
    { src: bowl, text: 'Maintain a healthy diet' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const calculateSleepHours = () => {
    const sleepTime = document.getElementById('sleep-time').value;
    const wakeTime = document.getElementById('wake-time').value;

    if (sleepTime && wakeTime) {
      const sleepDate = new Date(`1970-01-01T${sleepTime}:00`);
      const wakeDate = new Date(`1970-01-01T${wakeTime}:00`);

      let diff = wakeDate - sleepDate;

      if (diff < 0) {
        diff += 24 * 60 * 60 * 1000;
      }

      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

      setTotalSleep(`Total Sleep: ${hours} hours and ${minutes} minutes.`);

      if (hours < 6) {
        setSleepWarning('Warning: Less than 6 hours of sleep. Try to get more rest!');
      } else {
        setSleepWarning('');
      }
    } else {
      setTotalSleep('Please enter valid sleep and wake-up times.');
      setSleepWarning('');
    }
  };

  return (
    <>
    <Navbar/>
        <div className="sleep-tr">
      <div className="sleepcontainer">
        <section className="welcome-tr">
          <h1>Welcome to Your Sleep Tracker</h1>
        </section>

        <div className="main-content">
          <div className="side-by-side">
            <section className="sleep-details">
              <h2>Your Sleep Hours</h2>
              <h5>Log in your today's sleep time</h5>
              <form id="sleep-form">
                <label htmlFor="sleep-time">Sleep Time:</label>
                <input type="time" id="sleep-time" required />
                <label htmlFor="wake-time">Wake-up Time:</label>
                <input type="time" id="wake-time" required />
                <button type="button" onClick={calculateSleepHours}>
                  Calculate Sleep Hours
                </button>
              </form>
              <div id="total-sleep-hours">{totalSleep}</div>
              <div id="sleep-warning" className="warning">
                {sleepWarning}
              </div>
            </section>

            <section className="weekly-sleep">
              <h2>Weekly Sleep Hours</h2>
              <h4>Here is your week overview</h4>
              <h4>You are doing great!</h4>
              <img src={graph} alt="Weekly Sleep Graph" />
            </section>
          </div>

          <section className="sleep-form">
            <h2>Rate Your Sleep Quality</h2>
            <form>
              <div className="form-group">
                <label htmlFor="sleep-rating">Rate Your Sleep Last Night:</label>
                <select id="sleep-rating" name="sleep-rating">
                  <option value="1">1 - Poor</option>
                  <option value="2">2 - Fair</option>
                  <option value="3">3 - Good</option>
                  <option value="4">4 - Very Good</option>
                  <option value="5">5 - Excellent</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="awakenings">Number of Awakenings:</label>
                <input type="number" id="awakenings" name="awakenings" min="0" />
              </div>

              <div className="form-group">
                <label htmlFor="reasons">Reasons for Awakening:</label>
                <textarea
                  id="reasons"
                  name="reasons"
                  rows="3"
                  placeholder="E.g., noise, discomfort, bathroom, etc."
                ></textarea>
              </div>

              <div className="form-group">
                <label htmlFor="mood-stress">Mood and Stress Level Before Bed:</label>
                <select id="mood-stress" name="mood-stress">
                  <option value="relaxed">Relaxed</option>
                  <option value="neutral">Neutral</option>
                  <option value="anxious">Anxious</option>
                  <option value="stressed">Stressed</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="medication">Medication Taken Before Sleep:</label>
                <input
                  type="text"
                  id="medication"
                  name="medication"
                  placeholder="Type medication name or 'None'"
                />
              </div>

              <button type="submit" className="submit-btn">
                Submit
              </button>
            </form>
          </section>

          <section className="slider-quality-container">
            <div className="slider">
              <div className="slides" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {slides.map((slide, index) => (
                  <div className="slide" key={index}>
                    <img src={slide.src} alt={`Slide ${index}`} />
                    <div className="text">{slide.text}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default SleepTracker;
