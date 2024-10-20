import React from 'react';
import './CardsTeacherHome.css';

const CardsTeacherHome = ({title, description, date}) => {
    return (
        <div className="cards-teacher-home">
            <h2 className="card-teacher-title">{title}</h2>
            <p className="card-teacher-description">{description}</p>
            <p className="card-teacher-date">Enviado dia {date}</p>
            <button className="card-teacher-button">Ver mais</button>
        </div>
    );
        
}

export default CardsTeacherHome;