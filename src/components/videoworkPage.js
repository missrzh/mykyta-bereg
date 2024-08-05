import React, { forwardRef, useState } from 'react';
import video1 from './../video/video.webm'; // Make sure to provide the correct path to your .webm files
import video2 from './../video/NAVI-x-Puma.webm';
import video3 from './../video/Adidas-x-F.C.-Union.webm';
import video4 from './../video/Alfa-Bank-You-Can.webm';
import video5 from './../video/McDonalds-The-invisible.webm';
import video6 from './../video/Porsche-Taycan.webm';
import video7 from './../video/Porsche-F.A.T.-Mankei_1.webm';
import video8 from './../video/Puma-Mirage-Tech.webm';
import video9 from './../video/Volkswagen-This-is-Amarok.webm';
import video10 from './../video/Wanderlust.webm';
import video11 from './../video/David-Guetta-Ayra-Starr-Lil-Durk-Big-FU.webm'
import video12 from './../video/Madonna-Hung-Up-ft-Tokischa.webm'
import video13 from './../video/Michelle-Andrade-Na-Samoti.webm'
import video14 from './../video/Tyla-Yaweh-City-Of-Dreams-ft-Chris-Brown.webm'
// Add more imports as needed

const videoLinks = [
    { text: 'POLESTAR 2 - THE SILENT JOURNEY', video: video1 },
    { text: 'PUMA X NAVI', video: video2 },
    { text: 'ADIDAS X F.C. UNION', video: video3 },
    { text: 'ALFA BANK - YOU CAN', video: video4 },
    { text: 'MCDONALD`S - THE INVINCIBLE', video: video5 },
    { text: 'PORSCHE TAYCAN', video: video6 },
    { text: 'PORSCHE F.A.T. MANKEI', video: video7 },
    { text: 'PUMA MIRAGE TECH', video: video8 },
    { text: 'VOLKSWAGEN - THIS IS AMAROK', video: video9 },

    // Add more video links as needed
];

const videoMusicLinks = [
    { text: 'David Guetta, Ayra Starr & Lil Durk - Big FU', video: video11 },
    { text: 'Madonna - Hung Up ft. Tokischa', video: video12 },
    { text: 'Michelle Andrade — Na Samoti', video: video13 },
    { text: 'Tyla Yaweh - City Of Dreams ft. Chris Brown', video: video14 },

    // Add more video links as needed
];

const videoSHORTFILMLinks = [
    { text: 'WANDERLUST', video: video10 },

    // Add more video links as needed
];

const VideoWorkPage = forwardRef((props, ref) => {
    const [hoveredVideo, setHoveredVideo] = useState(null);

    return (
        <div className={`video-page-container section ${hoveredVideo ? 'hovered' : ''}`} ref={ref}>
            {hoveredVideo && (
                <video className="background-video" autoPlay loop muted poster={'./../first-stop/logo512.png'}>
                    <source src={hoveredVideo.video} type="video/webm" />
                    Your browser does not support the video tag.
                </video>
            )}
            <div className='video-section'>
                <div className='video-type-title'></div>
                {videoLinks.map((videoLink, index) => (

                    <div key={index}
                        className='video-link'
                        onMouseEnter={() => setHoveredVideo(videoLink)}
                        onMouseLeave={() => setHoveredVideo(null)}
                    >
                        {videoLink.text}
                    </div>

                ))}
                <div className='video-type-title'></div>
                {videoMusicLinks.map((videoLink, index) => (

                    <div key={index}
                        className='video-link'
                        onMouseEnter={() => setHoveredVideo(videoLink)}
                        onMouseLeave={() => setHoveredVideo(null)}
                    >
                        {videoLink.text}
                    </div>

                ))}
                <div className='video-type-title'></div>
                {videoSHORTFILMLinks.map((videoLink, index) => (

                    <div key={index}
                        className='video-link'
                        onMouseEnter={() => setHoveredVideo(videoLink)}
                        onMouseLeave={() => setHoveredVideo(null)}
                    >
                        {videoLink.text}
                    </div>

                ))}
            </div>

        </div>
    );
});

export default VideoWorkPage;
