import './Content.css';
import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

function Comp2(atividades) {
  const [showEnviadas, setShowEnviadas] = useState(false);
  const [showRejeitadas, setShowRejeitadas] = useState(false);
  const [showDevolvidas, setShowDevolvidas] = useState(false);

  const toggleEnviadas = () => setShowEnviadas(!showEnviadas);
  const toggleRejeitadas = () => setShowRejeitadas(!showRejeitadas);
  const toggleDevolvidas = () => setShowDevolvidas(!showDevolvidas);

  const atividadesEnviadas = atividades.filter(
    (atividade) => atividade.status === "ACEITO"
  );

  const atividadesRejeitadas = atividades.filter(
    (atividade) => atividade.status === "REJEITADO"
  );

  const atividadesDevolvidas = atividades.filter(
    (atividade) => atividade.status === "REENVIO"
  );

  return (
    <div className='content-button'>
      <h2>Semestral</h2>
      
      <div>
        <p className='enviadas' onClick={toggleEnviadas}>
          <div className='title-activity'>
          Atividades Enviadas
          </div>
          {showEnviadas ? <FaEyeSlash /> : <FaEye />}
        </p>
        {showEnviadas && (
          <ul>
            {atividadesEnviadas.map(atividade => (
              <li key={atividade.id}>
                <div className='atividade-item'>
                  <span>{atividade.nome}</span>
                  <span>{atividade.quantidade}</span>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div>
        <p className='rejeitadas' onClick={toggleRejeitadas}>
          <div className='title-activity'>
          Atividades Rejeitadas
          </div>
          {showRejeitadas ? <FaEyeSlash /> : <FaEye />}
        </p>
        {showRejeitadas && (
          <ul>
            {atividadesRejeitadas.map(atividade => (
              <li key={atividade.id}>
                <div className='atividade-item'>
                  <span>{atividade.nome}</span>
                  <span>{atividade.quantidade}</span>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div>
        <p className='devolvidas' onClick={toggleDevolvidas}>
          <div className='title-activity'>
          Atividades Devolvidas
          </div>
          {showDevolvidas ? <FaEyeSlash /> : <FaEye />}
        </p>
        {showDevolvidas && (
          <ul>
            {atividadesDevolvidas.map(atividade => (
              <li key={atividade.id}>
                <div className='atividade-item'>
                  <span>{atividade.nome}</span>
                  <span>{atividade.quantidade}</span>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Comp2;