import React, { forwardRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setHoveredVideo } from '../store/videoSlice';
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
import video15 from './../video/betterme-_1080p_.webm';
import video16 from './../video/puma_forever_faster-_1440p__1.webm';
import video17 from './../video/puma_x_fcsd-_2160p_.webm';
import video18 from './../video/navi_x_puma_jersey (1440p).mp4';
import video19 from './../video/yamaha_r1__moonblade-_1440p__1-_1_.webm';
import video20 from './../video/under_armour_-_forever_is_made_now-_1440p__1.webm';
import video21 from './../video/zhilyova_-_campaign_chaos_theory-_1440p_.webm';
import video22 from './../video/twenty_one_pilots_-_paladin_strait-_1080p_.webm';
import video23 from './../video/YEAT-Breathe_1.webm';
import video24 from './../video/peggy_gou_-_lobster_telephone-_1440p_.webm';
import video25 from './../video/now_i_know_my_abcs_-_short_film-_1080p_.webm';
import video26 from './../video/cs_go_money-_1080p_.webm';
import video27 from './../video/dtf_summer_fest (1080p).webm';
import video28 from './../video/k1x_main_16x9.webm';
import video29 from './../video/madonna_gif.webm';

import adidasFcUnionShot from './../still-shots/adidas_x_f.c._union (2160p).00_00_00_00.Still002.png';
import alfaBankYouCanShot from './../still-shots/alfa_bank_-_you_Сan (1080p).00_00_00_00.Still001.png';
import bettermeShot from './../still-shots/betterme (1080p).00_00_00_00.Still001.png';
import csGoMoneyShot from './../still-shots/cs_go_money (1080p).00_00_00_00.Still001.png';
import dtfSummerFestShot from './../still-shots/dtf_summer_fest (1080p).00_00_00_00.Still001.png';
import k1xMainShot from './../still-shots/k1x_main_16x9.00_00_00_00.Still003.png';
import mcdonaldsInvisibleShot from './../still-shots/McDonalds_-_THE_INVISIBLE.00_00_00_00.Still001.png';
import naviPumaJerseyShot from './../still-shots/navi_x_puma_jersey (1440p).00_00_00_00.Still001.png';
import polestarSilentJourneyShot from './../still-shots/polestar_2_-_the_silent_journey (1440p).00_00_00_00.Still001.png';
import porscheTaycanSpecShot from './../still-shots/porsche_-_taycan_(spec) (1080p).00_00_00_00.Still001.png';
import porscheFatMankeiShot from './../still-shots/porsche_f.a.t._mankei (1440p).00_00_00_00.Still001.png';
import pumaForeverFasterShot from './../still-shots/puma_forever_faster (1440p).00_00_00_00.Still001 (1).png';
import pumaMirageTechShot from './../still-shots/PUMA_Mirage_Tech.00_00_00_00.Still003.png';
import pumaFcsdShot from './../still-shots/puma_x_fcsd (2160p).00_00_00_00.Still001.png';
import pumaXNaviShot from './../still-shots/PUMA_X_NAVI.00_00_00_00.Still001.png';
import underArmourForeverShot from './../still-shots/under_armour_-_forever_is_made_now (1440p).00_00_00_00.Still001.png';
import volkswagenAmarokShot from './../still-shots/VOLKSWAGEN_-_This_is_Amarok.00_00_00_00.Still001.png';
import yamahaMoonbladeShot from './../still-shots/yamaha_r1__moonblade (1440p).00_00_00_00.Still002.png';
import zhilyovaChaosTheoryShot from './../still-shots/zhilyova_-_campaign_chaos_theory (1440p).00_00_00_00.Still001.png';
import davidA from './../still-shots/david_guetta,_ayra_starr_&_lil_durk_-_big_fu (1080p).00_00_00_00.Still002.png'
import madonnaHung from './../still-shots/madonna_-_hung_up_ft._tokischa (1080p).00_00_00_00.Still001.png'
import michelleAndrade from './../still-shots/michelle_andrade_—_na_samoti (1080p).00_00_00_00.Still001.png'
import tylaYaweh from './../still-shots/tyla_yaweh_-_city_of_dreams_ft._chris_brown (2160p).00_00_00_00.Still003.png';
import twp from './../still-shots/twenty_one_pilots_-_paladin_strait (1080p).00_00_00_00.Still002.png'
import yeatBreath from './../still-shots/YEAT - Breathe.00_00_00_00.Still002.png'
import peggyPo from './../still-shots/peggy_gou_-_lobster_telephone (1440p).00_00_00_00.Still001.png'
import madonnaSel from './../still-shots/madonna_gif.00_00_00_00.Still001.png'
import wanderLust from './../still-shots/wanderlust (1440p).00_00_00_00.Still001.png'
import nowI from './../still-shots/now_i_know_my_abcs_-_short_film (1080p).00_00_00_00.Still003.png'

const videoLinks = [
    { text: 'ADIDAS X F.C. UNION', video: video3, darkTheme: true, bg: adidasFcUnionShot },
    { text: 'ALFA BANK - YOU CAN', video: video4, darkTheme: true, bg: alfaBankYouCanShot },
    { text: 'BETTERME', video: video15, darkTheme: true, bg: bettermeShot },
    { text: 'MCDONALD`S - THE INVINCIBLE', video: video5, darkTheme: true, bg: mcdonaldsInvisibleShot },
    { text: 'POLESTAR 2 - THE SILENT JOURNEY', video: video1, darkTheme: true, bg: polestarSilentJourneyShot },
    { text: 'PORSCHE F.A.T. MANKEI', video: video7, darkTheme: true, bg: porscheFatMankeiShot },
    { text: 'PORSCHE TAYCAN', video: video6, darkTheme: true, bg: porscheTaycanSpecShot },
    { text: 'PUMA Forever Faster', video: video16, darkTheme: true, bg: pumaForeverFasterShot },
    { text: 'PUMA MIRAGE TECH', video: video8, darkTheme: true, bg: pumaMirageTechShot },
    { text: 'PUMA X FCSD', video: video17, darkTheme: true, bg: pumaFcsdShot },
    { text: 'PUMA X NAVI', video: video2, darkTheme: true, bg: pumaXNaviShot },
    { text: 'PUMA X NAVI JERSEY', video: video18, darkTheme: true, bg: naviPumaJerseyShot },
    { text: 'VOLKSWAGEN - THIS IS AMAROK', video: video9, darkTheme: true, bg: volkswagenAmarokShot },
    { text: 'YAMAHA R1: MOONBLADE', video: video19, darkTheme: true, bg: yamahaMoonbladeShot },
    { text: 'UNDER ARMOUR - FOREVER IS MADE NOW.', video: video20, darkTheme: true, bg: underArmourForeverShot },
    { text: 'ZHILYOVA - CAMPAIGN CHAOS THEORY', video: video21, darkTheme: true, bg: zhilyovaChaosTheoryShot },
    { text: 'CS:GO Money', video: video26, darkTheme: true, bg: csGoMoneyShot },
    { text: 'DTF Magazine', video: video27, darkTheme: true, bg: dtfSummerFestShot },
    { text: 'K1X', video: video28, darkTheme: true, bg: k1xMainShot },
];


const videoMusicLinks = [
    { text: 'David Guetta, Ayra Starr & Lil Durk - Big FU', video: video11, darkTheme: false, bg: davidA },
    { text: 'Madonna - Hung Up ft. Tokischa', video: video12, darkTheme: true, bg: madonnaHung },
    { text: 'Michelle Andrade — Na Samoti', video: video13, darkTheme: true, bg: michelleAndrade },
    { text: 'Tyla Yaweh - City Of Dreams ft. Chris Brown', video: video14, darkTheme: true, bg: tylaYaweh },
    { text: 'Twenty One Pilots - Paladin Strait', video: video22, darkTheme: true, bg: twp },
    { text: 'Yeat - Berathe', video: video23, darkTheme: true, bg: yeatBreath },
    { text: 'PEGGY GOU - LOBSTER TELEPHONE', video: video24, darkTheme: true, bg: peggyPo },
    { text: 'Madonna - The Celebration Tour', video: video29, darkTheme: true, bg: madonnaSel },
];


const videoSHORTFILMLinks = [
    { text: 'WANDERLUST', video: video10, darkTheme: true, bg: wanderLust },
    { text: 'Now I know my ABCs - Short Film', video: video25, darkTheme: true, bg: nowI },
];



const VideoWorkPage = forwardRef((_, ref) => {
    const dispatch = useDispatch();
    const { isContactVisible } = useSelector((state) => state.ui);
    const { hoveredVideo } = useSelector((state) => state.video)

    const handleMouseHover = (videoLink) => {
        dispatch(setHoveredVideo(videoLink));
    };

    return (
        <div className={`video-page-container section`} ref={ref} >
            <div className={`video-section ${isContactVisible ? 'visible' : ''}`}>
                <div className='video-type-title'></div>
                {videoLinks.map((videoLink, index) => (
                    <div className="video-link-container" key={index}>
                        <div className={`video-link ${hoveredVideo && hoveredVideo.text === videoLink.text ? 'video-link-hovered' : ''}`} onMouseEnter={() => handleMouseHover(videoLink)}>
                            {videoLink.text}
                        </div>
                    </div>
                ))}
                <div className='video-type-title'></div>
                {videoMusicLinks.map((videoLink, index) => (
                    <div className="video-link-container" key={index}>
                        <div className={`video-link ${hoveredVideo && hoveredVideo.text === videoLink.text ? 'video-link-hovered' : ''}`} onMouseEnter={() => handleMouseHover(videoLink)}>
                            {videoLink.text}
                        </div>
                    </div>
                ))}
                <div className='video-type-title'></div>
                {videoSHORTFILMLinks.map((videoLink, index) => (
                    <div className="video-link-container" key={index}>
                        <div className={`video-link ${hoveredVideo && hoveredVideo.text === videoLink.text ? 'video-link-hovered' : ''}`} onMouseEnter={() => handleMouseHover(videoLink)}>
                            {videoLink.text}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
});

export default VideoWorkPage;