import React from 'react';
import Banner from '../Components/Banner.jsx';
import Criacao from '../Components/Criacao.jsx';
import Sobre from '../Components/Sobre.jsx';
import Contato from '../Components/Contato.jsx';
import bannerImg from "../img/banner/bannerHome2.jpg";

const bannerTitle = "Criação e otimização do seu site !";
const bannerDescription = "Seja bem vindo";

const Home = (props) => {
    props.newTitle("Home - FronTeg");

    return (
        <main className="home" >
            <Banner srcBanner={bannerImg} btitle ={bannerTitle} bdescript={bannerDescription} />
            <Criacao/>
            <Sobre/>
            <Contato/>            
        </main>
    )
}

export default Home
