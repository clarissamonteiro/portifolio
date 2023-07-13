function Portifolio(){
    return(
        <div>
            <h1>portifolio</h1>
   <nav>
    <ul className="navbar">
        <li id="sobre">sobre mim</li>
        <li id="projetos">projetos</li>
        <li id="carreira">carreira</li>
        <li id="contato">contato</li>
        <button onclick={null}>inglês</button>
        <button onClick={modo_claro}>modo claro</button>
    <button onClick= {modo_escuro}>modo escuro</button>
    </ul>
   </nav>
    <div className="sobre">
        <h3>sobre mim</h3>
        <span>brasileira,</span>
        <p></p>
        <span>naci em florianópolis- santa catarina</span>
        <p></p>
    </div>
    <div className="projetos">
        <h3>projeto</h3>
        <ul>
            <li></li>
        </ul>
    </div>
    <div className="carreira">
        <h3>carreira</h3>
        <span></span>
        <p></p>

    </div>
    <footer className="contato">
        <span>clarissamonteiro08@gmail.com</span>
        <p></p>
        <span></span>
    </footer>
        </div>
    )
}
export default Portifolio 

function modo_claro(){
    console.log ("modo claro funcionando" )
    document.body.style.backgroundColor = 'white'
    document.body.style.color = 'blak'
}

function modo_escuro(){
    console.log ("modo escuro funcionando")
    document.body.style.backgroundColor='rgb(7, 102, 186)'
    document.body.style.color = 'white'
}

