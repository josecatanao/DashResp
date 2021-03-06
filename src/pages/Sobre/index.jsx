import "./style.css";
import Menu from "../../components/menu"
import Ilustracao from "../../assets/img/logo.svg"
import Footer from "../../components/footer"


function Sobre() {
  return (
    <div>
      <Menu />
      <div id="bloco-sobre">
        <img src={Ilustracao} alt="" />
        <p>
          Tendo em vista que o governo brasileiro não disponibiliza uma ferramenta de visualização de dados
          sobre as distribuições dos respiradores mecânicos aos estados e municípios brasileiros,
          a ferramenta DashResp surgi para resolver esse problema,
          mostrando gráficos e cards com informações consolidadas sobre a distribuição de respiradores mecânicos no Brasil e exterior a partir de dados abertos, o principal objetivo da
          ferramenta é mostrar esses gráficos e cards da forma mais simples possível,
          onde qualquer pessoa possa acessar e visualizar as informações de forma fácil e intuitiva.
        </p>
      </div>

      <Footer/>
    </div>
  )
}

export default Sobre;