import React from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from 'react-router-dom'; 
import './LoginScreen.css';
import logo_notajuris from '../assets/images/logo_notajuris_invert.svg'
import ApiScripts from "../scripts/ApiEndpoints";

const LoginScreen = () => {
  const [loginNumber, setLoginNumber] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      //objeto que contem os métodos de api
      const apiScripts = new ApiScripts();

      const response = await apiScripts.doLogin(loginNumber, password)
      console.log(response);

      //Aqui eu estou pegando o token que a API retorna
      const token = response.data.token;

      //Aqui agora eu estou fazendo a requisição pra pegar as informações do usuário
      const userResponse = await apiScripts.getMe(token)

      //armazena token no localStorage.
      localStorage.setItem("currentUserToken", token);

      const userInfo = userResponse.data

      //armazena informações do usuário no LocalStorage
      localStorage.setItem("currentUser", JSON.stringify(userInfo))

      //redirecionamento de tela
      if (userInfo.cargo === "ORIENTADOR") {
        navigate("/TeacherScreen");
      } else if (userInfo.cargo === "ALUNO") {
        navigate("/StudentScreen");
      } else if (userInfo.cargo === "SUPERADMIN") {
        navigate("/AdminPanel");
      } else if (userInfo.cargo === "ADMINISTRADOR") {
        navigate("/AdminPanel");
      }

    } catch (error) {
      console.error("Erro: ", error);
      setErrorMessage("Erro ao se conectar com a API.");
    }
  };

  return (
    <main>
      <div className="login-background">
            <div className="login-container">
            <form onSubmit={handleSubmit}>
              <img src={logo_notajuris} alt="Logo NotaJuris" className="NavbarLogo" />
              <h1>Seja bem-vindo!</h1>
              <span className='welcome-subtitle'>Acesso ao sistema</span>
              <div className="login-input-field">
                <input 
                  type="text" 
                  placeholder="Matrícula"
                  required
                  onChange={(e) => setLoginNumber(e.target.value)}
                />
                <FaUser className="login-icon" />
              </div>
              <div className="login-input-field">
                <input 
                  type="password" 
                  placeholder="Senha"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
                <FaLock className="login-icon" />
              </div>

              <div className="login-password-forget">
                <a href="#">Esqueci minha senha</a>
              </div>

                  {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

                  <button>Entrar</button>
                </form>
              </div>
      </div>
    </main>
  );
};

export default LoginScreen;
