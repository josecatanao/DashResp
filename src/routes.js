import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Inicio from "./pages/Inicio";
import Dashboard from "./pages/Dashboard";
import Documentacao from "./pages/Documentacao";
import Sobre from "./pages/Sobre";

function Rotas(){

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" exact  element={<Inicio />} />
                <Route path="/dashboard"  element={<Dashboard />} />
                <Route path="/documentacao"  element={<Documentacao />} />
                <Route path="/sobre"  element={<Sobre />} />
            </Routes>
        </BrowserRouter>
    )

}

export default Rotas;