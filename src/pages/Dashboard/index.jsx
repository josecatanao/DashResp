import "./style.css";
import Menu from "../../components/menu"
function Dashboard() {
  return (
    <div>
      <Menu />
      <h4 className="titulo-filtro">Filtrar por UF:</h4>
      <div id="menu-dash">
       <button>AC</button> 
       <button>AL</button>
       <button>AP</button>
       <button>AM</button>
       <button>BA</button>
       <button>CE</button>
       <button>DF</button>
       <button>ES</button>
       <button>GO</button>
       <button>MA</button>
       <button>MT</button>
       <button>MS</button>
       <button>MG</button>
       <button>PA</button>
       <button>PB</button>
       <button>PR</button>
       <button>PE</button>
       <button>PI</button>
       <button>RJ</button>
       <button>RN</button>
       <button>RS</button>
       <button>RO</button>
       <button>RR</button>
       <button>SC</button>
       <button>SP</button>
       <button>SE</button>
       <button>TO</button>
      </div>
    </div>
  )
}

export default Dashboard;