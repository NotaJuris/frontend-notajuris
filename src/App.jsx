import './App.css';
import LoginScreen from './screens/LoginScreen';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginScreen />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
