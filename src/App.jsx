
import './App.css';
import StudentScreen from './screens/StudentScreen'; 
import Navbar from './components/StudentComponents/NavbarComponent/Navbar';
import Section from './components/StudentComponents/Sections/Sections';

/*Retirei a importação do Card, pois ele já está incluso na Section */ 



function App() {
  return (
    <div className="App">
      <Navbar name="Felipe"/> 
      <StudentScreen />
      <Section/>
    </div>
  );
}

export default App;
