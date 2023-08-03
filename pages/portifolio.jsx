import { useState } from 'react'
import descricao from '../components/descricao.json'
function Portifolio() {
    const [idioma, setIdioma] = useState(mudar_Idioma)
    setIdioma = mudar_Idioma

    return (
        <div>
            <title>clarissa soares</title>
            <h1>portifolio</h1>
            <nav>
                <ul className="navbar">
                    <li id="sobre">{idioma.navbar[0]}</li>
                    <li id="projetos">{idioma.navbar[1]}</li>
                    <li id="carreira">{idioma.navbar[2]}</li>
                    <li id="contato">{idioma.navbar[3]}</li>
                    <button onclick={null}>{idioma.navbar[4]}</button>
                    <input type="checkbox" onChange={mudar_Idioma} id="seletor" />
                    <button onClick={modo_claro}>{idioma.navbar[5]}</button>
                    <button onClick={modo_escuro}>{idioma.navbar[6]}</button>
                </ul>
            </nav>
            <div className="sobre">
                <h3>{idioma.sobre.titulo}</h3>
                <span>{idioma.sobre.conteudo[0]}</span>
                <p></p>
                <span>{idioma.sobre.conteudo[1]}</span>
                <p></p>
            </div>
            <div className="projetos">
                <h3>{idioma.sobre.titulo}</h3>
                <ul>
                    <li></li>
                </ul>
            </div>
            <div className="carreira">
                <h3>{idioma.sobre.titulo}</h3>
                <span></span>
                <p></p>

            </div>
            <footer className="contato">
                <span>clarissamonteiro08@gmail.com</span>
                <p></p>
                <span>{idioma.sobre.titulo}</span>
            </footer>
        </div>
    )
}
export default Portifolio

function modo_claro() {
    console.log("modo claro funcionando")
    document.body.style.backgroundColor = 'white'
    document.body.style.color = 'blak'
}

function modo_escuro() {
    console.log("modo escuro funcionando")
    document.body.style.backgroundColor = 'rgb(7, 102, 186)'
    document.body.style.color = 'white'
}

function mudar_Idioma() {
    console.log("in Inglish :)")

    try {
        if (document.getElementById("seletor").checked) {
            return descricao.pt_br

        }
        else {
            return descricao.eng

        }
    } 
    catch (error) {
        console.log (error)

        }
    }