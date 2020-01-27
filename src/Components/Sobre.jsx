import React from 'react';

import bannerImg from "../img/banner/codigo.jpg";
import perfil from "../img/perfil/perfil.jpg";

const Sobre = () => {

    const bgImg = {
        backgroundImage: "url(" + bannerImg + ")"
    };

    return (
        <section className="sobre" style={bgImg}>
            <div className="opacityBlack">
                <div className="container sobre_conteudo flex">
                    <h2>Sobre</h2>
                    <div className="sobrePerfil">
                        <img src={perfil} alt="criador_fronTeg"/>
                    </div>
                    <div className="assuntoSobre">
                        <div className="balao">
                            <h3>Ruan</h3>
                            <p>Meu nome e Ruan, sou desenvolvedor Front-end a mais de 3 anos, sou o criador do FronTeg, o intuito da criação do FronTeg foi um testar para o uso do react, talvez algum dia esse projeto saia do git e vire um site de portfólio pessoal.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Sobre
