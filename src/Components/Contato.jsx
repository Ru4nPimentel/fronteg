import React from 'react';
import { Link } from "react-router-dom";

import imgRua from "../img/icon/locationB.png";
import imgEmail from "../img/icon/attachmentB.png";
import imgTel from "../img/icon/phoneB.png";
import imgEnviar from "../img/icon/envelopB.png";

const Contato = () => {

    const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14615.232867265322!2d-46.59535650981336!3d-23.68281550332236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce4385360be839%3A0xd84419bded6f1863!2sPiraporinha%2C%20Diadema%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1580145620251!5m2!1spt-BR!2sbr";
    
    return (
        <section className="contato">
            <div className="container contato_conteudo ">
                <h2>Contato</h2>
                <div className="flex endContato">  
                    <div className="maps">
                        <iframe title="Mapa" src={mapSrc} ></iframe>
                    </div>                 
                    <div className="endereco">                        
                        <div className="bloco-rua blocoContato">
                            <div className="icon-end"> <img src={imgRua} alt="Endereço"/> </div>
                            <p className="infoEnd">Piraporinha - Diadema</p>
                        </div>
                        <div className="bloco-email blocoContato">
                            <div className="icon-end">  <img src={imgEmail} alt="E-mail"/> </div>
                            <a  href="mailto:fronteg@gmail.com" className="infoEnd">fronteg@gmail.com</a>
                        </div>
                        <div className="bloco-tel blocoContato">
                            <div className="icon-end">  <img src={imgTel} alt="Telefone"/> </div>
                            <a href="tel:11123456789" className="infoEnd">(11) 123456789</a>
                        </div>

                        <Link to="contato/" className="cal-contato"> <img src={imgEnviar} alt="entre em contato"/> <span>Formulário de Contato</span>    </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contato
