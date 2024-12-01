import "./Card.css";

function Card({ title, date, status }) {
  return (
    <div className="activity-card">
      <div className="activity-info">
        <h3>{title}</h3>
        <div className="activity-date" id="date">{date} </div>
        <div className="activity-status" id="status">{status}</div>
        
      </div>

      <div className="activity-button">
      <button className="see-more-button">Ver Mais</button>
      </div>
    </div>
  );
}

export default Card;
