import React, { useRef, useState } from 'react';
import './App.css';
import FirstPageContent from './components/firstPageContent';
import VideoWorkPage from './components/videoworkPage';

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const setDarkTheme = () => {
    setIsDarkTheme(true);
  };

  const setLightTheme = () => {
    setIsDarkTheme(false);
  };

  // Создайте реф для VideoWorkPage
  const videoWorkRef = useRef(null);

  // Функция для прокрутки к VideoWorkPage
  const scrollToVideoWork = () => {
    console.log('here')
    if (videoWorkRef.current) {
      videoWorkRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`App ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
      <div className='theme-button-container'>
        <div className='theme-button theme-button-dark' onClick={setDarkTheme}></div>
        <div className='theme-button theme-button-light' onClick={setLightTheme}></div>
      </div>

      <FirstPageContent onClick={scrollToVideoWork} />
      <VideoWorkPage ref={videoWorkRef} />

    </div>
  );
}

export default App;
