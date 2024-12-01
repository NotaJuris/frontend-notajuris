
/* O comentário da login screen foi adicionado pois as telas estavam puxando o css da tela de login globalmente  */

import React  from 'react';
import './App.css';
import AdminReport from './screens/AdminReport';
import LoginScreen from './screens/LoginScreen';
import TeacherScreen from './screens/TeacherScreen';
import StudentScreen from './screens/StudentScreen';
import TeacherStudentsScreen from './screens/TeacherStudentsScreen';
import UserRegister from './screens/UserRegister';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminPanel from './screens/AdminPanel';
import AdminStudents from './screens/AdminStudents';

function App() {
  return (
    <Router>
      <Routes>
        {<Route path="/" element={<LoginScreen />} />  }
        <Route path="/StudentScreen" element={<StudentScreen />} />
        <Route path="/TeacherScreen" element={<TeacherScreen />} />
        <Route path="/TeacherStudentsScreen" element={<TeacherStudentsScreen />} />
        <Route path="/UserRegister" element={<UserRegister />} />
        <Route path="/AdminPanel" element={<AdminPanel />} />
        <Route path="/AdminReport" element={<AdminReport/>} />
        <Route path="/AdminStudents" element={<AdminStudents/>} />
      </Routes>
    </Router> 
  );
}

export default App;
