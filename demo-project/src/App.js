import React from 'react';
import User from './components/user';

function App() {
  const userData = {
    name: 'Trieu',
    age: 18,
    phone: '0947382101',
  };

  return (
    <div>
      <User {...userData} />
    </div>
  );
};

export default App;