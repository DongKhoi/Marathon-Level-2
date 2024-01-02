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
      clientId: "611766092880-tf2reijp7r5lb1brl5f6qk9sb8k96kss.apps.googleusercontent.com",
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
          <Route path="/*" element={isUserLoggedIn ? <Home onLoginSuccess={handleLoginSuccess} /> : <Navigate to="/login" />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;