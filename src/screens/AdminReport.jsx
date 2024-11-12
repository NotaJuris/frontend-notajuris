import React from "react";
import NavbarTeacher from "../components/TeacherComponents/NavbarTeacher/NavbarTeacher";
import "./AdminReport.css";
import ButtonLogic from "../components/AdminComponents/ButtonLogic/ButtonLogic";


const AdminReport = () => {
    return (
        <div className="adm-screen">
            <NavbarTeacher />
            <div className="teacher-dashboard">
                <div className="content-teacher-dashboard">
                    <div className="h2-home">
                        <div className="activity-list">
                            <h2>Relatórios</h2>
                            <div className="buttons-container">
                                <ButtonLogic />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminReport;