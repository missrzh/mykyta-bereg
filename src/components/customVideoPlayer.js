import React, { useRef, useState } from 'react';

const CustomVideoPlayer = ({ src }) => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlay = () => {
        if (videoRef.current.paused) {
            videoRef.current.play();
            setIsPlaying(true);
        } else {
            videoRef.current.pause();
            setIsPlaying(false);
        }
    };

    const handleProgress = () => {
        const progress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
        document.getElementById('visible-progress').style.width = `${progress}%`;
    };

    const handleProgressClick = (event) => {
        const progressBar = event.target;
        const rect = progressBar.getBoundingClientRect();
        const offsetX = event.clientX - rect.left;
        const width = rect.width;
        const clickPosition = offsetX / width;
        videoRef.current.currentTime = clickPosition * videoRef.current.duration;
    };

    const toggleMute = () => {
        videoRef.current.muted = !videoRef.current.muted;
    };

    const toggleFullscreen = () => {
        if (videoRef.current.requestFullscreen) {
            videoRef.current.requestFullscreen();
        } else if (videoRef.current.mozRequestFullScreen) {
            videoRef.current.mozRequestFullScreen();
        } else if (videoRef.current.webkitRequestFullscreen) {
            videoRef.current.webkitRequestFullscreen();
        } else if (videoRef.current.msRequestFullscreen) {
            videoRef.current.msRequestFullscreen();
        }
    };

    return (
        <div className="custom-video-player" onClick={(e) => e.stopPropagation()} >
            <video
                className="single-video"
                ref={videoRef}
                onTimeUpdate={handleProgress}
                onClick={togglePlay}
            >
                <source src={src} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className={`controls`}>
                <button className="play-pause" onClick={togglePlay}>
                    {isPlaying ? (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="6" y="5" width="4" height="14" fill="currentColor" />
                            <rect x="14" y="5" width="4" height="14" fill="currentColor" />
                        </svg>
                    ) : (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <polygon points="5,3 19,12 5,21" fill="currentColor" />
                        </svg>
                    )}
                </button>
                <div className="progress-bar" onClick={handleProgressClick}>
                    <div className="background-progress" />
                    <div id="visible-progress" className="visible-progress" />
                </div>
                <button className="mute-control" onClick={toggleMute}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 8.5V15.5C5 15.78 5.22 16 5.5 16H9L13.5 19.5C13.78 19.78 14 19.64 14 19.2V4.8C14 4.36 13.78 4.22 13.5 4.5L9 8H5.5C5.22 8 5 8.22 5 8.5ZM16 9.3V14.7C16.94 13.9 17.5 12.6 17.5 11C17.5 9.4 16.94 8.1 16 7.3ZM19 6C20.38 7.26 21.25 9.05 21.25 11C21.25 12.95 20.38 14.74 19 16V6Z" fill="currentColor" />
                    </svg>
                </button>
                <button className="fullscreen-control" onClick={toggleFullscreen}>⛶</button>
            </div>
        </div>
    );
};

export default CustomVideoPlayer;
