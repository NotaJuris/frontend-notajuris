import React from "react";
import { useState, useEffect } from "react";
import './Navbar.css';
import logo_neojurix from '../../../assets/images/logo_neojurix.svg';
import bell from '../../../assets/images/bell.svg';
import logout from '../../../assets/images/logout.svg';
import ApiScripts from "../../../scripts/ApiEndpoints";
import { useNavigate } from 'react-router-dom'; 



function Navbar(props) {

  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const navigate = useNavigate();

  const doLogout = () => {
    localStorage.clear();
    navigate("/")
  }

  useEffect(()=>{

    async function fetchData(){

      try{

        const apiScripts = new ApiScripts();
        const currentUser = JSON.parse(localStorage.getItem("currentUser"));
        const token = localStorage.getItem("currentUserToken");
  
        const notificacoes = await apiScripts.getNotifications(currentUser.id, token);
        if(notificacoes){
          setNotifications(notificacoes);
        }
  
      }catch(error){
        console.error(error);
      }

    }

    fetchData();
    
  }, [])

  return (
    <nav className="Navbar">
      <div className="NavbarLeft">
        <img src={logo_neojurix} alt="Logo NotaJuris" className="NavbarLogo" />
        <h1>NeoJurix</h1>
      </div>
      <div className="NavbarRight">
        <h3 style={{ color: 'white' }}>Bem-vindo, {props.name}! 
          <button onClick={() => setNotificationsOpen(!notificationsOpen)}  className="NotificationBell">Notificações 
            <img src={bell} alt="Notification" className="NotificationIcon" style={{ filter: 'brightness(0) invert(1)' }}/>
          </button>
         <button onClick={() => doLogout()}className="LogoutButton">Sair
           <img src={logout} alt= "Logout" className="LogoutIcon" style={{ filter: 'brightness(0) invert(1)' }}/>
          </button>
        </h3>
        {notificationsOpen &&
            <div className="notificationsPanel">
              {
                  notifications.map( n => (
                    <div className="cardNotification">
                      <div className="cardNotificationTitle">n.titlo</div>
                      <div>n.mensagem</div>
                    </div>)
                  )
              }
            </div>
        }
      </div>
    </nav>
  );
}

export default Navbar;
