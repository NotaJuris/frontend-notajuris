import React, { useState } from 'react';
import './CardsTeacherHome.css';
import ApiScripts from "../../../scripts/ApiEndpoints"

function CardsTeacherHome(props){
  const [showModal, setShowModal] = useState(false); // Estado para controlar o modal

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleAvaliacao = (avaliacao) => {

    const apiScripts = new ApiScripts();
    const token = localStorage.getItem("currentUserToken");

    const response = apiScripts.avaliarAtividade(props.atividade.id, avaliacao, token);
    console.log(response)
    setShowModal(!showModal);
  };

  return (
    <div className="cards-teacher-home">
      <h2 className="card-teacher-title">{props.atividade.tipo}</h2>
      <p className="card-teacher-description">{props.atividade.descricao}</p>
      <p className="card-teacher-date">Enviado dia {`${props.atividade.data_atividade[2]}/${props.atividade.data_atividade[1]}/${props.atividade.data_atividade[0]}`}</p>
      //<p className="card-teacher-registrationNumber">Matricula: {}</p>
      <button className="card-teacher-button" onClick={handleOpenModal}>Ver mais</button>

      {showModal && (
        <div className="modal-overlay">

          <div className="modal-content">
            <h3>{props.atividade.tipo}</h3>
            <p>Enviado por {props.atividade.aluno} no dia {`${props.atividade.data_atividade[2]}/${props.atividade.data_atividade[1]}/${props.atividade.data_atividade[0]}`}</p>
            <p>{props.atividade.descricao}</p>
            <div className="modal-button-container">
                <button className="close-modal-button" onClick={() => handleAvaliacao("REENVIO")}>Reenviar</button>
                <button className="close-modal-button" onClick={() => handleAvaliacao("REJEITADO")}>Recusar</button>
                <button className="close-modal-button" onClick={() => handleAvaliacao("ACEITO")}>Aceitar</button>
            </div>
            
          </div>
          <button onClick={() => setShowModal(!showModal)}>Fechar</button>
        </div>
      )}
    </div>
  );
};

export default CardsTeacherHome;
