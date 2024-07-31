import React, { useState } from 'react';
import './App.css';

function App() {
  // Состояние для управления видимостью модального окна
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Обработчик открытия модального окна
  const openModal = () => setIsModalOpen(true);

  // Обработчик закрытия модального окна
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
      </div>

      {/* Модальное окно и затемнение фона */}
      {isModalOpen && (
        <div className={`modal-overlay ${isModalOpen ? 'visible' : ''}`} onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <p>MYKYTA BEREG</p>
            <p>REPRESENTED BY<br></br>CHURCH EDIT</p>
            <p>CONTACT:</p>
            <p>Tel: +380 99 612 9641<br></br>Email: oveay.coop@gmail.com</p>
            <p>INSTAGRAM / VIMEO</p>

          </div>
        </div>
      )}
    </div>
  );
}

export default App;
