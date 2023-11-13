import React from 'react'

const componentUser = (props) => {
  return (
    <div>
        <h2>{props.name}</h2>
        <h2>{props.age}</h2>
        <h2>{props.phone}</h2>
    </div>
  );
}

export default componentUser