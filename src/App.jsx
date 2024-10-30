import React  from 'react';
import './App.css';
import AdminReport from './screens/AdminReport';
import LoginScreen from './screens/LoginScreen';
import TeacherScreen from './screens/TeacherScreen';
import AdminScreen from './screens/AdminScreen';
import StudentScreen from './screens/StudentScreen';
import TeacherStudentsScreen from './screens/TeacherStudentsScreen';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/AdminScreen" element={<AdminScreen />} />
        <Route path="/StudentScreen" element={<StudentScreen />} />
        <Route path="/TeacherScreen" element={<TeacherScreen />} />
        <Route path="/TeacherStudentsScreen" element={<TeacherStudentsScreen />} />
        <Route path="/AdminReport" element={<AdminReport/>} />
      </Routes>
    </Router>
  );
}

export default App;
