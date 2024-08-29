import React from "react";
import "./Home.css";
import Background from "./images/Background-Video.mp4"
import workout from "./images/Workout.png"
import gym from "./images/Gym.jpg"
import videothumb from "./images/VideoThumb.jpg"
import food from "./images/Food.png"
import Navbar from "./components/Navbar"

function Home() {
  return (
    <div className="grid-container">
      <Navbar/>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="background-clip"
      >
        <source src={Background} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div id="fitness-cont">
        <p id="fitness">F I T N E S S</p>
      </div>
      <div id="tracker-cont">
        <p id="tracker">T R A C K E R</p>
      </div>
      <div className="second-cont">
        <div className="box1">
          <button id="inner-cont1">
            <p className="head1">Diet Planner</p>
            <span
              className="material-symbols-outlined"
              style={{ fontSize: "48px", marginTop: "45px" }}
            >
              expand_circle_right
            </span>
            <h2 className="head3">Get your diet ready with us</h2>
            <p></p>
            <img
              id="food"
              height="240px"
              width="240px"
              src={food}
              alt=""
            />
          </button>
          <button id="inner-cont2">
            <p className="head1">Workout Gear</p>
            <span
              className="material-symbols-outlined"
              style={{ fontSize: "48px", marginTop: "45px" }}
            >
              expand_circle_right
            </span>
            <h2 className="head3">Plan your Workout</h2>
            <p></p>
            <img
              src={workout}
              height="205px"
              width="200px"
              id="workout"
              alt=""
            />
          </button>
        </div>
        <div className="box2">
          <button id="inner-cont3">
            <p className="head1">Nearby Gyms</p>
            <span
              className="material-symbols-outlined"
              style={{ fontSize: "48px", marginTop: "45px" }}
            >
              expand_circle_right
            </span>
            <h2 className="head3">Find gyms at your nearby locations</h2>
            <p></p>
            <img
              src={gym}
              height="205px"
              width="330px"
              id="gym"
              alt=""
            />
          </button>
          <button id="inner-cont4">
            <p className="head1">Video Content</p>
            <span
              className="material-symbols-outlined"
              style={{ fontSize: "48px", marginTop: "45px" }}
            >
              expand_circle_right
            </span>
            <h2 className="head3">Do it the right way</h2>
            <p></p>
            <img
              src={videothumb}
              height="208px"
              width="330px"
              id="videothumb"
              alt=""
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
