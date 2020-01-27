import React from 'react';
//import { BrowserRouter, Route, Switch } from "react-router-dom";
import Hearder from './Components/Hearder.jsx';
import Home from './Pages/Home.jsx';
import "./style.css";

const App = () => {
    return (
        <div className="body-container">
            <Hearder/>
            <Home/>
        </div>
    )
}

export default App
