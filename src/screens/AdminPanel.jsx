import React from "react";
import Navbar from "../components/StudentComponents/NavbarComponent/Navbar";
import "./AdminPanel.css";
import AdminOption1 from '../assets/images/admin-option-1.jpeg';
import AdminOption2 from '../assets/images/admin-option-2.jpeg';
import AdminOption3 from '../assets/images/admin-option-3.jpeg';
import { useNavigate } from "react-router-dom";


function AdminPanel() {

  const navigate = useNavigate();

  return (
    <div>
      <Navbar name="Felipe" />
      <main className="admin-main">
        <section className="PanelContainer">
          <h1>Seja bem-vindo!</h1>
          <h2>Painel Administrativo</h2>

          <div className="PanelElements">
            <div className="ButtonContainer">
              <img src={AdminOption1} alt="" className="ButtonImage" />
              <button
                className="RedirectButton"
                onClick={
                  () => {
                    navigate("/UserRegister")
                  }
                }
              >
                Cadastrar Usuário
              </button>
            </div>

            <div className="ButtonContainer">
              <img src={AdminOption2} alt="" className="ButtonImage" />
              <button
                className="RedirectButton"
                onClick={
                  () => {
                    navigate("/AdminStudents")
                  }
                }
              >
                Ver Alunos
              </button>
            </div>

            <div className="ButtonContainer">
              <img src={AdminOption3} alt="" className="ButtonImage" />
              <button
                className="RedirectButton"
                onClick={
                  () => {
                    navigate("/AdminReport")
                  }
                }
              >
                Verificar Relatório
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default AdminPanel;
