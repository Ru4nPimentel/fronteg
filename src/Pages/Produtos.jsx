import React, {useState, useEffect} from 'react';
import Banner from '../Components/Banner.jsx';
import ListaProduto from '../Components/ListaProduto.jsx';
import bannerImg from "../img/banner/bannerHome.jpg";
import Contato from '../Components/Contato.jsx';

const Produtos = (props) => {
    const bannerTitle = "Produtos";
    const bannerDescription = "Produtos";
    const [lista,setLista] = useState([]);

    const loadDiv = (
        <section className="load">
            <p>
                 <span> {"<"} </span> Carregando... <span> {">"} </span>
            </p>
        </section>
    )

    useEffect(() =>{
        fetch('https://ranekapi.origamid.dev/wp-json/api/produto?_limit=6').then(responde => responde.json()).then(data => {
            setLista(data);
            });
    },[])

    
    props.newTitle("Produto - FronTeg");
    return (
        <main className="produto"   >
            <Banner srcBanner={bannerImg} btitle ={bannerTitle} bdescript={bannerDescription} />
            {lista.length > 0 ? <ListaProduto listaProd={lista} /> : loadDiv}
            <Contato/> 
        </main>
    )
}

export default Produtos
