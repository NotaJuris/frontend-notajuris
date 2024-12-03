import Navbar from '../components/StudentComponents/NavbarComponent/Navbar';
import Section from '../components/StudentComponents/Sections/Sections';
import React  from 'react';

function StudentScreen() {

  const usuarioLogado = JSON.parse(localStorage.getItem("currentUser"));

  return (
    <>
      <Navbar name={usuarioLogado.nome}/> 
      <Section/>
    </>      
  );
}

export default StudentScreen;
