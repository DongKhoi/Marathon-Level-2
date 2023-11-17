import logo from "./logo.svg";
import "./App.css";
import User from "./components/User";
import CustomerComponent from "./components/CustomerComponent";
import Header from "./components/Layers/Header";
import Footer from "./components/Layers/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
function App() {
  useEffect(() => {
    console.log("This console log print anytime app render");
  }, []);
  var user = { name: "nguyen", age: 50, phone: "09183404180" };
  const [color, setColor] = useState("rgb(52, 174, 235)");
  const chooseColor = (color) => {
    setColor(color);
  };
  return (
    <div>
      <Header color={color}></Header>
      <Router>
        <Routes>
          <Route
            path="/customer"
            element={<CustomerComponent></CustomerComponent>}
          ></Route>
          <Route
            path="/"
            element={<User person={user} chooseColor={chooseColor}></User>}
          ></Route>
        </Routes>
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;
