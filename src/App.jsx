import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import StudentScreen from './screens/StudentScreen';
import Home from './screens/Home';
/*Retirei a importação do Card, pois ele já está incluso na Section */ 



function App() {
  return (
  <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/atividades" element={<StudentScreen />} />
      </Routes>
    </BrowserRouter>  
  </div>
  );
}

export default App;
