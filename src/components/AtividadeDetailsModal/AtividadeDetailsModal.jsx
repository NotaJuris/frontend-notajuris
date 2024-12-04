import style from "./AtividadeDetailsModal.module.css"

export default function AtividadeDetailsModal(props){

    if (props.isOpen){
        return <div className={style.background}>
        <div className={style.modalContainer}>
            <h1>{props.atividade.tipo}</h1>
            <h1>TESTE MODAL</h1>
            <h1>TESTE MODAL</h1>
            <button onClick={() => {
                props.setIsModalOpen(!props.isOpen)
                }}>fechar</button>
        </div>
    </div>
    } else {
        return <></>
    }
}