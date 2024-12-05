import React from "react";
import Navbar from "../components/StudentComponents/NavbarComponent/Navbar";
import "./UserRegister.css";
import ApiScripts from "../scripts/ApiEndpoints";

function Form() {

  const handleSubmit = async (e) =>{
    e.preventDefault();

    const apiScripts = new ApiScripts();
    const token = localStorage.getItem("currentUserToken")

    const corpo = {
      "nome": e.target.nome.value,
      "matricula": e.target.matricula.value,
      "telefone": e.target.telefone.value,
      "periodo": Number(e.target.periodo.value),
      "cargo": e.target.cargo.value,
      "turno": e.target.turno.value,
      "email": e.target.email.value,
      "senha": e.target.senha.value
    }

    const usuarioCadastrado = await apiScripts.postUsuario(token,corpo);
    console.log(usuarioCadastrado);
    if(usuarioCadastrado){
      alert("Usuario cadastrado com sucesso!")
    }
  };

  return (
    <>
      <Navbar name="Felipe" />
      <main>
        <div className="body-user-register">
          <div className="Container">
            <div className="FormContent">
              <h2>Cadastrar Usuário</h2>
              <div className="ScrollableForm">
                <form onSubmit={handleSubmit}>
                  <div className="FormGroup">
                    <input
                      name = "nome"
                      type="text"
                      placeholder="Nome Completo"
                      maxLength={50}
                    />
                  </div>
                  <div className="FormGroup">
                    <input
                      name = "matricula"
                      type="text"
                      placeholder="Matrícula"
                      maxLength={8}
                    />
                  </div>
                  <div className="FormGroup">
                    <input name = "telefone" type="phone" placeholder="Telefone" />
                  </div>
                  <div className="FormGroup">
                    <input name = "periodo" type="text" placeholder="Período" />
                  </div>
                  <div className="FormGroup">
                    <input name = "turno" type="text" placeholder="Turno" />
                  </div>
                  <div className="FormGroup">
                    <input name = "email" type="email" placeholder="E-Mail" />
                  </div>
                  <div className="FormGroup">
                    <label>
                      Cargo
                      <select name="cargo">
                        <option value="ALUNO">ALUNO</option>
                        <option value="ORIENTADOR">ORIENTADOR</option>
                        <option value="ADMIN">ADMIN</option>
                      </select>
                    </label>
                  </div>
                  <div className="FormGroup">
                    <input name = "senha" type="text" placeholder="Senha" />
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
