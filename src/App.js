import React from 'react';
import './App.css';
import FirstPageContent from './components/FirstPageContent';
import VideoWorkPage from './components/VideoworkPage';
import { useSelector } from 'react-redux';

function App() {
  const { hoveredVideo } = useSelector((state) => state.video);
  const videoWorkRef = React.useRef(null);

  const scrollToVideoWork = () => {
    if (videoWorkRef.current) {
      videoWorkRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (

    <div className={`App dark-theme`}>
      {hoveredVideo && (
        <video className="background-video" autoPlay loop muted playsInline preload="metadata" key={hoveredVideo.video}>
          <source src={hoveredVideo.video} type="video/webm" />
          Your browser does not support the video tag.
        </video>
      )}

      <FirstPageContent onClick={scrollToVideoWork} />
      <VideoWorkPage ref={videoWorkRef} />
    </div>

  );
}

export default App;
