// import logo from "./logo.svg";
// import "./App.css";
import User from "./component/user";

function App() {
  const UserNames = {
    name: "Nguyễn Tâm",
    age: "Tuổi : 25",
    phone: "SĐT : 0982131512",
  };
  return (
    <div>
      <User {...UserNames} />
    </div>
  );
}

export default App;
