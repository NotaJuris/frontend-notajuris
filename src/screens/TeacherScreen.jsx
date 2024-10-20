import React from 'react';
import CardsTeacherHome from '../components/TeacherComponents/CardsTeacher/CardsTeacherHome';
import NavbarTeacher from '../components/TeacherComponents/NavbarTeacher/NavbarTeacher';
import './TeacherScreen.css';

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
          description='Lucas Calipson - 03341104'
          date='26/09/2024'
        />
        <CardsTeacherHome
          title='Audiência'
          description='Felipe de Souza - 03342106'
          date='26/09/2024'
        />
        <CardsTeacherHome
          title='Mediação'
          description='Natiane Santos - 04342107'
          date='26/09/2024'
        />
        <CardsTeacherHome
          title='Atendimento Jurídico'
          description='Camila Farias - 03341104'
          date='26/09/2024'
        />
        <CardsTeacherHome
          title='Audiência'
          description='Joseferson Querino - 03357133'
          date='26/09/2024'
        />

      </div>
    </div>
  );
}

export default TeacherScreen;
