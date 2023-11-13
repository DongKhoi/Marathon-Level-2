import logo from './logo.svg';
import './App.css';
import User from './components/User';
function App() {
  var user={name:"nguyen" , age: 50 , phone:"09183404180"};
  return (
    <User person={user}></User>
  );
}

export default App;
