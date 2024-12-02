import axios from 'axios';

class ApiScripts {

    constructor(){
      axios.defaults.baseURL = "https://capable-dream-production.up.railway.app";
      axios.defaults.withCredentials = true;
    }

    doLogin(matricula, senha){
      return axios.post(
        `/v1/auth/login`,
        {
          "matricula": matricula,
          "senha": senha
        },
      )
      .then((response) => response)
      .catch((error)=> error)
    }

    getMe(token){
      return axios.get(
        `/v1/usuarios/me`,
        {
          "headers": {
            Authorization: `Bearer ${token}`
          }
        }
      )
      .then( (response) => response)
      .catch( (error) => error);
    }

    getAtividadesByUserId(userId, token){
      return axios.get(`/v1/atividades/${userId}/usuario`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      .then(response => response.data)
      .catch(error => {throw error});
      
    };


  }

export default ApiScripts