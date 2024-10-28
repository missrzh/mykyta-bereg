import React from 'react';
import FirstPageContent from './firstPageContent';
import VideoWorkPage from './videoworkPage';
import { useSelector, useDispatch } from 'react-redux';
import VideoModal from './videoModal';
import { setIsModalVideoOpen } from '../store/uiSlice'
import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import works from '../works.json'; // Импорт JSON-файла


const MainComponent = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { slug } = useParams();
    slug ? dispatch(setIsModalVideoOpen(true)) : dispatch(setIsModalVideoOpen(false));


    const { hoveredVideo } = useSelector((state) => state.video);
    const { isModalVideoOpen } = useSelector((state) => state.ui)
    const [imagesLoaded, setImagesLoaded] = useState(false);

    useEffect(() => {
        const imageUrls = works.map((work) => work.bg);

        // Предзагружаем изображения
        preloadBackgroundImages(imageUrls)
            .then(() => {
                setImagesLoaded(true); // Все изображения загружены
            })
            .catch((error) => {
                console.error('Ошибка при загрузке фоновых изображений:', error);
            });
    }, []);

    const videoWorkRef = React.useRef(null);

    const scrollToVideoWork = () => {
        if (videoWorkRef.current) {
            videoWorkRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const closeModal = () => {
        dispatch(setIsModalVideoOpen(false))
        navigate('/');
    };
    const preloadBackgroundImages = (imageUrls) => {
        const promises = imageUrls.map((url) => {
            return new Promise((resolve, reject) => {
                const img = new Image();
                img.src = url;
                img.onload = resolve;
                img.onerror = reject;
            });
        });
        return Promise.all(promises);
    };
    if (!imagesLoaded) {
        return <div></div>; // Можно отобразить индикатор загрузки
    }

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
                <VideoModal closeModal={closeModal} isModalVideoOpen={isModalVideoOpen} slug={slug} />
            )}
        </div>
    )
}

export default MainComponent