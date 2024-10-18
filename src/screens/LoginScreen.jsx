import React from 'react';
import { FaUser, FaLock } from "react-icons/fa";
import { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
import './LoginScreen.css';


const LoginScreen = () => {
  const [loginNumber, setLoginNumber] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  
  const navigate = useNavigate(); 

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('https://backend-notajuris-production.up.railway.app/v1/auth/login', {
        matricula: loginNumber.toString(),
        senha: password
      });
    
      const headers = { 'Authorization': `Bearer ${response.data.token}` };
      axios.post('https://backend-notajuris-production.up.railway.app/v1/usuarios/me', { headers })
    .then(response => console.log(response.data));

      console.log(response.data.token)

      if (response.status === 200) {
        console.log('Login realizado:', response.data);
        navigate('/homep'); 
      } else {
        setErrorMessage(response.data.message || 'Erro ao efetuar o login.');
      }
    } catch (error) {
      console.error('Erro: ', error);
      setErrorMessage('Erro ao se conectar com a API.');
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <h1>Acesse o Sistema</h1>
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
          <a href="#">Esqueceu a senha?</a>
        </div>

        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

        <button>Entrar</button>
      </form>
    </div>
  );
};

export default LoginScreen;
