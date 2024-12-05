import './Content.css';
import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

function Comp1(props) {
  const [showEnviadas, setShowEnviadas] = useState(false);
  const [showRejeitadas, setShowRejeitadas] = useState(false);
  const [showDevolvidas, setShowDevolvidas] = useState(false);

  const toggleEnviadas = () => setShowEnviadas(!showEnviadas);
  const toggleRejeitadas = () => setShowRejeitadas(!showRejeitadas);
  const toggleDevolvidas = () => setShowDevolvidas(!showDevolvidas);

  const getFilteredAtividades = (filterType) => {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth(); // 0-indexado (0 = Janeiro)
    const currentYear = currentDate.getFullYear();

    switch (filterType) {
      case 0: // Mensal
        return props.atividades.filter(
          (atividade) =>
            atividade.data_atividade[0] === currentYear &&
            atividade.data_atividade[1] === currentMonth
        );
      case 1: // Semestral
        const currentSemester = Math.floor(currentMonth / 6); // 0 = Jan-Jun, 1 = Jul-Dez
        return props.atividades.filter(
          (atividade) =>
            atividade.data_atividade[0] === currentYear &&
            Math.floor(atividade.data_atividade[1] / 6) === currentSemester
        );
      case 2: // Total (todos os anos)
        return props.atividades;
      default:
        return [];
    }
  };

  const atividadesFiltradas = getFilteredAtividades(props.indexButton)

  const atividadesEnviadas = atividadesFiltradas.filter(
    (atividade) => atividade.status === 'ACEITO'
  );
  const atividadesRejeitadas = atividadesFiltradas.filter(
    (atividade) => atividade.status === 'REJEITADO'
  );
  const atividadesDevolvidas = atividadesFiltradas.filter(
    (atividade) => atividade.status === 'REENVIO'
  );

  return (
    <div className='content-button'>
      <h2>Mensal</h2>
      
      <div>
        <p className='enviadas' onClick={toggleEnviadas}>
          <div className='title-activity'>
          Atividades Enviadas
          </div>
          {showEnviadas ? <FaEyeSlash /> : <FaEye />}
        </p>
        {showEnviadas && (
          <ul>
            {atividadesEnviadas.map((atividade, index) => (
              <li index={index}>
                <div className='atividade-item'>
                  <span>{atividade.tipo}</span>
                  {/*<span>{atividade.quantidade}</span>*/}
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
            {atividadesRejeitadas.map((atividade, index) => (
              <li index={index}>
                <div className='atividade-item'>
                  <span>{atividade.tipo}</span>
                  {/*<span>{atividade.quantidade}</span>*/}
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
            {atividadesDevolvidas.map((atividade, index) => (
              <li index={index}>
                <div className='atividade-item'>
                  <span>{atividade.tipo}</span>
                  {/*<span>{atividade.quantidade}</span>*/}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Comp1;