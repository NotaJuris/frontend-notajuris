import "./Sections.css";
import Card from "../CardComponents/Card";
import axios from 'axios';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ApiScripts from "../../../scripts/ApiEndpoints";
/* import plus from '../../../assets/images/plus.svg'; */

axios.defaults.baseURL = "https://capable-dream-production.up.railway.app";
axios.defaults.withCredentials = true;

function Sections() {

  const [listaAtividades, setListaAtividades] = useState([]);

  useEffect(() => {

    const apiScripts = new ApiScripts();

    async function fetchAtividades(){

      const currentUser = JSON.parse(localStorage.getItem("currentUser"))
      const token = localStorage.getItem("currentUserToken")

      const atividades = await apiScripts.getAtividadesByUserId(currentUser.id, token)
      console.log(atividades)

      if(atividades){
        setListaAtividades(atividades)
      }

    }

    fetchAtividades();

  },[])

  const handleButtonClick = () => {
    /*const token = localStorage.getItem('token'); // Obtém o token do localStorage
    const userId = '2'; // Substitua pelo ID do usuário real

    axios.get(`/v1/atividades/${userId}/usuario`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(response => {
      console.log(response.data); // Adiciona um console.log para ver o JSON completo da atividade
      const data = response.data[0]; // Pegando a primeira atividade como exemplo
      setFormData({
        title: data.tipo,
        date: data.data_atividade.join('-'), 
        status: data.status 
      });
    })
    .catch(error => console.error(error));*/
  };

  return (
    <main className="sections container">
      <section className="left-section">
        <div className="button-container">
          <span className="activity-text">Enviar nova atividade</span>
          <button className="new-activity-button" onClick={handleButtonClick}>
            + 
          </button>
        </div>
      </section>

      <section className="right-section">
        <div className="card-container">
          <h2 style={{ color: "white" }}>Histórico de atividades</h2>
          {
            listaAtividades.map((atividade, index) => (
              <Card 
                index={index}
                title={atividade.tipo} 
                date={`${atividade.data_atividade[2]}/${atividade.data_atividade[1]}/${atividade.data_atividade[0]}`} 
                status={atividade.status} 
                
              />
            ))
          }
        </div>
      </section>
    </main>
  );
}

export default Sections;