import './LeftSection.css'
import Card from '../CardComponents/Card'; 

function LeftSection() {
  return (
    <main className= "container">
      <section className="left-section">
      <div className= "button-container">
      <span className= "activity-text">Enviar nova atividade</span>
      <button className="new-activity-button">+</button>
      </div>
      </section>

      <section className= "right-section">
        <div className="card-container">
          <h2 style={{ color: 'white' }}>Histórico de atividades</h2>
          <Card title="Atendimento jurídico" date="23/09/2024" status="Recebida" />
          <Card title="Audiência" date="12/04/2025" status="Pendente"/>
          <Card title="Reunião" date="30/07/2025" status="Concluída"/>
          <Card title="Audiência" date="20/10/2025" status="Pendente"/>
          <Card title="Audiência" date="24/12/2025" status="Recebida"/>
          <Card title="Audiência" date="20/10/2025" status="Pendente"/>
        </div>
      </section>
    </main>
  );
}

export default LeftSection;