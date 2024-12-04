import "./Card.css";

function Card(props) {
  return (
    <div className="activity-card">
      <div className="activity-info">
        <h3>{props.atividade.tipo}</h3>
        <div className="activity-date" id="date">{`${props.atividade.data_atividade[2]}/${props.atividade.data_atividade[1]}/${props.atividade.data_atividade[0]}`} </div>
        <div className="activity-status" id="status">{props.status}</div>
        
      </div>

      <div className="activity-button">
      <button className="see-more-button"onClick={()=> {
        props.setSelectedAtividade(props.atividade)
        props.setIsModalOpen(!props.isModalOpen)
        }} >Ver Mais</button>
      </div>
    </div>
  );
}

export default Card;
