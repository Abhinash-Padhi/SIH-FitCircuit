import React, { useEffect } from 'react';
import Navbar from './components/Navbar'
import './Contact.css';

function Contact() {
  useEffect(() => {
    document.body.classList.add('contact-page-body');

    return () => {
      document.body.classList.remove('contact-page-body');
    };
  }, []);

  return (
    <>
    <Navbar />
      <section className="contact-page">
      <div className="section-header">
        <div className="container">
          <h2>Contact Us</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
        </div>
      </div>
      
      <div className="container">
        <div className="row">
          
          <div className="contact-info">
            <div className="contact-info-item">
              <div className="contact-info-icon">
                <i className="fas fa-home"></i>
              </div>
              
              <div className="contact-info-content">
                <h4>Address</h4>
                <p>4671 Sugar Camp Road,<br /> Owatonna, Minnesota, <br />55060</p>
              </div>
            </div>
            
            <div className="contact-info-item">
              <div className="contact-info-icon">
                <i className="fas fa-phone"></i>
              </div>
              
              <div className="contact-info-content">
                <h4>Phone</h4>
                <p>571-457-2321</p>
              </div>
            </div>
            
            <div className="contact-info-item">
              <div className="contact-info-icon">
                <i className="fas fa-envelope"></i>
              </div>
              
              <div className="contact-info-content">
                <h4>Email</h4>
                <p>ntamerrwael@mfano.ga</p>
              </div>
            </div>
          </div>
          
          <div className="contact-form">
            <form id="contact-form">
              <h2>Send Message</h2>
              <div className="input-box">
                <input type="text" required />
                <span>Full Name</span>
              </div>
              
              <div className="input-box">
                <input type="email" required />
                <span>Email</span>
              </div>
              
              <div className="input-box">
                <textarea required></textarea>
                <span>Type your Message...</span>
              </div>
              
              <div className="input-box">
                <input type="submit" value="Send" />
              </div>
            </form>
          </div>
          
        </div>
      </div>
    </section>
    </>
  );
}

export default Contact;
