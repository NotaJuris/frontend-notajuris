import React, {useEffect, useState} from "react";
import CardsTeacherHome from "../components/TeacherComponents/CardsTeacher/CardsTeacherHome";
import Navbar from "../components/StudentComponents/NavbarComponent/Navbar";
import "./TeacherScreen.css";
import ApiScripts from "../scripts/ApiEndpoints"

const TeacherScreen = () => {

  const [listaAtividades, setListaAtividades] = useState([]);
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const [inputValue, setInputValue] = useState('');
  const [timer, setTimer] = useState(null);
  const [listaOriginal, setListaOriginal] = useState([]);

  const inputChanged = e => {
    setInputValue(e.target.value)
    console.log(inputValue)

    clearTimeout(timer)

    const newTimer = setTimeout(() => {

      if(inputValue !== " "){
        console.log(inputValue)
        const listaFiltrada = listaOriginal.filter(
          (atividade) => {
            return (atividade.tipo.toLowerCase().includes(inputValue)) || (atividade.aluno.toLowerCase().includes(inputValue))
          }
        )
        setListaAtividades(listaFiltrada);
      } else {
        console.log("listaOriginal: "+listaOriginal)
        setListaAtividades(listaOriginal);
        console.log("listaAtividades: "+listaAtividades)
      }
    }, 1000)

    setTimer(newTimer)
  }

  useEffect(() => {

    async function fetchData(){

      const apiScripts = new ApiScripts();

      
      const token = localStorage.getItem("currentUserToken")

      const atividades = await apiScripts.getAllAtividades(token)
      console.log(atividades)

      if(atividades){
        setListaAtividades(atividades);
        setListaOriginal([...atividades]);
      }
    }

    fetchData();
    console.log(listaAtividades)

  },[])

  return (
    <>
      <Navbar name={currentUser.nome}/>
      {/*<NavbarTeacher/>*/}
      <div className="teacher-screen">
        <div className="teacher-dashboard">
          <div className="content-teacher-dashboard">
            <div className="h2-home">
              <h2>Atividades recebidas</h2>
              <div className="search-bar-container">
                <i className="fas fa-search search-icon"></i>
                <input
                  type="text"
                  className="search-bar"
                  placeholder="Pesquisar Atividade ou Aluno"
                  onChange={inputChanged}
                  value={inputValue}
                />
              </div>
            </div>

            <hr className="divider" />
            <div className="cards-teacher-container">
              <div className="cards-scrollable">
                {
                  listaAtividades.map((atividade, index, key) => {

                    if(atividade.status==="PENDENTE"){
                      return <CardsTeacherHome index={index} atividade={atividade}/>
                    }
                    return <></>
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeacherScreen;
