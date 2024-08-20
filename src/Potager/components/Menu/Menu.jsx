import React from "react";
import './Menu.css'
import { BiBookAlt, BiLeaf, BiBarChart, BiListCheck, BiChat, BiSolidDashboard } from "react-icons/bi";
const Menu = () => {
    return (
        <div className="menu">
            <div className="logo">
                <h2>Potager Connect</h2>
            </div>
            <div className="menu--list">
                <a href="#" className="item">
                    <BiSolidDashboard className="icone-logo" />
                    Dashboard
                </a>
                <a href="#" className="item">
                    <BiLeaf className="icone-logo"/>
                    Plantes
                </a>
                <a href="#" className="item">
                    <BiBarChart className="icone-logo"/>
                    Comptabilité
                </a>
                <a href="#" className="item">
                    <BiListCheck className="icone-logo"/>
                    Commandes
                </a>
                <a href="#" className="item">
                    <BiChat className="icone-logo"/>
                    Communauté
                </a>
            </div>
        </div>
    )
}
export default Menu;