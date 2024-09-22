
import './App.css';
import StudentScreen from './screens/StudentScreen'; 
import Navbar from './components/NavbarComponent/Navbar';
import LeftSection from './components/Sections/LeftSection';
/*Retirei a importação do Card, pois ele já está incluso na Section */ 



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
