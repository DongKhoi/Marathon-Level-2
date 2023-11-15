// About.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate(); // useNavigate hook for programmatic navigation

  const navigateToHome = () => {
    navigate('/');
  };

  return (
    <div>
      <h2>About</h2>
      <p>This is the about page content.</p>
      
      {/* Add a button to navigate to the "/" route (Home) */}
      <button onClick={navigateToHome}>Go to Home</button>
    </div>
  );
};

export default About;
