import logo from "./logo.svg";
import "./App.css";
import User from "./components/User";
import CustomerComponent from "./components/CustomerComponent";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    console.log("This console log print anytime app render");
  }, []);
  var user = { name: "nguyen", age: 50, phone: "09183404180" };
  return (
    <Router>
      <Routes>
        <Route path="/customer" element={<CustomerComponent></CustomerComponent>}></Route>
        <Route path="/" element={<User person={user}></User>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
