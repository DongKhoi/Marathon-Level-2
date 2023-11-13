import User from './components/user';

function App() {
  
  const userprops={
      name: "Huy",
      age:"23",
      phone: "08012346"
};
  return (
    <div className="App">
      <User {...userprops}/>
    </div>
  );
}

export default App;
