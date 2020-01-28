import React from 'react';
import { Link } from "react-router-dom";

import Logo from "../img/LogoB.png";

const Hearder = () => {
    return (
        <header>
            <nav className="flex menu container">
                <div className="menu-logo">
                    <a href="/"> <img className="logo" src={Logo} alt="logo"/> </a>
                </div>
                <ul>
                    <li> <Link to="/">Home</Link> </li>                    
                    <li> <Link to="/produtos">Produtos</Link> </li>                    
                    <li> <Link to="/contato">Contato</Link> </li>
                </ul>
            </nav>
        </header>
    )
}

export default Hearder
