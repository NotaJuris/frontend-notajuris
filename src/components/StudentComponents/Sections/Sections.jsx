import "./Sections.css";
import Card from "../CardComponents/Card";
import axios from 'axios';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
/* import plus from '../../../assets/images/plus.svg'; */


async function getActivities() {
  try {
    
    const headers = { Authorization: `Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhcGktbm90YWp1cmlzIiwic3ViIjoiMiIsImlhdCI6MTczMjY2NzA2MywiZXhwIjoxNzMyNjc0MjYzfQ.9Sqw8ZpUpcA00VYx-nFP43mIeTNAEu_8tDcQPWjylZCs6mkIO5zR8Xn92MOVIqEeXsOJ9HlJ-sXgRCVtKczRBA` };
    
    const userActivities = await axios.get(
      "http://capable-dream-production.up.railway.app/v1/atividades/2/usuario",
      {
        headers: headers,
      }
    );
  
  console.log(userActivities.data);

  } catch (error) {
    console.error("Erro: ", error);
  }
}

function Sections() {
  
  getActivities();

  return (
    <main className="sections container">
      <section className="left-section">
        <div className="button-container">
          <span className="activity-text">Enviar nova atividade</span>
          <button className="new-activity-button">
            {" "}
            {/*<img src={plus} alt="Plus" className="plus-icon"/> */} +{" "}
          </button>
        </div>
      </section>

      <section className="right-section">
        <div className="card-container">
          <h2 style={{ color: "white" }}>Histórico de atividades</h2>

          <Card
            title="Atendimento jurídico"
            date="23/09/2024"
            status="Recebida"
          />
        </div>
      </section>
    </main>
  );
}

export default Sections;
