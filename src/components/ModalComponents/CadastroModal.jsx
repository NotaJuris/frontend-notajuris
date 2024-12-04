import "./CadastroModal.css"
import React, {useState} from "react";
import ApiScripts from "../../scripts/ApiEndpoints";

function CadastroModal(props) {

  const [tipo, setTipo] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("currentUserToken");

    const corpo = {
      "tipo": e.target.tipo.value,
      "descricao": e.target.descricao.value,
      "data_atividade": e.target.data_atividade.value,
      "hora_atividade": e.target.hora_atividade.value,
      "carga_horaria": e.target.carga_horaria.value,
      "semestre":e.target.semestre.value,
      "detalhes": tipo === "ATENDIMENTO" ? {
        "tipo": "ATENDIMENTO",
        "nome_atendido": e.target.nome_atendido.value,
        "estado_civil": e.target.estado_civil.value,
        "profissao": e.target.profissao.value,
        "data_nascimento": e.target.data_nascimento.value,
        "naturalidade": e.target.naturalidade.value,
        "cpf": e.target.cpf.value,
        "rg": e.target.rg.value,
        "endereco": {
          "rua": e.target.rua.value,
          "numero": e.target.numero.value,
          "bairro": e.target.bairro.value,
          "cidade": e.target.cidade.value,
          "estado": e.target.estado.value,
          "complemento": e.target.complemento.value
        },
        "celular": e.target.celular.value,
        "filiacao": e.target.filiacao.value.split(", "),
        "observacoes": e.target.observacoes.value
      } : {
        "tipo": "DetalhesAtividade"
      }

    }
    console.log(corpo)

    const apiScripts = new ApiScripts();

    const response = await apiScripts.postAtividade(token, corpo)

    console.log(response)
  }

  if(!props.isCadastroModalOpen){
    return <></>
  }
  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-button" onClick={() => props.setIsCadastroModalOpen(!props.isCadastroModalOpen)}>
          X
        </button>
        <h2 style={{color: "#000"}}>Enviar Nova Atividade</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Tipo:
            <select name="tipo" value={tipo} onChange={(e)=> setTipo(e.target.value)}>
              <option value="AUDIENCIA">AUDIENCIA</option>
              <option value="PLANTAO">PLANTAO</option>
              <option value="ATENDIMENTO">ATENDIMENTO</option>
              <option value="MEDIACAO">MEDIACAO</option>
              <option value="OUTRO">OUTRO</option>
            </select>
          </label>
          <label>
            Descrição:
            <input type="text" name="descricao" placeholder="Descrição" required />
          </label>
          <label>
            Data:
            <input type="date" name="data_atividade" required />
          </label>
          <label>
            Hora:
            <input type="time" name="hora_atividade" />
          </label>
          <label>
            Carga Horária:
            <input type="text" name="carga_horaria" required />
          </label>
          <label>
            Semestre:
            <input type="text" name="semestre" required />
          </label>
          { tipo === "ATENDIMENTO" &&
            (<>
              <h2>Detalhes da do atendimento</h2>
              <label>
                Nome do Atendido:
                <input type="text" name="nome_atendido" required />
              </label>
              <label>
                Estado Civil:
                <select name="estado_civil">
                  <option value="SOLTEIRO">SOLTEIRO</option>
                  <option value="CASADO">CASADO</option>
                  <option value="SEPARADO">SEPARADO</option>
                  <option value="DIVORCIADO">DIVORCIADO</option>
                  <option value="VIUVO">VIUVO</option>
                </select>
              </label>
              <label>
                Profissão:
                <input type="text" name="profissao" required />
              </label>
              <label>
                Data de Nascimento:
                <input type="date" name="data_nascimento" required />
              </label>
              <label>
                Naturalidade:
                <input type="text" name="naturalidade" required />
              </label>
              <label>
                CPF:
                <input type="text" name="cpf" required />
              </label>
              <label>
                RG:
                <input type="text" name="rg" required />
              </label>
              <label>
                Celular:
                <input type="phone" name="celular" required />
              </label>
              <label>
                Filiação:
                <input type="text" name="filiacao" />
              </label>
              <label>
                Observações:
                <input type="text" name="observacoes"/>
              </label>
              <h3>Endereço</h3>
              <label>
                Rua:
                <input type="text" name="rua" required />
              </label>
              <label>
                Número:
                <input type="text" name="numero" required />
              </label>
              <label>
                Bairro:
                <input type="text" name="bairro" required />
              </label>
              <label>
                Cidade:
                <input type="text" name="cidade" required />
              </label>
              <label>
                Estado:
                <input type="text" name="estado" required />
              </label>
              <label>
                Complemento:
                <input type="text" name="complemento"/>
              </label>
            </>)
          }
          
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
}

export default CadastroModal;