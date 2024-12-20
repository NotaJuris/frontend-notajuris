import React from 'react';
import { HiClipboardDocumentList, HiUserGroup, HiArrowLeftOnRectangle } from "react-icons/hi2";
import logoNeoJurix from '../../../assets/images/logoNeoJurix.png';
import { Link } from 'react-router-dom';
import './NavbarTeacher.css';

const NavbarTeacher = () => {
    return (
        <nav className="navbar_teacher">
            <div className="navbar_teacher-left">
                <img src={logoNeoJurix} alt="Logo NeoJurix" />
                <h2>NeoJurix</h2>
            </div>

            <div className="navbar_teacher-right">
                <h4 className="welcome-message">Bem-Vindo Professor!</h4>
                <Link to='/TeacherScreen' className='atividades-link'>
                    <HiClipboardDocumentList className="icon" /> Atividades
                </Link>
                <Link to='/TeacherStudentsScreen' className='alunos-link'>
                    <HiUserGroup className="icon" /> Alunos
                </Link>
                <a href="#" className='logout-link'>
                    <HiArrowLeftOnRectangle className="icon" /> Logout
                </a>
            </div>
        </nav>
    );
}

export default NavbarTeacher;
