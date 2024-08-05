import React, { forwardRef, useState } from 'react';
import video1 from './../video/video.webm';
import video2 from './../video/NAVI-x-Puma.webm';
import video3 from './../video/Adidas-x-F.C.-Union.webm';
import video4 from './../video/Alfa-Bank-You-Can.webm';
import video5 from './../video/McDonalds-The-invisible.webm';
import video6 from './../video/Porsche-Taycan.webm';
import video7 from './../video/Porsche-F.A.T.-Mankei_1.webm';
import video8 from './../video/Puma-Mirage-Tech.webm';
import video9 from './../video/Volkswagen-This-is-Amarok.webm';
import video10 from './../video/Wanderlust.webm';
import video11 from './../video/David-Guetta-Ayra-Starr-Lil-Durk-Big-FU.webm';
import video12 from './../video/Madonna-Hung-Up-ft-Tokischa.webm';
import video13 from './../video/Michelle-Andrade-Na-Samoti.webm';
import video14 from './../video/Tyla-Yaweh-City-Of-Dreams-ft-Chris-Brown.webm';

const videoLinks = [
    { text: 'ADIDAS X F.C. UNION', video: video3, darkTheme: true },
    { text: 'ALFA BANK - YOU CAN', video: video4, darkTheme: true },
    { text: 'BETTERME', video: null, darkTheme: true },
    { text: 'MCDONALD`S - THE INVINCIBLE', video: video5, darkTheme: true },
    { text: 'POLESTAR 2 - THE SILENT JOURNEY', video: video1, darkTheme: true },
    { text: 'PORSCHE F.A.T. MANKEI', video: video7, darkTheme: true },
    { text: 'PORSCHE TAYCAN', video: video6, darkTheme: true },
    { text: 'PUMA Forever Faster', video: null, darkTheme: true },
    { text: 'PUMA MIRAGE TECH', video: video8, darkTheme: true },
    { text: 'PUMA X FCSD', video: null, darkTheme: true },
    { text: 'PUMA X NAVI', video: video2, darkTheme: true },
    { text: 'PUMA X NAVI JERSEY', video: null, darkTheme: true },
    { text: 'VOLKSWAGEN - THIS IS AMAROK', video: video9, darkTheme: true },
    { text: 'YAMAHA R1: MOONBLADE', video: null, darkTheme: true },
    { text: 'UNDER ARMOUR - FOREVER IS MADE NOW.', video: null, darkTheme: true },
    { text: 'ZHILYOVA - CAMPAIGN CHAOS THEORY', video: null, darkTheme: true },
];


const videoMusicLinks = [
    { text: 'David Guetta, Ayra Starr & Lil Durk - Big FU', video: video11, darkTheme: false },
    { text: 'Madonna - Hung Up ft. Tokischa', video: video12, darkTheme: true },
    { text: 'Michelle Andrade — Na Samoti', video: video13, darkTheme: true },
    { text: 'Tyla Yaweh - City Of Dreams ft. Chris Brown', video: video14, darkTheme: true },
    { text: 'Twenty One Pilots - Paladin Strait', video: null, darkTheme: true },
    { text: 'Yeat - Berathe', video: null, darkTheme: true },
    { text: 'PEGGY GOU - LOBSTER TELEPHONE', video: null, darkTheme: true },
];


const videoSHORTFILMLinks = [
    { text: 'WANDERLUST', video: video10, darkTheme: true },
    { text: 'Now I know my ABCs - Short Film', video: null, darkTheme: true },
    { text: 'Jacob Company Dance Movie (coming soon)', video: null, darkTheme: true },
];



const VideoWorkPage = forwardRef(({ setHoveredVideo, setIsDarkTheme, isDarkTheme }, ref) => {
    const [changeTheme, setChangeTheme] = useState(false)

    const handleMouseEnter = (videoLink) => {
        setHoveredVideo(videoLink)
        if (isDarkTheme !== videoLink.darkTheme) {
            setChangeTheme(true)
            setIsDarkTheme(!isDarkTheme)
        }
    }

    const handleMouseLeave = () => {
        setHoveredVideo(null)
        if (changeTheme) {
            setChangeTheme(false)
            setIsDarkTheme(!isDarkTheme)
        }
    }
    return (

        <div className={`video-page-container section `} ref={ref}>

            <div className='video-section'>
                <div className='video-type-title'></div>
                {videoLinks.map((videoLink, index) => (
                    <div key={index}
                        className='video-link'
                        onMouseEnter={() => handleMouseEnter(videoLink)}
                        onMouseLeave={() => handleMouseLeave()}
                    >
                        {videoLink.text}
                    </div>
                ))}
                <div className='video-type-title'></div>
                {videoMusicLinks.map((videoLink, index) => (
                    <div key={index}
                        className='video-link'
                        onMouseEnter={() => handleMouseEnter(videoLink)}
                        onMouseLeave={() => handleMouseLeave()}
                    >
                        {videoLink.text}
                    </div>
                ))}
                <div className='video-type-title'></div>
                {videoSHORTFILMLinks.map((videoLink, index) => (
                    <div key={index}
                        className='video-link'
                        onMouseEnter={() => handleMouseEnter(videoLink)}
                        onMouseLeave={() => handleMouseLeave()}
                    >
                        {videoLink.text}
                    </div>
                ))}

            </div>
        </div>

    );
});

export default VideoWorkPage;
