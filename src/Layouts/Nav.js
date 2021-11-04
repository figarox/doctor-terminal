import React from "react";
import { Link } from 'react-router-dom';
import '../Style/Nav.css';

const NavBar = () => {

    const WindowNav = {
        marginTop: "25px",
    }

    return ( 
        <div style={WindowNav}>
              <Link to="/">
                    <li><ion-icon name="apps-outline" className="apps-outline"></ion-icon><a>Terminarz</a></li>
              </Link>
              <Link to="/Patient">
                    <li><ion-icon name="person-outline"></ion-icon><a>Pacjęt</a></li>
              </Link>
              <Link to="/Settings">
                    <li><ion-icon name="settings-outline"></ion-icon><a>Ustawienia</a></li>
              </Link>
        </div>
     );
}
 
export default NavBar;