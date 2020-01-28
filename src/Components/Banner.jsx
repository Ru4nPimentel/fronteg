import React, {useState,useEffect} from 'react';

const Banner = (props) => {

    const bgImg = {
        backgroundImage: "url(" + props.srcBanner + ")"
    };

    const [txtb,setTxtb] = useState('');
   
    function h1Efeito() {
        const txtArray = props.btitle.split('');
        let newTxt = "";
        txtArray.forEach(function (letra, index) {

            
            setTimeout(function () {
                newTxt += letra;
                setTxtb(newTxt);
            }, 60 * index);
    
        });
    }


useEffect(() =>{
    h1Efeito()
},[]);





    return (
        <section className="banner_img" style={bgImg}>
            <h1> 
                <span> {txtb} </span>
                <q> {props.bdescript} </q>
            </h1>
        </section>
    )
}

export default Banner
