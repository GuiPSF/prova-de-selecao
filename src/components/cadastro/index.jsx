import "./style_cadastro.css"
import React, { useState } from "react";

const Cadastro = ({setData}) => {

    const handleSubmit = (event) => {
        event.preventDefault();
        const {name, email, data, telefone} = event.target;
        const dataForm = {
            name: name.value,
            email: email.value,
            data: data.value,
            telefone: telefone.value
        }
        setData(prev => ([...prev, dataForm]))
    }
    
    return (
        <div id="pagina_cadastro">
            <div id="cadastro">
                <h1>CADASTRO</h1>
            </div>
            <div id="formulario">
                <form onSubmit={handleSubmit}>
                    <div id="campos">
                        <label htmlFor="nome">Nome</label>
                        <input type="text" name="name" id="name" placeholder="Nome" required/>
                    
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" id="email" placeholder="E-mail" required/>
                    
                        <label htmlFor="data">Nascimento</label>
                        <input type="text" name="data" id="data" placeholder="Nascimento" required/>
                    
                        <label htmlFor="telefone">Telefone</label>
                        <input type="tel" name="telefone" id="telefone" placeholder="Telefone" required/>
                    </div>
                    <div id="botao_cadastro">
                        <input type="submit" name="cadastrar" id="cadastrar" value={'CADASTRAR'}/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Cadastro