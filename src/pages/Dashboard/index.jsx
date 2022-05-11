import "./style.css";
import Menu from "../../components/menu"
import ChartsEmbedSDK from "@mongodb-js/charts-embed-dom";
import { useEffect } from "react";

const sdk = new ChartsEmbedSDK();
const chart1 = sdk.createChart({
  baseUrl: "https://charts.mongodb.com/charts-project-0-ylbgo",
  chartId: "627a746b-d1c5-4167-8c17-ecdd4e5710fd",
  width: "700px",
  height: "300px"
});
 

const chart2 = sdk.createChart({
  baseUrl: "https://charts.mongodb.com/charts-project-0-ylbgo",
  chartId: "627a6814-64ce-4b97-8476-5bcedf270e95",
  width: "350px",
  height: "150px"
}); 

const chart3 = sdk.createChart({
  baseUrl: "https://charts.mongodb.com/charts-project-0-ylbgo",
  chartId: "627a81d9-d1c5-41ad-8b57-ecdd4e6e4f55",
  width: "350px",
  height: "150px"
});

const filtrar = (valor) => {
  var lista = document.getElementsByClassName("fitro-selecionado");
  for (var i = lista.length - 1; i >= 0; i--) {
    lista[i].classList.remove("fitro-selecionado") 
  }
  var button = document.getElementById(valor);
  button.classList.add("fitro-selecionado");
  chart1.setFilter({ "UF": valor });
  chart2.setFilter({ "UF": valor });
  chart3.setFilter({ "UF": valor });
}
const limpar = () => {
  var lista = document.getElementsByClassName("fitro-selecionado");
  for (var i = lista.length - 1; i >= 0; i--) {
    lista[i].classList.remove("fitro-selecionado") 
  }
  chart1.setFilter({});
  chart2.setFilter({});
  chart3.setFilter({});
}



function Dashboard() {
  useEffect(()=>{
    chart1.render(document.getElementById("chart1"))
    chart2.render(document.getElementById("chart2"))
    chart3.render(document.getElementById("chart3"))
  })
  
  return (
    <div>
      <Menu />
      <h4 className="titulo-filtro">Filtrar por UF:</h4>
      <div id="menu-dash">
        <button id="AC" onClick={() => { filtrar("AC") }}>AC</button>
        <button id="AL" onClick={() => { filtrar("AL") }}>AL</button>
        <button id="AP" onClick={() => { filtrar("AP") }}>AP</button>
        <button id="AM" onClick={() => { filtrar("AM") }}>AM</button>
        <button id="BA" onClick={() => { filtrar("BA") }}>BA</button>
        <button id="CE" onClick={() => { filtrar("CE") }}>CE</button>
        <button id="DF" onClick={() => { filtrar("DF") }}>DF</button>
        <button id="ES" onClick={() => { filtrar("ES") }}>ES</button>
        <button id="GO" onClick={() => { filtrar("GO") }}>GO</button>
        <button id="MA" onClick={() => { filtrar("MA") }}>MA</button>
        <button id="MT" onClick={() => { filtrar("MT") }}>MT</button>
        <button id="MS" onClick={() => { filtrar("MS") }}>MS</button>
        <button id="MG" onClick={() => { filtrar("MG") }}>MG</button>
        <button id="PA" onClick={() => { filtrar("PA") }}>PA</button>
        <button id="PB" onClick={() => { filtrar("PB") }}>PB</button>
        <button id="PR" onClick={() => { filtrar("PR") }}>PR</button>
        <button id="PE" onClick={() => { filtrar("PE") }}>PE</button>
        <button id="PI" onClick={() => { filtrar("PI") }}>PI</button>
        <button id="RJ" onClick={() => { filtrar("RJ") }}>RJ</button>
        <button id="RN" onClick={() => { filtrar("RN") }}>RN</button>
        <button id="RS" onClick={() => { filtrar("RS") }}>RS</button>
        <button id="RO" onClick={() => { filtrar("RO") }}>RO</button>
        <button id="RR" onClick={() => { filtrar("RR") }}>RR</button>
        <button id="SC" onClick={() => { filtrar("SC") }}>SC</button>
        <button id="SP" onClick={() => { filtrar("SP") }}>SP</button>
        <button id="SE" onClick={() => { filtrar("SE") }}>SE</button>
        <button id="TO" onClick={() => { filtrar("TO") }}>TO</button>
        <button id="AC" onClick={() => { limpar() }}>Limpar</button>
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