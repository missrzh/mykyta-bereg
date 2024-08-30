import React from 'react';
import video28 from './../video/k1x_main_16x9.mp4';
import CustomVideoPlayer from './customVideoPlayer';

const VideoModal = ({ video, isModalVideoOpen, closeModal }) => {
    const videoDetails = {
        title: "David Guetta, Ayra Starr & Lil Durk - Big FU",
        videoSrc: video28,
        director: "SEN",
        productionCompany: "Seek.studio"
    }
    return (
        <div className={`modal-overlay ${isModalVideoOpen ? 'visible' : ''}`} >
            <div className={"video-page"} onClick={closeModal}>
                <div className={'single-video-title'} onClick={(e) => e.stopPropagation()}>{videoDetails.title}</div>
                <CustomVideoPlayer src={videoDetails.videoSrc} />



                <div className={"video-details"} onClick={(e) => e.stopPropagation()}>
                    <p>Director: {videoDetails.director}</p>
                    <p>Produсtion Company: {videoDetails.productionCompany}</p>
                </div>
            </div>
        </div>
    );
};

export default VideoModal;
