
import './Navbar.css';

function Navbar(props) {
  return (
    <div className="Navbar">
      <h3 style={{ color: 'white' }}>Bem-vindo, {props.name}!</h3>
      <button className="LogoutButton" >Sair</button>
    </div>
  );
}

export default Navbar;