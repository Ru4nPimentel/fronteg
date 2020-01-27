import React from 'react';
//import { Link } from "react-router-dom";

import Logo from "../img/LogoB.png";

const Hearder = () => {
    return (
        <header>
            <nav className="flex menu container">
                <div className="menu-logo">
                    <a href="/"> <img className="logo" src={Logo} alt="logo"/> </a>
                </div>
                <ul>
                    <li> <a href="#">Home</a> </li>                    
                    <li> <a href="#">Criação</a> </li>
                    <li> <a href="#">Sobre</a> </li>
                    <li> <a href="#">Contato</a> </li>
                </ul>
            </nav>
        </header>
    )
}

export default Hearder
