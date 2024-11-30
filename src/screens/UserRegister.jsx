import React from "react";
import Navbar from "../components/StudentComponents/NavbarComponent/Navbar";
import "./UserRegister.css";

function Form() {
  return (
    <div>
      <Navbar name="Felipe" />
      <main>
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
                  <input type="email" placeholder="E-Mail" />
                </div>
                <div className="FormGroup">
                  <input type="email" placeholder="E-Mail" />
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
    </main>

    </div>
  );
}

export default Form;
