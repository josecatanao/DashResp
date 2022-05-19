import "./style.css";
import Menu from "../../components/menu"
import ChartsEmbedSDK from "@mongodb-js/charts-embed-dom";
import { useForm } from 'react-hook-form';
import { useEffect } from "react";

const sdk = new ChartsEmbedSDK({ baseUrl: "https://charts.mongodb.com/charts-project-0-ylbgo" });
const chart1 = sdk.createChart({ chartId: "627a746b-d1c5-4167-8c17-ecdd4e5710fd" });
const chart2 = sdk.createChart({ chartId: "627a6814-64ce-4b97-8476-5bcedf270e95" });
const chart3 = sdk.createChart({ chartId: "627a81d9-d1c5-41ad-8b57-ecdd4e6e4f55" });


function Dashboard() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (e) => {
    console.log(e)
    chart1.setFilter(e);
    chart2.setFilter(e);
    chart3.setFilter(e);
  }


  useEffect(() => {
    //Valor comprado por UF
    chart1.render(document.getElementById("chart1"))
    //Valor total das compras dos respiradores
    chart2.render(document.getElementById("chart2"))
    //QTD. total de respiradores comprados
    chart3.render(document.getElementById("chart3"))
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
          <button type="submit">Filtrar valores</button>
        </form>

      </div>
      <div id="bloco-graficos">
        <div id="chart2"></div>
        <div id="chart3"></div>
        <div id="chart1"></div>
      </div>
    </div>
  )
}

export default Dashboard;