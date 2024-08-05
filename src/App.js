import React, { useRef, useState } from 'react';
import './App.css';
import FirstPageContent from './components/firstPageContent';
import VideoWorkPage from './components/videoworkPage';

function App() {
  const [hoveredVideo, setHoveredVideo] = useState(null);
  //const [isDarkTheme, setIsDarkTheme] = useState(true);
  //const setDarkTheme = () => {
  //  setIsDarkTheme(true);
  //};
  //
  //const setLightTheme = () => {
  //  setIsDarkTheme(false);
  //};

  const isDarkTheme = true
  const videoWorkRef = useRef(null);

  const scrollToVideoWork = () => {
    console.log('here')
    if (videoWorkRef.current) {
      videoWorkRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`App ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
      {hoveredVideo && (
        <video className="background-video" autoPlay loop muted preload="auto" poster={'./first-stop/logo512.png'} key={hoveredVideo.video}>
          <source src={hoveredVideo.video} type="video/webm" />
          Your browser does not support the video tag.
        </video>
      )}
      {
        //<div className='theme-button-container'>
        //  <div className='theme-button theme-button-dark' onClick={setDarkTheme}></div>
        //  <div className='theme-button theme-button-light' onClick={setLightTheme}></div>
        //</div>
      }
      <FirstPageContent onClick={scrollToVideoWork} />
      <VideoWorkPage ref={videoWorkRef} setHoveredVideo={setHoveredVideo} />

    </div>
  );
}

export default App;
