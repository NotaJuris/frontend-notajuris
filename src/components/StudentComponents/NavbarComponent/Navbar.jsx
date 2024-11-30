import React from "react";
import './Navbar.css';
import logo_neojurix from '../../../assets/images/logo_neojurix.svg';
import bell from '../../../assets/images/bell.svg';
import logout from '../../../assets/images/logout.svg';


function Navbar(props) {
  return (
    <nav className="Navbar">
      <div className="NavbarLeft">
        <img src={logo_neojurix} alt="Logo NotaJuris" className="NavbarLogo" />
        <h1>NeoJurix</h1>
      </div>
      <div className="NavbarRight">
        <h3 style={{ color: 'white' }}>Bem-vindo, {props.name}! 
          <button className="NotificationBell">Notificações 
            <img src={bell} alt="Notification" className="NotificationIcon" style={{ filter: 'brightness(0) invert(1)' }}/>
          </button>
         <button className="LogoutButton">Sair
           <img src={logout} alt= "Logout" className="LogoutIcon" style={{ filter: 'brightness(0) invert(1)' }}/>
          </button>
        </h3>
      </div>
    </nav>
  );
}

export default Navbar;
