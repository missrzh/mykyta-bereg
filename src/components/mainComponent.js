import React from 'react';
import FirstPageContent from './firstPageContent';
import VideoWorkPage from './videoworkPage';
import { useSelector, useDispatch } from 'react-redux';
import VideoModal from './videoModal';
import { setIsModalVideoOpen } from '../store/uiSlice'
import { useNavigate } from 'react-router-dom';


const MainComponent = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { hoveredVideo } = useSelector((state) => state.video);
    const { isModalVideoOpen } = useSelector((state) => state.ui)

    const videoWorkRef = React.useRef(null);

    const scrollToVideoWork = () => {
        if (videoWorkRef.current) {
            videoWorkRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const closeModal = () => {
        dispatch(setIsModalVideoOpen(false))
        navigate('/mykyta-bereg');
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
            {isModalVideoOpen && (
                <VideoModal closeModal={closeModal} isModalVideoOpen={isModalVideoOpen} />
            )}
        </div>
    )
}

export default MainComponent