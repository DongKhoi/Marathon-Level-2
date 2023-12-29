import React, { useState } from 'react';

const UserComponent = () => {

  const [numberArray, setNumberArray] = useState([]);

  const addRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * 100);

    setNumberArray((prevNumberArray) => [...prevNumberArray, randomNumber]);
  };

  return (
    <div>
      <h2>Number List</h2>
      {numberArray.map((number, index) => (
        <p key={index}>{number}</p>
      ))}
      <button onClick={addRandomNumber}>Add Random Number</button>
    </div>
  );
};

export default UserComponent;
