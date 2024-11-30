import React from 'react';
import { RiAccountCircleFill } from "react-icons/ri";
import CardsTeacherStudents from '../components/TeacherComponents/CardsTeacher/CardsTeacherStudents';
import NavbarTeacher from '../components/TeacherComponents/NavbarTeacher/NavbarTeacher';
import './TeacherStudentsScreen.modules.css';

const TeacherStudentsScreen = () => {
  const students = [
    {
      "fullName": "Ana Carolina Moreira Costa",
      "birthDate": "22/11/2002",
      "registrationNumber": "87654321",
      "email": "ana.moreira@email.com",
      "shift": "Matutino",
      "semester": "4º"
    },
    {
      "fullName": "Felipe Oliveira Nogueira",
      "birthDate": "09/07/1999",
      "registrationNumber": "23456789",
      "email": "felipe.nogueira@email.com",
      "shift": "Vespertino",
      "semester": "7º"
    },
    {
      "fullName": "Mariana Lopes Ferreira",
      "birthDate": "30/05/2001",
      "registrationNumber": "34567890",
      "email": "mariana.ferreira@email.com",
      "shift": "Noturno",
      "semester": "6º"
    },
    {
      "fullName": "Rafael Cardoso Almeida",
      "birthDate": "18/09/2000",
      "registrationNumber": "45678901",
      "email": "rafael.almeida@email.com",
      "shift": "Matutino",
      "semester": "8º"
    }
  ];
  
  return (
    <div className="teacher-screen">
      <NavbarTeacher />
      <div className="h2-teacher-students">
        <h2>Alunos cadastrados</h2>
      </div>
      <div className="cards-teacher-container">
        {students.map((student, index) => (
          <CardsTeacherStudents
            key={index}
            fullName={student.fullName}
            birthDate={student.birthDate}
            registrationNumber={student.registrationNumber}
            email={student.email}
            shift={student.shift}
            semester={student.semester}
            />
        ))}

      </div>
    </div>
  );
}

export default TeacherStudentsScreen;
