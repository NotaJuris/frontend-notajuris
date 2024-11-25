import React, { useState } from 'react';
import { FaEye, FaEyeSlash, FaSearch } from 'react-icons/fa';
import './AdminStudents.css';

const AdminStudents = () => {
  const students = [
    {
      name: 'Bruno Madrigal',
      registration: '123456',
      activities: [
        { id: 1, name: 'Audiência Simulada', description: 'Descrição da Atividade 1', attachment: 'Anexo 1' },
        { id: 2, name: 'Atividade 2', description: 'Descrição da Atividade 2', attachment: 'Anexo 2' },
      ],
    },
    {
        name: 'Kelly Key',
        registration: '123456',
        activities: [
          { id: 1, name: 'Atividade 1', description: 'Descrição da Atividade 1', attachment: 'Anexo 1' },
          { id: 2, name: 'Atividade 2', description: 'Descrição da Atividade 2', attachment: 'Anexo 2' },
          { id: 2, name: 'Atividade 2', description: 'Descrição da Atividade 2', attachment: 'Anexo 2' }
        ],
      },
      
  ];

  return (
    <div className="AdminStudents">
        <div className="adm-students-dashboard">
            <div className="students-header-container">
                <h2>Área dos Alunos</h2>
                <div className='search-bar-container'>
                    <input type="text" className='search-bar' placeholder="Buscar aluno ou atividade" />
                    <FaSearch className='search-icon' />
                </div>
            </div>
            <hr className='divider'/>
            <div className="content">
                <div className='students-list'>
                    {students.map(student => (
                        <StudentCard key={student.registration} student={student} />
                    ))}
                </div>
            </div>
        </div>
    </div>
  );
};

const StudentCard = ({ student }) => {
  const [showContent, setShowContent] = useState(false);

  const toggleContent = () => {
    setShowContent(!showContent);
  };

  return (
    <div className='student-card'>
      <div className='student-info'>
        <h3>{student.name}</h3>
        <p>Matrícula: {student.registration}</p>
      </div>
      <div className='toggle-icon' onClick={toggleContent}>
        {showContent ? <FaEyeSlash /> : <FaEye />}
      </div>
      {showContent && (
        <div className='student-details'>
          <h3 id='activity-title'>Atividades</h3>
          <ul>
            {student.activities.map(activity => (
              <li key={activity.id}>
                <div className='activity-item'>
                  <span id='activity-name'> {activity.name}</span>
                  <span id='activity-description'> {activity.description}</span>
                  <span id='activity-attachment'> {activity.attachment}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default AdminStudents;