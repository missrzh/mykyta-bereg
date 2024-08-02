import React, { useState } from 'react';
import './App.css';
import FirstPageContent from './components/firstPageContent';

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const setDarkTheme = () => {
    setIsDarkTheme(true);
  };

  const setLightTheme = () => {
    setIsDarkTheme(false);
  };

  return (
    <div className={`App ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
      <div className='theme-button-container'>
        <div className='theme-button theme-button-dark' onClick={setDarkTheme}></div>
        <div className='theme-button theme-button-light' onClick={setLightTheme}></div>
      </div>

      <FirstPageContent />
    </div>
  );
}

export default App;
