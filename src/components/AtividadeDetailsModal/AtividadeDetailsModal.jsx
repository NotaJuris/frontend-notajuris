import style from "./AtividadeDetailsModal.module.css"

export default function AtividadeDetailsModal(props){

    if (props.isOpen){
        return <div className={style.background}>
        <div className={style.modalContainer}>
            <h1>{props.atividade.tipo}</h1>
            <div className={style.contentDivider}></div>
            <span className={style.detailTitle}>aluno:</span><span>{props.atividade.aluno}</span>
            <br/>
            <span className={style.detailTitle}>Descrição:</span><span>{props.atividade.descricao}</span>
            <br/>
            <span className={style.detailTitle}>Carga Horária:</span><span>{props.atividade.carga_horaria}</span>
            <br/>
            <span className={style.detailTitle}>Data:</span><span>{`${props.atividade.data_atividade[2]}/${props.atividade.data_atividade[1]}/${props.atividade.data_atividade[0]}`}</span>
            <br/>
            <span className={style.detailTitle}>Hora:</span><span>{props.atividade.hora_atividade ? `${props.atividade.hora_atividade[0]}:${props.atividade.hora_atividade[1]}` : ""}</span>
            <br/>
            <span className={style.detailTitle}>Semestre:</span><span>{props.atividade.semestre}</span>
            <br/>
            <span className={style.detailTitle}>Status:</span><span>{props.atividade.status}</span>
            <br/>
            <span className={style.detailTitle}>Detalhes:</span>
            <br/>
            { props.atividade.detalhes &&
                <>
                    <span className={style.detailTitle}>Detalhes:</span>
                    <br/>
                </>
            }
            <button className={style.closeModalBtn} onClick={() => {
                props.setIsModalOpen(!props.isOpen)
                }}>Fechar</button>
        </div>
    </div>
    } else {
        return <></>
    }
}