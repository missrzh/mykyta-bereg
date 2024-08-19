import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Contacts from './contacts';
import {
    setIsModalOpen,
    setIsScrollBtnVisible,
    setIsAtTop,
    setIsContactVisible,
    setIsSideTextVisible,
} from '../store/uiSlice';

const FirstPageContent = ({ onClick }) => {
    const dispatch = useDispatch();
    const {
        isModalOpen,
        isScrollBtnVisible,
        isAtTop,
        isContactVisible,
        isSideTextVisible,
    } = useSelector((state) => state.ui);

    const componentRef = useRef(null);
    const nameRef = useRef(null);
    const roleRef = useRef(null);

    useEffect(() => {
        const animateText = (element, delayMultiplier) => {
            const text = element.textContent;
            element.innerHTML = '';

            text.split('').forEach((char, index) => {
                const span = document.createElement('span');
                span.textContent = char;
                span.className = Math.random() > 0.5 ? 'up' : 'down';
                span.style.animationDelay = `${delayMultiplier + index * 0.1}s`;

                if (char === ' ') {
                    span.style.display = 'inline-block';
                    span.style.width = '0.5em';
                }

                element.appendChild(span);
            });
        };

        if (nameRef.current) {
            animateText(nameRef.current, 0);
        }
        if (roleRef.current) {
            animateText(roleRef.current, 1.5);
        }

        const nameAnimationDuration = 0 + 0.1 * nameRef.current.textContent.length;
        const totalAnimationDuration = nameAnimationDuration + 0.5;

        setTimeout(() => {
            dispatch(setIsScrollBtnVisible(true));
        }, totalAnimationDuration * 1000);
    }, [dispatch]);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercentage = (scrollPosition / totalHeight) * 100;

            if (scrollPercentage >= 49) {
                dispatch(setIsContactVisible(true));
                dispatch(setIsSideTextVisible(true));
            }

            dispatch(setIsAtTop(scrollPosition === 0));
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [dispatch]);

    const openModal = () => dispatch(setIsModalOpen(true));
    const closeModal = () => dispatch(setIsModalOpen(false));

    return (
        <div ref={componentRef}>
            <div className={`contact ${isContactVisible ? 'visible' : ''}`} onClick={openModal}>CONTACT</div>
            <Contacts isModalOpen={isModalOpen} closeModal={closeModal} />
            <div className="container" onClick={onClick}>
                <div className="content">
                    <p ref={nameRef} className="name">MYKYTA BEREG</p>
                    <p ref={roleRef} className="role">FILM EDITOR</p>
                </div>
                <div className={`side-text ${isSideTextVisible ? 'visible' : ''}`}>
                    <p>
                        <a href="https://www.instagram.com/oveay" target="_blank" rel="noopener noreferrer">OVEAY</a>
                    </p>
                </div>
                <div className={`scroll-btn ${isScrollBtnVisible && isAtTop ? 'show' : ''}`}>
                    CLICK ANYWHERE
                </div>
            </div>
        </div>
    );
}

export default FirstPageContent;
