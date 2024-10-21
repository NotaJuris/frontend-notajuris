import './Card.css';

function Card({title, date, status}){
  return(
    <div className="activity-card">
      <div className="activity-info">
        <h3>{title}</h3>
        <button className="see-more-button">Ver Mais</button>
      </div>
      
      <div className="activity-details">
        <div className="activity-date">{date}</div>
        <div className= "activity-status">{status}</div>
      </div>
    </div>
  )
}

export default Card