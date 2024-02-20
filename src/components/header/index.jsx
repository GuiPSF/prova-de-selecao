import "./style_header.css"
import React, { useState, useEffect } from 'react'

const Header = () => {
    const [wid, setWid] = useState('0%');
    const openSidebar = () => {
        setWid('25%')
    }

    return (
        <header>
            <div id="content">
                <div id="texts">
                    <div id="estagio">
                        <h1 id="titulo">ESTÁGIO</h1>
                        <p>PROVA DE SELEÇÃO</p>
                    </div>
                    <div id="navbar">
                        <div className="logo">
                            <img src="/src/assets/images/logo-in8-dev.svg" alt="" />
                        </div>
                        <div>
                            <a href="#cadastro">cadastro</a>
                            &#9679;
                            <a href="#lista">lista</a>
                            &#9679;
                            <a href="#footer">sobre mim</a>
                        </div>
                    </div>


                    <div id="navbar_mobile" onClick={openSidebar}>
                        <div className="icon_hamburguer">
                            <img src="/src/assets/icons/hamburguer.svg" alt="" />
                        </div>
                        <div className="logo">
                            <img src="/src/assets/images/logo-in8-dev.svg" alt="" />
                        </div>
                    </div>


                </div>
            </div>
        </header>
    )
}

export default Header