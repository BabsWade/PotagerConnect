import React from "react";
import { BiNotification, BiSearch, BiDownArrow  } from "react-icons/bi";
import './Header.css'
const Header = () => {
    return (
        <div className="header-content">
            <h1 className="titrepage">Tableau de bord</h1>
            <div className="toolbar">
                <div className="Recherche">
                    <BiSearch className="IconSearch" />
                    <input type="text"  placeholder="Rechercher"/>
                </div>
                <div className="Notification">
                    <p>Babacar Wade <BiDownArrow/></p>
                   
                </div>
                
            </div>
        </div>
    )
}
export default Header;