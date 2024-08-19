import React from 'react';
import './App.css';
import FirstPageContent from './components/firstPageContent';
import VideoWorkPage from './components/videoworkPage';
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
        <video

          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          key={hoveredVideo.video}
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            width: '100%',
            height: '100vh',
            objectFit: 'cover',
            transform: 'translate(-50%, -50%)',
            zIndex: 1,
            pointerEvents: 'none',
            backgroundImage: `url('${hoveredVideo.bg}')`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',

          }}
        >
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
