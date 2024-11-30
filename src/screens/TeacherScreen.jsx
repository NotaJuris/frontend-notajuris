import React from 'react';
import CardsTeacherHome from '../components/TeacherComponents/CardsTeacher/CardsTeacherHome';
import NavbarTeacher from '../components/TeacherComponents/NavbarTeacher/NavbarTeacher';
import './TeacherScreen.modules.css';

const TeacherScreen = () => {
  return (
    <div className="teacher-screen">
      <NavbarTeacher />
      
      <div className="h2-home">
        <h2>Atividades recebidas</h2>
      </div>
      <div className="cards-teacher-container">
        <CardsTeacherHome
          title='Atendimento Jurídico'
          fullName='Lucas Calipson'
          registrationNumber='03341166'
          date='26/09/2024'
        />
        <CardsTeacherHome
          title='Audiência'
          fullName='Felipe de Souza'
          registrationNumber='03667834'
          date='26/09/2024'
        />
        <CardsTeacherHome
          title='Mediação'
          fullName='Natiane Santos'
          registrationNumber='78563345'
          date='26/09/2024'
        />
        <CardsTeacherHome
          title='Atendimento Jurídico'
          fullName='Camila Farias'
          registrationNumber='03446784'
          date='26/09/2024'
        />
        <CardsTeacherHome
          title='Audiência'
          fullName='Joseferson Querino'
          registrationNumber='07856422'
          date='26/09/2024'
        />

      </div>
    </div>
  );
}

export default TeacherScreen;
