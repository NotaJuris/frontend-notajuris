import React from "react";
import NavbarTeacher from "../components/TeacherComponents/NavbarTeacher/NavbarTeacher";
import "./AdminReport.css";
import "../components/AdminComponents/ButtonReports/ButtonReports"
import activityList from "../components/AdminComponents/Reports/data"
import ButtonMonthly from "../components/AdminComponents/Reports/MonthlyReport/ButtonMonthly/ButtonMonthly";


const AdminReport = () => {
    return (
        <div className="teacher-screen">
            <NavbarTeacher />
            <div className="teacher-dashboard">
                <div className="content-teacher-dashboard">
                    <div className="h2-home">
                        <h2>Relatórios</h2>
                        <div className="buttons-container">     
                            <ButtonMonthly/>
                            <button className="button-report">
                                Semestral
                            </button>
                            <button className="button-report">
                                Total
                            </button>
                        </div>
                    </div>
                    <hr className="divider" />
                </div>
            </div>
        </div>
    );
};

export default AdminReport;