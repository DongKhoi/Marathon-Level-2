import React from 'react';

const User = ({ name, age, phone }) => {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Phone: {phone}</p>
    </div>
  );
};

export default User;