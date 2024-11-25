import React from 'react';
import { FaSearch } from 'react-icons/fa';
import './AdminStudents.css';

const AdminStudents = () => {
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
                    <div className='student-card'>
                        <div className='student-info'>
                            <h3>Bruno Madrigal</h3>
                            <p>Matrícula: 123456</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default AdminStudents;