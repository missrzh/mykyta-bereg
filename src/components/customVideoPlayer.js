import React, { useRef, useState } from 'react';

const CustomVideoPlayer = ({ src, closeModal }) => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [volume, setVolume] = useState(1); // Default volume at 100%
    const [showVolumeControl, setShowVolumeControl] = useState(false);



    const handleCanPlay = () => {
        setIsLoading(false);
    };

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

    const handleVolumeChange = (e) => {
        const newVolume = parseFloat(e.target.value);
        setVolume(newVolume);
        videoRef.current.volume = newVolume; // Устанавливаем громкость видео
        if (newVolume > 0) {
            setIsMuted(false); // Автоматически отключаем мут, если громкость больше 0
            videoRef.current.muted = false;
        } else {
            setIsMuted(true); // Если громкость 0, ставим мут
            videoRef.current.muted = true;
        }
    };
    return (
        <div className="custom-video-player" onClick={(e) => e.stopPropagation()}>
            {isLoading && (
                <div className="loading-container" onClick={closeModal}>
                    <div className="loading-spinner">
                        <div className="trapezoid"></div>
                        <div className="trapezoid"></div>
                        <div className="trapezoid"></div>
                        <div className="trapezoid"></div>
                        <div className="trapezoid"></div>
                        <div className="trapezoid"></div>
                        <div className="trapezoid"></div>
                        <div className="trapezoid"></div>
                        <div className="trapezoid"></div>
                        <div className="trapezoid"></div>
                        <div className="trapezoid"></div>
                        <div className="trapezoid"></div>

                        {/* Loading spinner logic */}
                    </div>
                </div>
            )}

            <video
                className="single-video"
                ref={videoRef}
                onTimeUpdate={handleProgress}
                onCanPlay={handleCanPlay}
                onClick={togglePlay}
                muted={isMuted}
                style={{ display: isLoading ? 'none' : 'block' }}
            >
                <source src={src} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {!isLoading && (
                <div>
                    <div className="controls">
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
                        <div
                            style={{ position: "relative", display: "inline-block" }}
                            onMouseEnter={() => setShowVolumeControl(true)} // Показываем слайдер при наведении
                            onMouseLeave={() => setShowVolumeControl(false)} // Скрываем слайдер при уходе
                        >
                            <button className="mute-control" onClick={toggleMute}>
                                {isMuted ? (
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill="currentColor" d="M6.5 8.5L12 4.5v15L6.5 15.5H4V8.5h2.5z" />
                                        <path fill="currentColor" d="M16.5 12c0-1.1-0.3-2.1-1-3V15c0.7-0.9 1-1.9 1-3z" />
                                    </svg>
                                ) : (
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill="currentColor" d="M6.5 8.5L12 4.5v15L6.5 15.5H4V8.5h2.5zM20 12c0 2.8-1.4 5.3-3.5 6.7v-2.2c1.2-1.1 2-2.7 2-4.5s-0.8-3.4-2-4.5V5.3c2.1 1.4 3.5 3.9 3.5 6.7zM16.5 12c0 1.1-0.3 2.1-1 3V9c0.7 0.9 1 1.9 1 3z" />
                                    </svg>
                                )}
                            </button>

                            {showVolumeControl && (
                                <div className="volume-slider">
                                    <input
                                        type="range"
                                        min="0"
                                        max="1"
                                        step="0.01"
                                        value={volume}
                                        onChange={handleVolumeChange}
                                        aria-label="Volume control"
                                        className="slider"
                                    />
                                </div>
                            )}

                            <style jsx>{`
        .mute-control {
          cursor: pointer;
          background: none;
          border: none;
          padding: 0;
        }

        .volume-slider {
          position: absolute;
          bottom: 2px; /* Располагаем над кнопкой звука */
          left: 50%;
          transform: translateX(-50%);
          width: 25px;
          height: 120px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .slider {
          -webkit-appearance: none;
          appearance: none;
          width: 60px; /* Длина слайдера */
          height: 2px;
          background: #ffffff; /* Фон слайдера */
          border-radius: 2px;
          outline: none;
          opacity: 0.7;
          transition: opacity 0.2s;
          transform: rotate(-90deg); /* Поворот для вертикального слайдера */
        }

        .slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 8px;
          height: 8px;
          background-color: #ffffff; /* Цвет ползунка */
          border-radius: 50%;
          cursor: pointer;
        }

        .slider::-moz-range-thumb {
          width: 16px;
          height: 16px;
          background-color: #000; /* Цвет ползунка */
          border-radius: 50%;
          cursor: pointer;
        }
      `}</style>
                        </div>



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
            )}
        </div>
    );
};

export default CustomVideoPlayer;
