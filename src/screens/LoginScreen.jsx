import React from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
import './LoginScreen.css';
import logo_notajuris from '../assets/images/logo_notajuris_invert.svg'

const LoginScreen = () => {
  const [loginNumber, setLoginNumber] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "https://capable-dream-production.up.railway.app/v1/auth/login",
        {
          matricula: loginNumber.toString(),
          senha: password,
        }
      );

      //Aqui eu estou pegando o token que a API retorna
      const token = response.data.token;

      //Colocando o token no cabeçalho da requisição
      const headers = { Authorization: `Bearer ${token}` };

      //Aqui agora eu estou fazendo a requisição pra pegar as informações do usuário
      const userResponse = await axios.get(
        "https://capable-dream-production.up.railway.app/v1/usuarios/me",
        {
          headers: headers,
        }
      );

      //Aqui para exibir as informações do usuário
      const userInfo = userResponse.data;

      if (userInfo.cargo === "ORIENTADOR") {
        navigate("/TeacherScreen");
      } else if (userInfo.cargo === "ALUNO") {
        navigate("/StudentScreen");
      } else if (userInfo.cargo === "SUPERADMIN") {
        navigate("/TeacherScreen");
      } else if (userInfo.cargo === "ADMINISTRADOR") {
        navigate("/AdminScreen");
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
