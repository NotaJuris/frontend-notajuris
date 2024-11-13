import './Content.css';
import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

function Comp2() {
  const [showEnviadas, setShowEnviadas] = useState(false);
  const [showRejeitadas, setShowRejeitadas] = useState(false);
  const [showDevolvidas, setShowDevolvidas] = useState(false);

  const toggleEnviadas = () => setShowEnviadas(!showEnviadas);
  const toggleRejeitadas = () => setShowRejeitadas(!showRejeitadas);
  const toggleDevolvidas = () => setShowDevolvidas(!showDevolvidas);

  const atividadesEnviadas = [
    { id: 1, nome: 'Prática Jurídica Simulada', quantidade: 60 },
    { id: 2, nome: 'Prática Jurídica Real', quantidade: 48 },
  ];

  const atividadesRejeitadas = [
    { id: 1, nome: 'Pratica Jurídica Simulada', quantidade: 12 },
    { id: 2, nome: 'Prática Jurídica Real', quantidade: 6 },
  ];

  const atividadesDevolvidas = [
    { id: 1, nome: 'Prática Jurídica Simulada', quantidade: 18 },
    { id: 2, nome: 'Praática Jurídica Real', quantidade: 24 },
  ];

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