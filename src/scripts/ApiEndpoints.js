import axios from 'axios';

class ApiScripts {

    constructor(){
      axios.defaults.baseURL = "https://capable-dream-production.up.railway.app";
      axios.defaults.withCredentials = true;
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