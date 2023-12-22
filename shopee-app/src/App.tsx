import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Login from './pages/login';
import Home from './pages/home';

function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(!!localStorage.getItem('user'));
  
  const handleLoginSuccess = (isLoggedIn: boolean) => {
    setIsUserLoggedIn(isLoggedIn);
  };

  return (
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
  );
}

export default App;