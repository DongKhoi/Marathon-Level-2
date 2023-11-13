import React from 'react';
import Header from './components/header';
import Footer from './components/footer';

function App() {
  const headerProps = {
    title: 'Custom Header Title',
    subtitle: 'Subtitle for the header',
  };

  const text = "Marathon Level 2";
  return (
    <div>
      <Header {...headerProps} />
      <p>Main Content Goes Here</p>
      {/* ... */}
      <Footer title={text}/>
    </div>
  );
}

export default App;
