import React from 'react';

const Contacts = ({ isModalOpen, closeModal }) => {
    return (
        <div className={`modal-overlay ${isModalOpen ? 'visible' : ''}`} onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className='contact-name'>MYKYTA BEREG</div>
                <div className={'contact-margin'}>
                    US Representation by <div className='custom-link'>
                        <a href='https://edit.church/work?editor=mykyta-bereg' target="_blank" rel="noopener noreferrer"> Church</a><br></br>
                        <a href="mailto:production@edit.church">production@edit.church</a>
                    </div>
                </div>
                <div className={'contact-margin'}>
                    Executive Producer: LauRenn Reed
                    <div className='custom-link'><br></br>
                        <a href="mailto:laurenn@edit.church">laurenn@edit.church</a>
                    </div>
                </div>
                <div className={'contact-margin'}>
                    Personal:
                    <div className='custom-link'><br></br>
                        <a href="mailto:oveay.coop@gmail.com">oveay.coop@gmail.com</a>
                    </div>
                </div>
                <div className={'contact-margin'}>
                    <span className={'custom-link'}><a href='https://www.instagram.com/oveay' target="_blank" rel="noopener noreferrer">INSTAGRAM</a></span><br></br> <span className={'custom-link'}><a href='https://vimeo.com/oveay' target="_blank" rel="noopener noreferrer">VIMEO</a></span>
                </div>

            </div>
        </div>
    );
}

export default Contacts;
