import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Login from './pages/login';
import Home from './pages/home';
import { gapi } from "gapi-script";
import React from 'react';

function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(!!localStorage.getItem('user'));

  const handleLoginSuccess = (isLoggedIn: boolean) => {
    setIsUserLoggedIn(isLoggedIn);
  };

  const initializeGapi = () => {
    gapi.client.init({
      clientId: "188155419196-pfmci8cpmv91o1hcu9p2ar3cm5vc5iin.apps.googleusercontent.com",
      scope: "",
    });
  };

  useEffect(() => {
    // load and init google api scripts
    gapi.load("client:auth2", initializeGapi);
  })

  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route
            path="/login"
            element={
              !isUserLoggedIn ? (
                <Login onLoginSuccess={handleLoginSuccess} />
              ) : (
                <Navigate to="/" />
              )
            }
          />
          <Route path="/*" element={isUserLoggedIn ? <Home /> : <Navigate to="/login" />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
