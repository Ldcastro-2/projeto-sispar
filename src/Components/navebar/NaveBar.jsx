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
    <nav className={styles.naveBarEstilo}>

      <button className={styles.imgFechar}>
        <img src={ImgFechar} alt="Botão abrir e fechar" />
      </button>

      <section className={styles.sectionNaveBar}>
        <img src={ImgPerfil} alt="Botão Perfil" />   
          
      <div className= {styles.divButtonNavebar} >
  
        <button className={styles.imgHome} onClick={() => {navigate("/reembolsos");}}>
           <img src={BHome} alt="Botão abrir e fechar" />   
          </button>  

          <button className={styles.imgReembolso} onClick={() => {navigate("/solicitacao");}}>
            <img src={BReembolso} alt="Botão abrir e fechar" />
          </button>     
          
          <button className={styles.imgPesquisa} onClick={() => {navigate("/reembolsos");}}>
            <img src={BPesquisa} alt="Botão abrir e fechar" />
          </button>
            
         <button className={styles.imgHistorico} onClick={() => {navigate("/solicitacao");}}>
            <img src={BHistórico} alt="Botão abrir e fechar" />
          </button>
          
        </div>

      </section>

      <button className={styles.buttonSair} onClick={() => {navigate("/");}}>
        <img src={BSair} alt="Botão sair" />
      </button>
    </nav>
  );
}

export default NaveBar;
