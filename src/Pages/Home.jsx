import React from 'react';
import Banner from '../Components/Banner.jsx';
import Criacao from '../Components/Criacao.jsx';
import Sobre from '../Components/Sobre.jsx';
import Contato from '../Components/Contato.jsx';

const Home = () => {
    return (
        <main className="home">
            <Banner/>
            <Criacao/>
            <Sobre/>
            <Contato/>
        </main>
    )
}

export default Home
