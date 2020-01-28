import React from 'react';

import cod from "../img/icon/cog.png";
import mobile from "../img/icon/mobile.png";
import tools from "../img/icon/tools.png";


const Criacao = () => {

    return (
        <section className="criacao">
            <div className="container criacao_conteudo flex">
                <div className="item "> 
                    <h2>Criação</h2>
                    <div className="img-circle">
                        <img src={cod} alt="cog"/>
                    </div>
                    <p>Tenha um site com a mesma tecnologia utilizada no <b>Nubank, Netflix, Uber.</b></p>
                 </div>
                 <div className="item "> 
                    <h2>Mobile</h2>
                    <div className="img-circle">
                        <img src={mobile} alt="cog"/>
                    </div>
                    <p>Tenha um site totalmente compatível com os celulares</p>
                 </div>

                 <div className="item "> 
                    <h2>manutenção</h2>
                    <div className="img-circle">
                        <img src={tools} alt="cog"/>
                    </div>
                    <p>Após a criação do seu novo site, você terá um mês de assistência e manutenção totalmente de graça </p>
                 </div>
            </div>
        </section>
    )
}

export default Criacao
