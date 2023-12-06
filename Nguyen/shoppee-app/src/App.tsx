import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import HomeComponent from './pages/home-component';
import LoginComponent from './pages/login-component';
import { gapi } from "gapi-script";
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useEffect } from 'react';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('account') ? true : false);
  const setIsLoggedInFunction = (value: boolean) => {
    setIsLoggedIn(value);
    console.log(isLoggedIn);
  }
  const initializeGapi = () => {
    gapi.client.init({
      clientId: "1008439647437-nal3adv2m1m9l2ckshotpohrdst55ace.apps.googleusercontent.com",
      scope: "",
    });
  };

  useEffect(() => {
    // load and init google api scripts
    gapi.load("client:auth2", initializeGapi);
  })
  return (<Router>
    <Routes>
      <Route
        path="/*"
        element={isLoggedIn ? <HomeComponent setLoggedIn={setIsLoggedInFunction}></HomeComponent> : <Navigate to="/login" />}
      ></Route>
      <Route
        path="/login"
        element={isLoggedIn ? <Navigate to="/" /> : <LoginComponent setLoggedIn={setIsLoggedInFunction}></LoginComponent>}
      ></Route>
    </Routes>
  </Router>)
}

export default App;
