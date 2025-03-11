import {HushRouter, Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./Components/login/Login.jsx";
import Reembolsos from "./Components/reembolsos/Reembolsos.jsx";
import Solicitacao from "./Components/solicitacao/Solicitacao.jsx";

import "./global.scss";


function App() {
  return (
    <HushRouter>
      <Routes>
        <Route path="/" element={<Login/>} /> 
        <Route path="/reembolso" element={<Reembolsos/>} />
        <Route path="/solicitacao" element={<Solicitacao/>}/>
      </Routes>
    </HushRouter>
  );
}

export default App;
