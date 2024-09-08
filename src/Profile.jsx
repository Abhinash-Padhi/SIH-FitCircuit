import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faMapMarkerAlt, faPhone, faCalendarAlt, faVenusMars, faRunning, faCalendarCheck, faUserCircle } from '@fortawesome/free-solid-svg-icons'; // Added faUserCircle
import './Profile.css';
import { Link, useLocation } from 'react-router-dom';
import ActivityTracker from './components/ActivityTracker';
import Notifications from './components/Notifications';
import Navbar from './components/Navbar';
import Footer from './components/Footer'

const Profile = () => {
  const location = useLocation();
  const userData = location.state?.userData || {
    firstname: 'First Name',
    lastname: 'Last Name',
    username: 'Username',
    email: 'abc@gmail.com',
    location: 'Location',
    phoneNumber: '+91 XXXXXXXXXX',
    dob: 'YYYY-MM-DD',
    gender: 'Male',
    activities: 'Fitness Activities',
    joinedOn: 'YY-MM-DD',
  };

  return (
    <>
    <Navbar />
      <div className="profile-container">
      <h2>User Profile</h2>
      <div className="profile-content">
        <div className="profile-card">
          <div className="profile-header">
            <FontAwesomeIcon icon={faUserCircle} className="profile-icon rounded-icon" /> 
            <h3>{userData.username}</h3>
          </div>
          <div className="profile-info">
            <div className="info-item">
              <FontAwesomeIcon icon={faUser} />
              <span><b>First Name:</b> {userData.firstname}</span>
            </div>
            <div className="info-item">
              <FontAwesomeIcon icon={faUser} />
              <span><b>Last Name:</b> {userData.lastname}</span>
            </div>
            <div className="info-item">
              <FontAwesomeIcon icon={faEnvelope} />
              <span><b>E-mail:</b> {userData.email}</span>
            </div>
            <div className="info-item">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <span><b>Location:</b> {userData.location}</span>
            </div>
            <div className="info-item">
              <FontAwesomeIcon icon={faPhone} />
              <span><b>Phone Number:</b> {userData.phoneNumber}</span>
            </div>
            <div className="info-item">
              <FontAwesomeIcon icon={faCalendarAlt} />
              <span><b>Date Of Birth:</b> {userData.dob}</span>
            </div>
            <div className="info-item">
              <FontAwesomeIcon icon={faVenusMars} />
              <span><b>Gender:</b> {userData.gender}</span>
            </div>
            <div className="info-item">
              <FontAwesomeIcon icon={faRunning} />
              <span><b>Activities:</b> {userData.activities}</span>
            </div>
            <div className="info-item">
              <FontAwesomeIcon icon={faCalendarCheck} />
              <span><b>Joined On:</b> {userData.joinedOn}</span>
            </div>
          </div>
        </div>
        <div className="activity-tracker-section">
          <ActivityTracker />
          <Notifications />
        </div>
      </div>
      <div className="profile-footer">
        <Link to="/createprofile" state={{ userData }}>
          <button className="edit-button">Edit Profile</button>
        </Link>
      </div>
    </div>  
    <Footer/>
    </>
  );
};

export default Profile;
