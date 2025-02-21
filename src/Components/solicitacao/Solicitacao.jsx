import NaveBar from "../navebar/NaveBar.jsx";
import Home from "../../assets/Dashboard/Home-Header.png";
import Vector from "../../assets/Dashboard/Vector.png";
import Seta from "../../assets/Dashboard/Vector.png";
import styles from "./Solicitacao.module.scss";

function solicitacao() {
  return (
    <div className={styles.layoutSolicitacao}>
      <NaveBar />

      <div className={styles.containerPrincipalSolicitacao}>


        <header className={styles.headerSolicitacao}>
          <img src={Home} alt="vetor de uma casinha " />
          <img src={Vector} alt="vetor de uma setinha" />
          <p>Reembolsos</p>
          <img src={Seta} alt="Svetor de uma seta" />
          <p>Solicitação De Reembolso</p>
        </header>
        
      </div>

      <main className={styles.mainSolicitacao}>

        <form action="" className={styles.formSolicitacao}>

          <div className={styles.grupo1}>
            
            <div className={styles.inputNome}>
              <label htmlFor="">Nome Completo</label>
              <input type="text" name="" id="nome completo" />
            </div>

            <div className={styles.inputEmpresa}>
              <label htmlFor="">Empresa</label>
              <input type="text" name="" id="empresa" />
            </div>

            <div className={styles.inputPrestacao}>
              <label htmlFor="">Nº Prestação de Contas</label>
              <input type="text" name="" id="prestacao-contas" />
            </div>

            <div className={styles.inputMotivo}>
              <label htmlFor="">Descrição/Motivo do Reembolso</label>
              <input type="text" name="" id="Descrição/Motivo" />
            </div>
          </div>

          <div className={styles.barraVertical}></div>

          <div className={styles.grupo2}></div>

          <div className={styles.inputData}>
            <label htmlFor="">Data</label>
            <input type="date" name="" id="" />
          </div>

          <div className={styles.despesas}>
            <select name="" id=""></select>
            <option value="">Selecione</option>
            <option value="">Alimentação</option>
            <option value="">Combustível</option>
            <option value="">Condução</option>
            <option value="">Estacionamento</option>
            <option value="">Viagem admin.</option>
            <option value="">Vaigem Operacional</option>
            <option value="">Eventos de representação</option>
          </div>

        </form>

        
      </main>
    </div>
  );
}

export default solicitacao;
