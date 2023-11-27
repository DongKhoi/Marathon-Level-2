import React, { useState, useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/header';
import Footer from './Components/footer';
import YourContext from './Components/yourContext';
import Home from './Components/home';
import About from './Components/about';
import ReduxComponent from './Components/reduxComponent';
import ReduxThunkComponent from './Components/reduxThunkComponent';

function App() {
  const [mainContent, setMainContent] = useState("");

  useEffect(() => {
  }, []);

  const contextValue = "Giá trị Context của bạn";
  const text = "Marathon Cấp Độ 2";
  
  const handleHeaderClick = useCallback(() => {
    console.log("handleHeaderClick is called with text:", text);
    setMainContent("Component được mount22");
  }, [text]);

  const headerProps = {
    title: 'Tiêu đề Tùy chỉnh',
    subtitle: 'Phụ đề cho tiêu đề',
    onClick: handleHeaderClick,
  };

  return (
    <Router>
      <div>
        <YourContext.Provider value={contextValue}>
          <Header {...headerProps} />
        </YourContext.Provider>
        <p>{mainContent}</p>

        <Routes>
          <Route path="/redux-thunk" element={<ReduxThunkComponent />} />
          <Route path="/redux" element={<ReduxComponent />} />
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer title={text} />
      </div>
    </Router>
  );
}

export default App;
