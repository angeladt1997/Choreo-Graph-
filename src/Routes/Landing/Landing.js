import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';

const LandingPage = (props) => {
  return (
    <div className="landingDisplay">
      <div className="landingHeader">
        <h1>
          For Choreographers, Bu Choreographers
        </h1>
      </div>
      <section className="landingBody">
        <h3>
          Select your ride
        </h3>
        <p className="introText">
        Choreo-Graph is an interactive web app made for choreographers and other performing artists as 
    a tool to stage pieces for the purposes of teaching, ease of production communication,
    and at-home studying. In order to get started, click on "start graphing", "login" (you currently do 
    not need login information), and "login" to view the apps main idea flow. Happy Graphing!
        </p>
        <Link to='/NewUser' >
          <button>Create Account</button>
        </Link>
      </section>
    </div>
  );
}

LandingPage.defaultProps = {
  history: {
    push: () => {},
  },
}

export default LandingPage;