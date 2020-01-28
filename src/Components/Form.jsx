import React from 'react'

import imgRua from "../img/icon/locationB.png";
import imgEmail from "../img/icon/attachmentB.png";
import imgTel from "../img/icon/phoneB.png";

const Form = () => {
    return (
        <section className="contato">
            <div className="container contato_conteudo ">
                <h2>Contato</h2>
                <div className="flex formularioContato endContato">
                    <form action="">
                    <label htmlFor="nome">Nome</label>
                        <input type="text" name="nome" id="nome" className="textInput"/>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" className="textInput" />
                        <label htmlFor="cep">Cep</label>    
                        <input type="text" name="cep" id="cep" className="textInput"/>
                        <label htmlFor="end">Endereço</label>
                        <input type="text" name="end" id="end" className="textInput" />
                        <input type="submit" value="Enviar"/>
                    </form>
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
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Form
