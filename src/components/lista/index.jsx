import "./style_lista.css"
import Cadastro from "../cadastro"
import { useState } from "react";


const Lista = ({ itens }) => {

    return (

        <div id="lista">
            <>
                <h1>LISTA DE CADASTRO</h1>
                <table>
                    <tbody>
                        <tr>
                            <th></th>
                            <th>Nome</th>
                            <th>E-mail</th>
                            <th>Nascimento</th>
                            <th>Telefone</th>
                        </tr>

                        {!itens.length ? (
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>

                        ) :
                            itens.map((item, i) => (
                                <tr>
                                    <td>{i}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.data}</td>
                                    <td>{item.telefone}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </>
        </div>
    )
}

export default Lista