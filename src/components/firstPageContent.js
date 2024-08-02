import React, { useState } from 'react';
import Contacts from './contacts';

const FirstPageContent = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className="App">
            <div className="container">
                <p className="contact" onClick={openModal}>CONTACT</p>
                <div className="content">
                    <p className="name">MYKYTA BEREG</p>
                    <p className="role">FILM EDITOR</p>
                </div>
                <div className="side-text">
                    <p>
                        <a href="https://www.instagram.com/oveay" target="_blank" rel="noopener noreferrer">MYKYTA BEREG</a>
                    </p>
                </div>
                <div className='scroll-btn'>
                    CLICK ANYWHERE
                </div>
            </div>
            <Contacts isModalOpen={isModalOpen} closeModal={closeModal} />

        </div>
    );
}

export default FirstPageContent;
