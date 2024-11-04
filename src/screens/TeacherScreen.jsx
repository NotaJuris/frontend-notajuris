import React from "react";
import CardsTeacherHome from "../components/TeacherComponents/CardsTeacher/CardsTeacherHome";
import NavbarTeacher from "../components/TeacherComponents/NavbarTeacher/NavbarTeacher";
import "./TeacherScreen.css";

const TeacherScreen = () => {
  return (
    <div className="teacher-screen">
      <NavbarTeacher />
      <div className="teacher-dashboard">
        <div className="content-teacher-dashboard">
          <div className="h2-home">
            <h2>Atividades recebidas</h2>
            <div className="search-bar-container">
              <i className="fas fa-search search-icon"></i>
              <input
                type="text"
                className="search-bar"
                placeholder="Pesquisar Atividade ou Aluno"
              />
            </div>
          </div>

          <hr className="divider" />
          <div className="cards-teacher-container">
            <div className="cards-scrollable">
              <CardsTeacherHome
                title="Atendimento Jurídico"
                fullName="Lucas Calixto"
                registrationNumber="03341166"
                date="26/09/2024"
              />
              <CardsTeacherHome
                title="Audiência"
                fullName="Felipe de Souza"
                registrationNumber="03667834"
                date="26/09/2024"
              />
              <CardsTeacherHome
                title="Mediação"
                fullName="Natih Santos"
                registrationNumber="78563345"
                date="26/09/2024"
              />
              <CardsTeacherHome
                title="Atendimento Jurídico"
                fullName="Camille Farias"
                registrationNumber="03446784"
                date="26/09/2024"
              />
              <CardsTeacherHome
                title="Audiência"
                fullName="Jefferson Querino"
                registrationNumber="07856422"
                date="26/09/2024"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherScreen;
