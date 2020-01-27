import React from 'react'

const Contato = () => {
    return (
        <section className="contato">
            <div className="container contato_conteudo ">
                <h2>Contato</h2>
                <div className="flex formularioContato">
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
                        <p>teste</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contato
