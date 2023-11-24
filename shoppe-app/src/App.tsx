import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Login from './pages/Login';
import Home from './pages/Home';

function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(!!localStorage.getItem('user'))


  const handleLoginSucces = (isLoggedIn: boolean) => {
    setIsUserLoggedIn(isLoggedIn);
  };

  return (
    <Router>
      <Routes>
        <Route
        path = '/login'
        element = {
          !isUserLoggedIn ? (
          <Login onLoginSucces={handleLoginSucces} />
        ) : (
          <Navigate to = '/' />
        )
      }
       />
       <Route path='/*' element={isUserLoggedIn ? <Home /> : <Navigate to='/login' />} />
      </Routes>
    </Router>
  );
}

export default App;
