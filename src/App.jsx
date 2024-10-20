import './App.css';
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
      </Routes>
    </Router>
  );
}

export default App;
