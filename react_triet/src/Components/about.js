import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate(); // useNavigate hook for programmatic navigation
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleButtonClick = () => {
    // Thực hiện các xử lý cần thiết với giá trị đã nhập và điều hướng
    console.log('Input Value:', inputValue);
    navigate('/');
  };

  return (
    <div>
      <h2>About</h2>
      <p>This is the about page content.</p>

      <label>
        Input:
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter text"
        />
      </label>

      <button onClick={handleButtonClick}>Go to Home</button>
    </div>
  );
};

export default About;
