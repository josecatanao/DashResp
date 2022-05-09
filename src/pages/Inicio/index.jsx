import "./style.css";
import Menu from "../../components/menu"
import Ilustracao from "../../assets/img/ilustracao-home.svg"


function Inicio() {
  return (
    <div id="bloco-principal-inicio">
      <Menu />
      <div id="bloco-centro">
        <div id="texto-centro">
           <h1> <span>DASHRESP:</span> UMA APLICAÇÃO DE VISUALIZAÇÃO DE DADOS </h1>
           <p>O DashResp é uma aplicação de visualização de dados sobre a distribuição de respiradores mecânicos no Brasil, a partir de dados abertos.</p>
           <a href="/dashboard">Acessar Dashboard</a>
        </div>
        <div id="foto-centro">
            <img src={Ilustracao} alt="ilustracao do respirador" />
        </div>
      </div>
      <div id="footer">
        <p>DashResp. IFPB 2022</p>
      </div>
    </div>
  )
}

export default Inicio;