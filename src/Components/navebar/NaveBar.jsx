import styles from "./NaveBar.module.scss";
import BHistórico from "../../assets/Header/BHistórico.png";
import BHome from "../../assets/Header/BHome.png";
import BPesquisa from "../../assets/Header/BPesquisa.png";
import BReembolso from "../../assets/Header/BReembolso.png";
import BSair from "../../assets/Header/BSair.png";
import ImgFechar from "../../assets/Header/Img-fechar-header.png";
import ImgPerfil from "../../assets/Header/ImgPerfil.png";

import { useNavigate } from "react-router-dom";

function NaveBar() {
  const navigate = useNavigate();

  return (
    <nav className={styles.naveBar}>
      <button className={styles.botaoMenu}> 
        <img src={ImgFechar} alt="Botão Menu" />
      </button>

    <div className= {styles.divNavegacao} >
      <img  className={styles.user}src={ImgPerfil} alt="Botão Perfil" /> 
        
          <button className={styles.botaoHome} onClick={() => {navigate("/reembolsos");}}>
           <img  src={BHome} alt="Botão Home" />   
          </button>  

          <button className={styles.bitaoReembolso} onClick={() => {navigate("/solicitacao");}}>
            <img src={BReembolso} alt="Botão Reembolso" />
          </button>     
          
          <button className={styles.botaoPesquisa} onClick={() => {navigate("/reembolsos");}}>
            <img src={BPesquisa} alt="Botão Pesquisar" />
          </button>
            
         <button className={styles.botaoHistorico} onClick={() => {navigate("/solicitacao");}}>
            <img src={BHistórico} alt="Botão Historico" />
          </button> 
          
      </div>
      
    <button className={styles.buttonSair} onClick={() => {navigate("/");}}>
        <img src={BSair} alt="Botão sair" />
      </button>
        
    </nav>
  );
}

export default NaveBar;    
          
         
        
      


      
