import React from 'react';

import bannerImg from "../img/banner/bannerHome2.jpg";

const Banner = () => {

    const bgImg = {
        backgroundImage: "url(" + bannerImg + ")"
    };

    return (
        <section className="banner_img" style={bgImg}>
            <h1> 
                <span>Criação e otimização agora o seu site !</span>
                <q> Seja bem vindo </q>
            </h1>
        </section>
    )
}

export default Banner
