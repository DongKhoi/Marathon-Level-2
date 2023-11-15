// Home.js
import { Link } from 'react-router-dom';
import React, { useState, useEffect, useCallback } from 'react';

const Home = () => {
  const [mainContent, setMainContent] = useState("");
  const handleHomeClick = useCallback(() => {
    setMainContent("This is the home page content.");
  }, []);
  return (
    <div>
      <h2>Home</h2>
      <p>{mainContent}</p>
      {/* Use Link to navigate to the "/about" route */}
      <Link to="/about">
        <button>Go to About</button>
      </Link>
      <button onClick={handleHomeClick}>Set content</button>
    </div>
  );
};

export default Home;
