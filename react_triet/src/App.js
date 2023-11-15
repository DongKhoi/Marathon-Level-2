import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ComponentUser from './Components/componentUser';
import Customer from './Components/Customer';

function App() {
  useEffect(() => {
    console.log('Chào các bạn!');
  }, []);

  return (
    <Router>
      <div>
        <h1>Thông tin người dùng</h1>
        <ComponentUser />
        <Link to="/customer">
          <button>customer</button>
        </Link>
        <Routes>
          <Route path="/customer" element={<Customer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
