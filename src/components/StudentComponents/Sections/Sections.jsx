import "./Sections.css";
import Card from "../CardComponents/Card";
import axios from 'axios';
import { useState, useEffect } from "react";
import ApiScripts from "../../../scripts/ApiEndpoints";
import AtividadeDetailsModal from "../../AtividadeDetailsModal/AtividadeDetailsModal";
import CadastroModal from "../../ModalComponents/CadastroModal";
/* import plus from '../../../assets/images/plus.svg'; */

axios.defaults.baseURL = "https://capable-dream-production.up.railway.app";
axios.defaults.withCredentials = true;

function Sections() {

  const [listaAtividades, setListaAtividades] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAtividade, setSelectedAtividade] = useState({});
  const [isCadastroModalOpen, setIsCadastroModalOpen] = useState(false);

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
    setIsCadastroModalOpen(!isCadastroModalOpen);
  };

  return (
    <main className="container">
      <section className="left-section">
        <div className="button-container">
          <span className="activity-text">Enviar nova atividade</span>
          <button className="new-activity-button" onClick={() => handleButtonClick()}>
            + 
          </button>
        </div>
      </section>

      <section className="right-section">
        <h2 style={{ color: "white" }}>Histórico de atividades</h2>
        <div className="card-container">
          {
            listaAtividades.map((atividade, index) => (
              <Card 
                index={index}
                atividade={atividade}
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
                setSelectedAtividade={setSelectedAtividade}
                
              />
            ))
          }
        </div>
      </section>
      <AtividadeDetailsModal isOpen={isModalOpen} setIsModalOpen={setIsModalOpen} atividade={selectedAtividade}/>
      <CadastroModal setIsCadastroModalOpen={setIsCadastroModalOpen} isCadastroModalOpen={isCadastroModalOpen}/>
    </main>
  );
}

export default Sections;