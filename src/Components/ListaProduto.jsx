import React, {useState, useEffect} from 'react';

const Produto = (props) => {
    return (
        <section className="produto">
            <div className="container flex conteudoProduto">
                {props.listaProd.map(produto => {
                    return (<div id={produto.id} className="itenProduto" key={produto.id}>
                                <h2 >{produto.nome}</h2>
                                <img src={produto.fotos[0].src} alt={produto.fotos[0].titulo}  />
                            </div> );
                })}
            </div>
        </section>
    )
}

export default Produto
