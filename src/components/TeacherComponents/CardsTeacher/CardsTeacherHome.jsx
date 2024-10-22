import React, { useState } from 'react';
import './CardsTeacherHome.css';

const CardsTeacherHome = ({ title, fullName, registrationNumber, date }) => {
  const [showModal, setShowModal] = useState(false); // Estado para controlar o modal

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="cards-teacher-home">
      <h2 className="card-teacher-title">{title}</h2>
      <p className="card-teacher-description">{fullName}</p>
      <p className="card-teacher-date">Enviado dia {date}</p>
      <p className="card-teacher-registrationNumber">Matricula: {registrationNumber}</p>
      <button className="card-teacher-button" onClick={handleOpenModal}>Ver mais</button>

      {showModal && (
        <div className="modal-overlay">

          <div className="modal-content">
            <h3>{title}</h3>
            <p>Enviado por {fullName} no dia {date}</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea voluptatum omnis iusto et similique natus doloribus modi officiis sequi veritatis nam autem, facere repudiandae deleniti eligendi, sint minima veniam. Voluptatem?
            </p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque modi est consequuntur, a aliquid illo voluptatibus perspiciatis repudiandae laborum natus similique doloribus aut repellat adipisci quibusdam quidem veritatis praesentium eos. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam doloribus obcaecati perspiciatis incidunt veritatis ab molestiae accusamus recusandae distinctio voluptas quas, quasi, autem suscipit quam nostrum tempora eligendi eaque vitae. </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque soluta impedit velit sed porro veritatis id rem culpa ipsam consequatur. Dolorum eveniet earum unde dolor quaerat, consequuntur impedit quidem perferendis?</p>
            <div className="modal-button-container">
                <button className="close-modal-button" onClick={handleCloseModal}>Reenviar</button>
                <button className="close-modal-button" onClick={handleCloseModal}>Recusar</button>
                <button className="close-modal-button" onClick={handleCloseModal}>Aceitar</button>
            </div>
            
          </div>
        </div>
      )}
    </div>
  );
};

export default CardsTeacherHome;
