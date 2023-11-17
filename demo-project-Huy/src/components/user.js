import React from 'react';
import { Link } from 'react-router-dom';

function User(props) {
  return (
    <div>
      <p>{props.name}</p>
      <p>{props.age}</p>
      <p>{props.phone}</p>
      <Link to="/customer">
        <button>Go customer</button>
      </Link>
    </div>
  );
}

export default User;
