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

  var listaAtividades;

  /*const [formData, setFormData] = useState({
    title: '',
    date: '',
    status: ''
  });*/

  /*useEffect(()=>{
    const fetchData = async () => {
      const apiScripts = new ApiScripts();
      try{
        listaAtividades = await apiScripts.getAtividadesByUserId(
          '2',
          'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhcGktbm90YWp1cmlzIiwic3ViIjoiMiIsImlhdCI6MTczMjc5MzI1MywiZXhwIjoxNzMyODAwNDUzfQ.7a8KjrMUO7uE2jLFH81pF2tFL90auZL9KBsduC_diRqaSxJs5M2nLmxBwlL-POVHO_dXS1KOpGKS2KuOTb3pdA'
        );
      } catch (error){
        console.error(error)
      }
    }
    fetchData()
    console.log(listaAtividades)
  }, [])*/

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
          <Card title={"teste"} date={"teste"} status={"test"} />
        </div>
      </section>
    </main>
  );
}

export default Sections;