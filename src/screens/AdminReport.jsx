import React, { useState } from 'react';
import './AdminReport.css';
import ButtonLogic from "../components/AdminComponents/ButtonLogic/ButtonLogic";
import ReportContent from "../components/AdminComponents/ButtonLogic/ReportContent";
import Comp1 from "../components/AdminComponents/ButtonLogic/Component1";
import Comp2 from "../components/AdminComponents/ButtonLogic/Component2";
import Comp3 from "../components/AdminComponents/ButtonLogic/Component3";
// import NavbarAdm from '../components/AdminComponents/NavbarAdm/NavbarAdm';

const AdminReport = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const components = [Comp1, Comp2, Comp3];
    const buttons = ["Mensal", "Semestral", "Total"];

    return (
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
                    <ReportContent index={selectedIndex} components={components} />
                </div>
            </div>
        </div>
    );
};

export default AdminReport;