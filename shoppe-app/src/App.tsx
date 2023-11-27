import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Login from './pages/Login';
import Home from './pages/Home';
import { gapi } from 'gapi-script';

function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(!!localStorage.getItem('user'))


  const handleLoginSucces = (isLoggedIn: boolean) => {
    setIsUserLoggedIn(isLoggedIn);
  };

  const initializeGapi = () => {
    gapi.client.init({
      clientId: "937200536043-m06el2tvb83heea39ooafgpri76t0kjb.apps.googleusercontent.com",
      scope: "",
    });
  };

  useEffect(() => {
    gapi.load("client:auth2", initializeGapi);
  })

  return (
    <React.Fragment>
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
    </React.Fragment>
  );
}

export default App;
