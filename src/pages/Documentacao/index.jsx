import "./style.css";
import Menu from "../../components/menu"
import arquitetura from "../../assets/img/arquitetura.png"
import { useEffect } from "react";
import Footer from "../../components/footer"

import DasResp from "../../assets/img/logo.svg"



function Documentacao() {

  useEffect(() => {
    const tabs = document.querySelectorAll('[data-tab-target]')
    const tabContents = document.querySelectorAll('[data-tab-content]')
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget)
        tabContents.forEach(tabContent => {
          tabContent.classList.remove('active')
        })
        tabs.forEach(tab => {
          tab.classList.remove('active')
        })
        tab.classList.add('active')
        target.classList.add('active')
      })
    })
  })



  return (
    <div>
      <Menu />

    <div id="corpo-projeto">
      <ul className="tabs">
        <li data-tab-target="#Objetivo" className="active tab">Objetivo</li>
        <li data-tab-target="#Metodologia" className="tab">Metodologia</li>
        <li data-tab-target="#Arquitetura" className="tab">Arquitetura</li>
      </ul>

      <div className="tab-content">
        <div id="Objetivo" data-tab-content className="active">
          <h1>Objetivo</h1>
          <img src={DasResp} alt="" />
          <p>A aplicação DashResp foi desenvolvida com o objetivo principal de mostrar visualizações
            de fácil compreensão sobre a distribuição de respiradores mecânicos no Brasil,
            a partir do processo de E.T.L usando dados abertos. Os dados brutos são capturados do site <a href="https://dados.gov.br/dataset/distribuicao-de-respiradores">dados.gov.br </a>
            e logo após é realizado processo de limpeza e carregamento desses dados de forma automática.  </p>
        </div>
        <div id="Metodologia" data-tab-content>
          <h1>Metodologia</h1>
          <p>Esse projeto abordou a metodologia de pesquisa exploratória e aplicada,
            por buscar familiarizar com um problema específico buscando padrões e aplicando um estudo a partir da pesquisa,
            com o intuito de gerar um resultado trasformados em graficos e cards, que nesse contexto é a aplicação DashResp.</p>
        </div>
        <div id="Arquitetura" data-tab-content>
          <h1>Arquitetura da aplicação DashResp</h1>
          <img src={arquitetura} alt="Arquitetura" />

          <p>Nota-se na imagem acima que cada elemento possui um fluxo próprio.
            O site dados.gov.br serve apenas para disponibilizar o arquivo CSV por meio de um link.
            Assim que uma URL específica é aberta, é por meio dessa URL que a automação consegue capturar o arquivo CSV.</p>

          <p>A automação captura por meio da URL o arquivo CSV. Em seguida,
            transforma o arquivo capturado de CSV para JSON. Depois dessa transformação de formato,
            inicia-se o processo de limpeza de dados no arquivo JSON, eliminando todos os tipos de ruídos percebidos na análise dos dados,
            como aspas duplicadas, números sem formatação válida, datas em formatos inválidos, caracteres inconsistentes, entre outros.
            Depois da automação realizar a limpeza, ela envia todos os dados em JSON para o MongoDB Atlas.
          </p>

          <p>
            Seguindo o fluxo, o MongoDB Atlas recebe esses dados em JSON e armazena em um database em forma de collection.
            Internamente, o MongoDB Atlas disponibiliza uma ferramenta conhecida como MongoCharts,
            essa ferramenta facilita a criação ddo DashBoard com os dados das collections de forma fácil e performática.
            Depois do processo de criação dos gráficos, o Dashboard é salvo, e é disponibilizado um SDK de incorporação,
            onde é possível com esse SDK realizar ajustes e filtros nos gráficos por meio de uma aplicação externa.
          </p>

          <p>
            Com o SDK disponibilizado pelo mongo Chart a aplicação DashResp se comunica com o SDK de uma forma segura por meio de um ID único da aplicação DashResp e um Id único de gráfico.
            Com essas duas informações é possível que o código da aplicação DashResp renderize os gráficos na aplicação e realize filtros nas diversas formas de visualização, como, por exemplo, em gráficos.
          </p>

        </div>
        
      </div>

      <Footer/>
      </div>
    </div>
    
  )
}

export default Documentacao;