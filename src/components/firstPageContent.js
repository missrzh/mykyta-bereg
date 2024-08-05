import React, { useState } from 'react';
import Contacts from './contacts';

const FirstPageContent = ({ onClick }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div >
            <div className="contact" onClick={openModal}>CONTACT</div>
            <Contacts isModalOpen={isModalOpen} closeModal={closeModal} />
            <div className="container" onClick={onClick}>
                <div className="content">
                    <p className="name">MYKYTA BEREG</p>
                    <p className="role">FILM EDITOR</p>
                </div>
                <div className="side-text">
                    <p>
                        <a href="https://www.instagram.com/oveay" target="_blank" rel="noopener noreferrer">OVEAY</a>
                    </p>
                </div>
                <div className='scroll-btn'>
                    CLICK ANYWHERE
                </div>
            </div>


        </div>
    );
}

export default FirstPageContent;
