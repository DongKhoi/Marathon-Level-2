import React, { useState, useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Use 'Routes' instead of 'Switch'
import Header from './components/header';
import Footer from './components/footer';
import YourContext from './components/yourContext';
import Home from './components/home';
import About from './components/about';
import ReduxComponent from './components/reduxComponent';
import ReduxThunkComponent from './components/reduxThunkComponent';

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

        <Routes> {/* Use 'Routes' instead of 'Switch' */}
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
