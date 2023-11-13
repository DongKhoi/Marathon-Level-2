import React from 'react';
import ComponentUser from './Components/componentUser';

function App() {
  const userData = {
    name: 'Minh Triết',
    age: 21,
    phone: '0123456789'
  }
  return (
    <div>
     <h1>Thông tin người dùng</h1>
     <ComponentUser {...userData} />
    </div>
  );
}

export default App;
