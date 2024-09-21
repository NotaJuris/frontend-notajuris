
import './App.css';
import StudentScreen from './screens/StudentScreen'; 
import Navbar from './components/NavbarComponent/Navbar';
import LeftSection from './components/Sections/LeftSection';
import Card from './components/CardComponents/Card';


function App() {
  return (
    <div className="App">
      <Navbar name="Felipe"/> 
      <StudentScreen />
      <LeftSection/>
      
    </div>
  );
}

export default App;
