import React, { useRef, useState } from 'react';
import './App.css';
import FirstPageContent from './components/firstPageContent';
import VideoWorkPage from './components/videoworkPage';

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [hoveredVideo, setHoveredVideo] = useState(null);

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
      {hoveredVideo && (
        <video className="background-video" autoPlay loop muted preload="auto" poster={'./first-stop/logo512.png'}>
          <source src={hoveredVideo.video} type="video/webm" />
          Your browser does not support the video tag.
        </video>
      )}
      <div className='theme-button-container'>
        <div className='theme-button theme-button-dark' onClick={setDarkTheme}></div>
        <div className='theme-button theme-button-light' onClick={setLightTheme}></div>
      </div>

      <FirstPageContent onClick={scrollToVideoWork} />
      <VideoWorkPage ref={videoWorkRef} setHoveredVideo={setHoveredVideo} setIsDarkTheme={setIsDarkTheme} isDarkTheme={isDarkTheme} />

    </div>
  );
}

export default App;
