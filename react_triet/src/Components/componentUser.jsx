import React, { useState } from 'react';

const UserComponent = () => {
  // Sử dụng useState để tạo state cho mảng
  const [numberArray, setNumberArray] = useState([]);

  // Hàm thêm số ngẫu nhiên vào mảng
  const addRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * 100); // Số ngẫu nhiên từ 0 đến 99

    // Sử dụng setNumberArray để cập nhật mảng
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
