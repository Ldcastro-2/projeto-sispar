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

function Reembolsos() {
  return (
    <>
      <header>
        <img src={Home} alt="Casa da header" />
        <img src={Vector} alt="Seta da header" />
        <p>Reembolsos</p>
      </header>

      <main>
        <h1>Sistema de Reembolsos</h1>
        <p>
          Solicite novos pedidos de reembolso, visualize solicitações em análise
          e todo o histórico.{" "}
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
      </main>
    </>
  );
}

export default Reembolsos;
