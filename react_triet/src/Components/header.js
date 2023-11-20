// src/components/Header.js
import React, { useContext } from 'react';
import YourContext from './yourContext';

function Header(props) {
  const contextValue = useContext(YourContext);

  const handleClick = () => {
    // Gọi hàm callback được truyền từ props khi Header được click
    if (props.onClick) {
      props.onClick();
    }
  };

  return (
    <div onClick={handleClick}>
      <h1>{props.title}</h1>
      <p>{props.subtitle}</p>
      <p>{contextValue}</p>
    </div>
  );
}

export default Header;
