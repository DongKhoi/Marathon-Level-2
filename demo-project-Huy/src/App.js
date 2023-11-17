import User from './components/user';
import React, { useState, useEffect } from 'react';
import Customer from './components/customer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  useEffect(() => {
    console.log("Day la message 1")
    console.log("Day la message 2")
  }, []);
 // const [State, setState] = useState([]);
  //const setButton = () => {
    //setState(Math.random())
  //}
  const userprops = {
    name: "Huy",
    age: "23",
    phone: "08012346"
  };

  return (
    <div className="App">
    
      
      <Router>
        <Routes>
          <Route path="/" element={<User {...userprops} />} />
          <Route path="/customer" element={<Customer />} />
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
