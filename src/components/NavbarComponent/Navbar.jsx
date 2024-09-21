
import './Navbar.css';

function Navbar(props) {
  return (
    <div className="Navbar">
      <h3>Bem-vindo, {props.name}!</h3>
      <button className="LogoutButton" >Logout</button>
    </div>
  );
}

export default Navbar;