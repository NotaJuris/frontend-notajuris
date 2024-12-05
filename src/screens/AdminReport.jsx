import React, { useState, useEffect } from 'react';
import './AdminReport.css';
import ButtonLogic from "../components/AdminComponents/ButtonLogic/ButtonLogic";
import ReportContent from "../components/AdminComponents/ButtonLogic/ReportContent";
import Navbar from '../components/StudentComponents/NavbarComponent/Navbar';
import ApiScripts from '../scripts/ApiEndpoints'

const AdminReport = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const buttons = ["Mensal", "Semestral", "Total"];
    const [listaAtividades, setListaAtividades] = useState([]);

    useEffect(()=>{
        console.log("entrou useEffect()")

        const apiScripts = new ApiScripts();

        async function fetchData(){
            const token = localStorage.getItem("currentUserToken");

            const atividades = await apiScripts.getAllAtividades(token);
            console.log("atividades queriada: "+atividades)
            setListaAtividades(atividades);
            
        }

        fetchData();

    },[]);

    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    return (
        <>
            <Navbar name={currentUser.nome}/>
            <div className='report-screen'>
                <div className='adm-navbar'>
                    {/* <NavbarAdm /> */}
                </div>
                <div className='report-dashboard'>
                    <div className='header-container'>
                        <h2>Relatórios</h2>
                            <div className='button-container'>
                                <ButtonLogic buttons={buttons} onButtonSelect={setSelectedIndex} />
                            </div>
                    </div>
                    <hr className='divider-report' />
                    <div className='adm-report-content'>
                        <ReportContent indexButton={selectedIndex} atividades={listaAtividades}/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminReport;