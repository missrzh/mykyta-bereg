import React, { useRef, useState } from 'react';

const CustomVideoPlayer = ({ src }) => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(true)

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
        const isMutedNow = !videoRef.current.muted;
        videoRef.current.muted = isMutedNow;
        setIsMuted(isMutedNow);
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
                muted={true}
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
                    {isMuted ? (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill="currentColor" d="M6.5 8.5L12 4.5v15L6.5 15.5H4V8.5h2.5zM20 12c0 2.8-1.4 5.3-3.5 6.7v-2.2c1.2-1.1 2-2.7 2-4.5s-0.8-3.4-2-4.5V5.3c2.1 1.4 3.5 3.9 3.5 6.7zM16.5 12c0 1.1-0.3 2.1-1 3V9c0.7 0.9 1 1.9 1 3z" />
                        </svg>
                    ) : (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill="currentColor" d="M6.5 8.5L12 4.5v15L6.5 15.5H4V8.5h2.5z" />
                            <path fill="currentColor" d="M16.5 12c0-1.1-0.3-2.1-1-3V15c0.7-0.9 1-1.9 1-3z" />
                        </svg>
                    )}
                </button>
                <button className="fullscreen-control" onClick={toggleFullscreen}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 4H10V2H2V10H4V4Z" fill="currentColor" />
                        <path d="M4 20V14H2V22H10V20H4Z" fill="currentColor" />
                        <path d="M20 20H14V22H22V14H20V20Z" fill="currentColor" />
                        <path d="M14 2V4H20V10H22V2H14Z" fill="currentColor" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default CustomVideoPlayer;
