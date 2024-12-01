import React from "react";
import Navbar from "../components/StudentComponents/NavbarComponent/Navbar";
import "./UserRegister.css";

function Form() {
  return (
    <>
      <Navbar name="Felipe" />
      <main>
        <div className="body-user-register">
          <div className="Container">
            <div className="FormContent">
              <h2>Cadastrar Usuário</h2>
              <div className="ScrollableForm">
                <form>
                  <div className="FormGroup">
                    <input
                      type="text"
                      placeholder="Nome Completo"
                      maxLength={50}
                    />
                  </div>
                  <div className="FormGroup">
                    <input
                      type="interger"
                      placeholder="Matrícula"
                      maxLength={8}
                    />
                  </div>
                  <div className="FormGroup">
                    <input type="phone" placeholder="Telefone" />
                  </div>
                  <div className="FormGroup">
                    <input type="text" placeholder="Período" />
                  </div>
                  <div className="FormGroup">
                    <input type="text" placeholder="Turno" />
                  </div>
                  <div className="FormGroup">
                    <input type="email" placeholder="E-Mail" />
                  </div>
                  <div className="FormGroup">
                    <input type="text" placeholder="Cargo" />
                  </div>
                  <div className="SendButton">
                    <input type="submit" value="Enviar" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Form;
