import React from "react";
import { BiBookAlt, BiLeaf, BiBarChart, BiListCheck, BiChat } from "react-icons/bi";
const Menu = () => {
    return (
        <div className="menu">
            <div className="logo">
                <h2>Potager Connect</h2>
            </div>
            <div className="menu--list">
                <a href="#" className="item">
                    <BiBookAlt />
                    Dashboard
                </a>
                <a href="#" className="item">
                    <BiLeaf />
                    Plantes
                </a>
                <a href="#" className="item">
                    <BiBarChart />
                    Comptabilité
                </a>
                <a href="#" className="item">
                    <BiListCheck />
                    Commandes
                </a>
                <a href="#" className="item">
                    <BiChat />
                    Communauté
                </a>
            </div>
        </div>
    )
}
export default Menu;