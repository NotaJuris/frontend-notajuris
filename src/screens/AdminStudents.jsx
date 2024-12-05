import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import './AdminStudents.css';
import Navbar from '../components/StudentComponents/NavbarComponent/Navbar';
import ApiScripts from '../scripts/ApiEndpoints';

const AdminStudents = () => {
  /*const students = [
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
      {
        name: 'Sandy Junior',
        registration: '9876543',
        activities: [
            {id: 1, name: 'Atividade 1', description: 'Descrição da Atividade 1', attachment: 'Anexo 1' },
            {id: 2, name: 'Atividade 2', description: 'Descrição da Atividade 2', attachment: 'Anexo 2' },
            {id: 2, name: 'Atividade 2', description: 'Descrição da Atividade 2', attachment: 'Anexo 2' },
            {id: 2, name: 'Atividade 2', description: 'Descrição da Atividade 2', attachment: 'Anexo 2' },
        ]
      }
      
  ];*/

  const [originalUsuarios, setOriginalUsuarios] = useState([]);
  const [usuarios, setUsuarios] = useState([]);
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const [timer, setTimer] = useState(null);
  const [inputValue, setInputValue] = useState("");

  const inputChanged = e => {
    setInputValue(e.target.value)
    console.log(inputValue)

    clearTimeout(timer)

    const newTimer = setTimeout(() => {

      if(inputValue !== " "){
        const usuariosFiltrados = originalUsuarios.filter(
          (u) => {
            return u.nome.toLowerCase().includes(inputValue);
          }
        )

        setUsuarios(usuariosFiltrados);
      } else {
        setUsuarios(originalUsuarios);
      }
    }, 1000)

    setTimer(newTimer)
  }

  useState(() => {
    const apiScripts = new ApiScripts();
    const token = localStorage.getItem("currentUserToken");
    
    async function fetchData(){

      const users = await apiScripts.getAllUsers(token);
      console.log(users);
      if (users){
        setOriginalUsuarios(users);
        setUsuarios(users);
      }
    }
    fetchData();
    console.log(usuarios)

  },[]);

  return (
    <>
    <Navbar name={currentUser.nome}/>
      <div className="AdminStudents">
          <div className="adm-students-dashboard">
              <div className="students-header-container">
                  <h2>Área dos Alunos</h2>
                  <div className='search-bar-container'>
                      <input type="text" className='search-bar' placeholder="Buscar aluno" onChange={inputChanged}/>
                      <FaSearch className='search-icon' />
                  </div>
              </div>
              <hr className='divider'/>
              <div className="content">
                  <div className='students-list'>
                    {
                      usuarios.map((usuario, index)=>{
                        return <StudentCard index={index} student={usuario} />
                      })
                    }
                  </div>
              </div>
          </div>
      </div>
    </>
  );
};

const StudentCard = ({ student }) => {

  return (
    <div className='student-card'>
      <div className='student-info'>
        <h3>{student.nome}</h3>
        <p>Matrícula: {student.matricula}</p>
      </div>
    </div>
  );
};

export default AdminStudents;