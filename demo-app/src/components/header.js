// src/components/Header.js
import React from 'react';

function Header(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.subtitle}</p>
    </div>
  );
}

export default Header;
