import React, { useState, useEffect } from 'react';
import works from './../works.json'; // Импортируем JSON-файл из папки src
import CustomVideoPlayer from './customVideoPlayer';

const VideoModal = ({ slug, isModalVideoOpen, closeModal }) => {
    const [videoDetails, setVideoDetails] = useState(null);

    useEffect(() => {
        // Ищем объект по slug из импортированного JSON
        const foundVideo = works.find(video => video.slug === slug);
        setVideoDetails(foundVideo);
    }, [slug]);




    // Если данные еще загружаются или не найдены, можно вернуть null или какой-то индикатор загрузки
    if (!videoDetails) {
        return null;
    }

    return (
        <div className={`modal-overlay ${isModalVideoOpen ? 'visible' : ''}`} >
            <div className={"video-page"} onClick={closeModal}>
                <div className={'single-video-title'} onClick={(e) => e.stopPropagation()}>{videoDetails.text}
                    <div onClick={closeModal} className='close-modal'>X</div>
                </div>

                <CustomVideoPlayer src={videoDetails["full-video"]} closeModal={closeModal} className={"video-normal"} />



                <div className={"video-details"} onClick={(e) => e.stopPropagation()}>
                    <p>Director: {videoDetails.director || 'Unknown'}</p>
                    <p>Produсtion Company: {videoDetails.production || 'Unknown'}</p>
                </div>
            </div>

        </div>
    );
};

export default VideoModal;
