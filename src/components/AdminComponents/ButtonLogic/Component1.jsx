import './Content.css';
import React, { useState } from 'react';

function Comp1() {
  const [showEnviadas, setShowEnviadas] = useState(false);
  const [showRejeitadas, setShowRejeitadas] = useState(false);
  const [showDevolvidas, setShowDevolvidas] = useState(false);

  const toggleEnviadas = () => setShowEnviadas(!showEnviadas);
  const toggleRejeitadas = () => setShowRejeitadas(!showRejeitadas);
  const toggleDevolvidas = () => setShowDevolvidas(!showDevolvidas);

  const atividadesEnviadas = [
    { id: 1, nome: 'Atividade 1', quantidade: 10 },
    { id: 2, nome: 'Atividade 2', quantidade: 5 },
  ];

  const atividadesRejeitadas = [
    { id: 1, nome: 'Atividade 3', quantidade: 2 },
    { id: 2, nome: 'Atividade 4', quantidade: 1 },
  ];

  const atividadesDevolvidas = [
    { id: 1, nome: 'Atividade 5', quantidade: 3 },
    { id: 2, nome: 'Atividade 6', quantidade: 4 },
  ];

  return (
    <div className='content-button'>
      <h2>Mensal</h2>
      
      <div>
        <p className='enviadas' onClick={toggleEnviadas}>
          Atividades Enviadas
        </p>
        {showEnviadas && (
          <ul>
            {atividadesEnviadas.map(atividade => (
              <li key={atividade.id}>
                {atividade.nome}: {atividade.quantidade}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div>
        <p className='rejeitadas' onClick={toggleRejeitadas}>
          Atividades Rejeitadas
        </p>
        {showRejeitadas && (
          <ul>
            {atividadesRejeitadas.map(atividade => (
              <li key={atividade.id}>
                {atividade.nome}: {atividade.quantidade}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div>
        <p className='devolvidas' onClick={toggleDevolvidas}>
          Atividades Devolvidas
        </p>
        {showDevolvidas && (
          <ul>
            {atividadesDevolvidas.map(atividade => (
              <li key={atividade.id}>
                {atividade.nome}: {atividade.quantidade}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Comp1;