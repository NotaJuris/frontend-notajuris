
/* O comentário da login screen foi adicionado pois as telas estavam puxando o css da tela de login globalmente  */

import React  from 'react';
import './App.css';
import AdminScreen from './screens/AdminScreen';
// import LoginScreen from './screens/LoginScreen'; 
import TeacherScreen from './screens/TeacherScreen';
import StudentScreen from './screens/StudentScreen';
import TeacherStudentsScreen from './screens/TeacherStudentsScreen';
import UserRegister from './screens/UserRegister';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminPanel from './screens/AdminPanel';

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<LoginScreen />} />  */}
        <Route path="/AdminScreen" element={<AdminScreen />} /> 
        <Route path="/StudentScreen" element={<StudentScreen />} />
        <Route path="/TeacherScreen" element={<TeacherScreen />} />
        <Route path="/TeacherStudentsScreen" element={<TeacherStudentsScreen />} /> 
        <Route path="/UserRegister" element={<UserRegister />} />
        <Route path="/AdminPanel" element={<AdminPanel />} />
      </Routes>
    </Router> 
  );
}

export default App;
