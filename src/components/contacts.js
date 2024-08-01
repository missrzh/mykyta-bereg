import React from 'react';

const Contacts = ({ isModalOpen, closeModal }) => {
    return (
        <div className={`modal-overlay ${isModalOpen ? 'visible' : ''}`} onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <p>MYKYTA BEREG</p>
                <p>REPRESENTED BY<br />CHURCH EDIT</p>
                <p>CONTACT:</p>
                <p><a href="tel:+380 99 612 9641">+380 99 612 9641</a><br /><a href="mailto:oveay.coop@gmail.com">oveay.coop@gmail.com</a></p>
                <p><a href='https://www.instagram.com/oveay' target="_blank" rel="noopener noreferrer">INSTAGRAM</a> /<a href='https://vimeo.com/oveay' target="_blank" rel="noopener noreferrer">VIMEO</a></p>
            </div>
        </div>
    );
}

export default Contacts;
