import "./style.css";
import Ilustracao from "../../assets/img/logo.svg"

 
function Menu() {
    let pagina =  window.location.pathname
    return (
        <div id="bloco-menu"> 
            <a href="/"><img src={Ilustracao}  alt="logo-foto"/></a>
            <div id="links">
                <a className={pagina === "/" ? "pagina-selecionada":""} href="/">Início</a>
                <a className={pagina === "/dashboard" ? "pagina-selecionada":""} href="/dashboard">Dashboard</a>
                <a className={pagina === "/documentacao" ? "pagina-selecionada":""} href="/documentacao">Documentação</a>
                <a className={pagina === "/sobre" ? "pagina-selecionada":""} href="/sobre">Sobre</a>
            </div>
        </div>
    )
}

export default Menu;