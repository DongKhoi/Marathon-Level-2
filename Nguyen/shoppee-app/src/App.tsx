import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import HomeComponent from './pages/home-component';
import LoginComponent from './pages/login-component';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';

const App :React.FC =()=>{
  const [isLoggedIn,setIsLoggedIn] =useState(false);
  return (<Router>
        <Routes>
          <Route
            path="/"
            element={isLoggedIn ?<HomeComponent></HomeComponent>:<Navigate to="/login" />}
          ></Route>
          <Route
            path="/login"
            element={isLoggedIn ?<HomeComponent></HomeComponent>:<LoginComponent setIsLoggedIn={setIsLoggedIn}></LoginComponent>}
          ></Route>
        </Routes>
      </Router>)
}

export default App;
