import React from 'react';

const Contacts = ({ isModalOpen, closeModal }) => {
    return (
        <div className={`modal-overlay ${isModalOpen ? 'visible' : ''}`} onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className={'custom-link'}>US/EU REPRESENTED BY <a href='https://edit.church/work?editor=mykyta-bereg' target="_blank" rel="noopener noreferrer">CHURCH.EDIT</a></div>
                <div className={'contact-margin'}><a href="tel:+380 99 612 9641">+380996129641</a><br /><a className={'custom-link'} href="mailto:oveay.coop@gmail.com">oveay.coop@gmail.com</a></div>
                <div className={'contact-margin'}>
                    <span className={'custom-link'}><a href='https://www.instagram.com/oveay' target="_blank" rel="noopener noreferrer">INSTAGRAM</a></span> <span className={'custom-link'}><a href='https://vimeo.com/oveay' target="_blank" rel="noopener noreferrer">VIMEO</a></span>
                </div>

            </div>
        </div>
    );
}

export default Contacts;
