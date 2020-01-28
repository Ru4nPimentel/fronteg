import React, {useState,useEffect} from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Hearder from './Components/Hearder.jsx';
import Home from './Pages/Home.jsx';
import Contato from './Pages/Contato.jsx';
import Produtos from './Pages/Produtos.jsx';
import Footer from './Components/Footer.jsx';
import "./style.css";

const App = () => {

    const [title, setTitle] = useState("FonTeg");

    useEffect(() =>{
        document.title = title;
    });


    return (
        <div className="body-container">
            <BrowserRouter>
            <Hearder/>
            <Switch>
                <Route path="/produtos">
                    <Produtos newTitle = {setTitle}/>
                </Route>
                <Route path="/contato">
                    <Contato newTitle = {setTitle}/>
                </Route>
                <Route path="/">
                    <Home newTitle = {setTitle}/>
                </Route>        
            </Switch>
            <Footer/>
            </BrowserRouter>
            
        </div>
    )
}

export default App
