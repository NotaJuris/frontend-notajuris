import React from 'react';
import { HiMenu } from 'react-icons/hi';
import { HiClipboardDocumentList, HiUserGroup, HiArrowLeftStartOnRectangle  } from "react-icons/hi2";
import logo_notajuris from '../../../assets/images/logo_notajuris.svg';
import './NavbarTeacher.css';

const NavbarTeacher = () => {
    return (
        <nav className="navbar_teacher">
            <div className="navbar_teacher-left">
            <img src={logo_notajuris} alt="NotaJuris Logo" className="navbar-logo" />
                <h1>NotaJuris</h1>
            </div>

            <div className="navbar_teacher-right">
                <h4 className="welcome-message">Bem-Vindo Professor!</h4>
                <Link to="#" className='atividades-link'>
                    <HiClipboardDocumentList className="icon" /> Atividades
                </Link>
                <Link to="#" className='alunos-link'>
                    <HiUserGroup className="icon" /> Alunos
                </Link>
                <a href="#" className='logout-link'>
                    <HiArrowLeftStartOnRectangle className="icon" /> Logout
                </a>
            </div>
        </nav>
    );
}

export default NavbarTeacher;