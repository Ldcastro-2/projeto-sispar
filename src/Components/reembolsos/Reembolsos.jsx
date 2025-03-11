import styles from "./Reembolsos.module.scss";
import Analises from "../../assets/Dashboard/Análises.png";
import Home from "../../assets/Dashboard/Home-Header.png";
import Vector from "../../assets/Dashboard/Vector.png";
import NumeroAnálises from "../../assets/Dashboard/N-Análises.png";
import NumeroAprovados from "../../assets/Dashboard/N-Aprovados.png";
import NumeroRejeitados from "../../assets/Dashboard/N-Rejeitados.png";
import NumeroSolicitados from "../../assets/Dashboard/N-Solicitados.png";
import Sistema from "../../assets/Dashboard/Sistema-atualizado.png";
import SolicitarHistorico from "../../assets/Dashboard/Solicitar - Histórico.png";
import SolicitarReembolso from "../../assets/Dashboard/Solicitar - Reembolso.png";
import NaveBar from "../navebar/NaveBar.jsx";

function Reembolsos() {
  return (
    <div className={styles.body}>
      <NaveBar />

      <div className={styles.divReembolso}>
      <header className={styles.headerReembolso}>
        <img src={Home} alt="Casa da header" />
        <img src={Vector} alt="Seta da header" />
        <p>Reembolsos</p>
      </header>
      

      <main className={styles.mainReembolsos}>
        
        <h1 className={styles.tituloReembolso}>Sistema de Reembolsos</h1>
        <p className={styles.pReembolso}>
          Solicite novos pedidos de reembolso, visualize solicitações em análise
          e todo o histórico.
        </p>

        <section className={styles.containerCards}>
          <article className={styles.card1}>
            <img src={SolicitarReembolso} alt="" />
            <p>Solicitar Reembolso</p>
          </article>

          <article className={styles.card2}>
            <img src={Analises} alt="" />
            <p>Verificar Análises</p>
          </article>

          <article className={styles.card3}>
            <img src={SolicitarHistorico} alt="" />
            <p>Histórico</p>
          </article>
        </section>

        <section className={styles.containerDados}>
          <div>
            <img className={styles.imgSolicitados} src={NumeroSolicitados}alt=""/>
            <h4>182</h4>
            <p>Solicitados</p>
          </div>  

          <div className={styles.divDadosReembolso}>
            <img className={styles.imgAnalises} src={NumeroAnálises} alt="" />
            <h4>74</h4>
            <p>Em análise</p>
          </div>
    
          <div>
            <img className={styles.imgAprovados} src={NumeroAprovados} alt="" />
            <h4>195</h4>
            <p>Aprovados</p>
          </div>
    
          <div>
            <img className={styles.imgRejeitados} src={NumeroRejeitados} alt=""/>  
            <h4>41</h4>
            <p>Rejeitados</p>
          </div>  
        </section>    

        <section className={styles.containerSistema}>
          <img className={styles.imgSistema} src={Sistema} alt="" />
          <a className={styles.sistemaAtualizado} href="">Sistema atualizado</a>
        </section>  
          
     
      </main>
      </div>
      </div>
    
  );
}

export default Reembolsos;
