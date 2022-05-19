import "./style.css";
import Menu from "../../components/menu"
import ChartsEmbedSDK from "@mongodb-js/charts-embed-dom";
import { useForm } from 'react-hook-form';
import { useEffect } from "react";

const sdk = new ChartsEmbedSDK({ baseUrl: "https://charts.mongodb.com/charts-project-0-ylbgo" });
const chart1 = sdk.createChart({ chartId: "627a746b-d1c5-4167-8c17-ecdd4e5710fd", showAttribution: false });
const chart2 = sdk.createChart({ chartId: "627a6814-64ce-4b97-8476-5bcedf270e95", showAttribution: false });
const chart3 = sdk.createChart({ chartId: "627a81d9-d1c5-41ad-8b57-ecdd4e6e4f55", showAttribution: false });
const chart4 = sdk.createChart({ chartId: "627a7287-088b-43f2-8a36-6bca47e88a21", showAttribution: false });
const chart5 = sdk.createChart({ chartId: "627a8028-64ce-4686-81ef-5bcedf4a8231", showAttribution: false });
const chart6 = sdk.createChart({ chartId: "627a720b-db1f-4503-83c1-744b5b73a9ca", showAttribution: false });
const chart7 = sdk.createChart({ chartId: "627a80a6-1fda-49dd-8af6-b5262a1e8df3", showAttribution: false });
const chart8 = sdk.createChart({ chartId: "627a7666-088b-4a47-8e5b-6bca47edb0aa", showAttribution: false });
const chart9 = sdk.createChart({ chartId: "627a83e4-b109-4105-8c6f-b778a39b32fd", showAttribution: false });
const chart10 = sdk.createChart({ chartId:"627a85c9-64ce-467e-810d-5bcedf522214", showAttribution: false });
const chart11 = sdk.createChart({ chartId:"627a88ab-805b-4335-83d7-75a7eb878258", showAttribution: false });

function Dashboard() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (e) => {
    console.log(e)
    chart1.setFilter(e);
    chart2.setFilter(e);
    chart3.setFilter(e);
    chart4.setFilter(e);
    chart5.setFilter(e);
    chart6.setFilter(e);
    chart7.setFilter(e);
    chart8.setFilter(e);
    chart9.setFilter(e);
    chart10.setFilter(e);
    chart11.setFilter(e);
  }

  useEffect(() => {
    //Valor comprado por UF
    chart1.render(document.getElementById("chart1"))
    //Valor total das compras dos respiradores
    chart2.render(document.getElementById("chart2"))
    //QTD. total de respiradores comprados
    chart3.render(document.getElementById("chart3"))
    //QTD. para Transporte
    chart4.render(document.getElementById("chart4"))
    //QTD. Comprada para os Estados
    chart5.render(document.getElementById("chart5"))
    //QTD. para UTI
    chart6.render(document.getElementById("chart6"))
    //QTD. Comprada para os Municípios
    chart7.render(document.getElementById("chart7"))
    //Distribuição nos estados
    chart8.render(document.getElementById("chart8"))
    //Valor vendido por Empresa
    chart9.render(document.getElementById("chart9"))
    //Tabela Completa
    chart10.render(document.getElementById("chart10"))
    //Tabela de vendas das Empresas
    chart11.render(document.getElementById("chart11"))
  })

  return (
    <div>
      <Menu />
      <h4 className="titulo-filtro">Filtros:</h4>
      <div id="menu-dash">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>UF</label>
          <select {...register("UF")}>
            <option selected>Todos</option>
            <option value="AC">AC</option>
            <option value="AL">AL</option>
            <option value="AP">AP</option>
            <option value="AM">AM</option>
            <option value="BA">BA</option>
            <option value="CE">CE</option>
            <option value="DF">DF</option>
            <option value="ES">ES</option>
            <option value="GO">GO</option>
            <option value="MA">MA</option>
            <option value="MT">MT</option>
            <option value="MS">MS</option>
            <option value="MG">MG</option>
            <option value="PA">PA</option>
            <option value="PB">PB</option>
            <option value="PR">PR</option>
            <option value="PE">PE</option>
            <option value="PI">PI</option>
            <option value="RJ">RJ</option>
            <option value="RN">RN</option>
            <option value="RS">RS</option>
            <option value="RO">RO</option>
            <option value="RR">RR</option>
            <option value="SC">SC</option>
            <option value="SP">SP</option>
            <option value="SE">SE</option>
            <option value="TO">TO</option>
            <option value="AC">Limpar</option>
          </select>
          <label>Tipo</label>
          <select  {...register("TIPO")}>
            <option value="UTI">Todos</option>
            <option value="UTI">UTI</option>
            <option value="TRANSPORTE">TRANSPORTE</option>
            <option value="TRANSPORTE USA">TRANSPORTE USA</option>
          </select>
          <label>Estado/Municipio</label>
          <select  {...register("ESTADOMUNICIPIO")}>
            <option value="ESTADO">Estado</option>
            <option value="MUNICIPIO">Municipio</option>
          </select>
          <button type="submit">Filtrar valores</button>
        </form>

      </div>
      <div id="bloco-graficos">
        <div id="chart2"></div>
        <div id="chart3"></div>
        <div id="chart4"></div>
        <div id="chart5"></div>
        <div id="chart6"></div>
        <div id="chart7"></div>
        <div id="chart1"></div>
        <div id="chart9"></div>
        <div id="chart11"></div>
        <div id="chart8"></div>
        <div id="chart10"></div>
      </div>
    </div>
  )
}

export default Dashboard;