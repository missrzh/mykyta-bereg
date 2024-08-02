import React, { forwardRef, useState } from 'react';
import backgroundVideo from './../video/video.webm'; // Make sure to provide the correct path to your .webm file

const VideoWorkPage = forwardRef((props, ref) => {
    const [isHovered, setIsHovered] = useState(true);
    console.log(isHovered)

    return (
        <div className={`video-page-container section ${isHovered ? 'hovered' : ''}`} ref={ref}>
            {isHovered && (
                <video className="background-video" autoPlay loop muted>
                    <source src={backgroundVideo} type="video/webm" />
                    Your browser does not support the video tag.
                </video>
            )}
            <div className='video-section'>
                <div className='video-type-title'>COMMERCIAL</div>
                <div
                    className='video-link'
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    POLESTAR 2 - THE SILENT JOURNEY
                </div>
            </div>
            <div className='video-section'>
                <div className='video-type-title'></div>
            </div>
        </div>
    );
});

export default VideoWorkPage;
