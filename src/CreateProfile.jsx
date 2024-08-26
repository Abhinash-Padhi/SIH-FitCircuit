import React, { useState } from 'react';
import { useNavigate,useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCalendar, faMapMarkerAlt, faVenusMars, faBiking, faClock, faPhone } from '@fortawesome/free-solid-svg-icons';
import "./CreateProfile.css"

const CreateProfile = () => {

  const location = useLocation();
  const userData = location.state?.userData || {}

  console.log(userData)


  const [formData, setFormData] = useState({
    username:userData.username || '',
    password:userData.password || '',
    email:userData.email || '',
    firstname: userData.firstname || '',
    lastname: userData.lastname || '',
    dob: userData.dob || '',
    location: userData.location || '',
    gender: userData.gender || '',
    activities: userData.activities || '',
    joinedOn: userData.joinedOn || '',
    phoneNumber: userData.phoneNumber || '',  // Added phone number field
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    let r=await fetch("http://localhost:3000/userSaveProfile",
      { method:"POST", 
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(formData)}
    )
    let res=await r.text()
    console.log(res)
    navigate('/signin');
  };

  return (
    <div className="container">
      <h1>Update your profile</h1>
      <form className="profile-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstname"><FontAwesomeIcon icon={faUser} /> First Name</label>
          <input type="text" id="firstname" name="firstname" value={formData.firstname} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="lastname"><FontAwesomeIcon icon={faUser} /> Last Name</label>
          <input type="text" id="lastname" name="lastname" value={formData.lastname} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="dob"><FontAwesomeIcon icon={faCalendar} /> Date of Birth</label>
          <input type="date" id="dob" name="dob" value={formData.dob} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="location"><FontAwesomeIcon icon={faMapMarkerAlt} /> Location</label>
          <input type="text" id="location" name="location" value={formData.location} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="gender"><FontAwesomeIcon icon={faVenusMars} /> Gender</label>
          <div className="gender-options">
            <label>
              <input type="radio" name="gender" value="male" onChange={handleChange} /> Male
            </label>
            <label>
              <input type="radio" name="gender" value="female" onChange={handleChange} /> Female
            </label>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="activities"><FontAwesomeIcon icon={faBiking} /> Activities</label>
          <input type="text" id="activities" name="activities" value={formData.activities} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="joinedOn"><FontAwesomeIcon icon={faClock} /> Joined On</label>
          <input type="date" id="joinedOn" name="joinedOn" value={formData.joinedOn} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber"><FontAwesomeIcon icon={faPhone} /> Phone Number</label>
          <input type="text" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
        </div>
        <button type="submit" className="submit-btn">Save Profile</button>
      </form>
    </div>
  );
};

export default CreateProfile;
