import React from 'react';
import './CardsTeacherStudents.css';

const CardsTeacherStudents = ({fullName, birthDate, registrationNumber, email, shift, semester}) => {
    return (
        <div className="cards-teacher-students">
            <h2 className="card-teacher-fullName">{fullName}</h2>
            <p className="card-teacher-birthDate">Data de nascimento: {birthDate}</p>
            <p className="card-teacher-registrationNumber">Matrícula: {registrationNumber}</p>
            <p className="card-teacher-email">Email: {email}</p>
            <p className="card-teacher-shift">Turno: {shift}</p>
            <p className="card-teacher-semester">Semestre: {semester}</p>
            
        </div>
    );
        
}

export default CardsTeacherStudents;