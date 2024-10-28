import React, { forwardRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setHoveredVideo } from '../store/videoSlice';
import { useNavigate } from 'react-router-dom';
import { setIsModalVideoOpen } from '../store/uiSlice';
import works from './../works.json';


const VideoWorkPage = forwardRef((_, ref) => {
    const dispatch = useDispatch();
    const { isContactVisible } = useSelector((state) => state.ui);
    const { hoveredVideo } = useSelector((state) => state.video)
    const navigate = useNavigate();

    const groupedWorks = works.reduce((acc, video) => {
        if (!acc[video.category]) {
            acc[video.category] = [];
        }
        acc[video.category].push(video);
        return acc;
    }, {});

    Object.keys(groupedWorks).forEach(category => {
        groupedWorks[category].sort((a, b) => a.text.localeCompare(b.text));
    });

    const handleMouseHover = (videoLink) => {
        dispatch(setHoveredVideo(videoLink));
    };

    const handleClick = () => {
        dispatch(setIsModalVideoOpen(true))
        dispatch(setHoveredVideo(null))
        navigate(`/${hoveredVideo.slug}`);
    };

    return (
        <div className={`video-page-container section`} ref={ref} >
            <div className={`video-section ${isContactVisible ? 'visible' : ''}`}>
                {Object.keys(groupedWorks).map((category) => (
                    <div key={category}>
                        <div className='video-type-title'></div>
                        {groupedWorks[category].map((videoLink, index) => (
                            <div className="video-link-container" key={index}>
                                <div
                                    className={`video-link ${hoveredVideo && hoveredVideo.text === videoLink.text ? 'video-link-hovered' : ''}`}
                                    onMouseEnter={() => handleMouseHover(videoLink)}
                                    onClick={() => handleClick()}
                                >
                                    {videoLink.text}
                                </div>
                            </div>
                        ))}
                    </div>
                ))}

            </div>
        </div>
    );
});

export default VideoWorkPage;