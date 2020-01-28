import React from 'react';
import Banner from '../Components/Banner.jsx';
import Form from '../Components/Form.jsx';
import bannerImg from "../img/banner/bannerContato.jpg";

const bannerTitle = "Dúvidas? Entre em contato";
const bannerDescription = "Pergunte qualquer coisa";

const Contato = (props) => {  
    props.newTitle("Contato - FronTeg");  
    return (
        <main className="contato">
            <Banner srcBanner={bannerImg} btitle ={bannerTitle} bdescript={bannerDescription} />
            <Form/>
        </main>
    )
}

export default Contato
