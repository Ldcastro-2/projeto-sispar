import NaveBar from "../navebar/NaveBar.jsx";
import Home from "../../assets/Dashboard/Home-Header.png";
import Vector from "../../assets/Dashboard/Vector.png";
import Seta from "../../assets/Dashboard/Vector.png";
import styles from "./Solicitacao.module.scss";
import Mais from "../../assets/Solicitacao/+.png"
import Calendario from "../../assets/Solicitacao/calendario.png"
import Check from "../../assets/Solicitacao/check.png"
import Deletar from "../../assets/Solicitacao/deletar.png"
import Lixeira from "../../assets/Solicitacao/lixeira.png"
import Motivo from "../../assets/Solicitacao/motivo.png"
import SetaBaixa from "../../assets/Solicitacao/seta baixa.png"
import X from "../../assets/Solicitacao/x.png"


function solicitacao() {
  return (
    <div className={styles.layoutSolicitacao}>
      <NaveBar />

      <div className={styles.containerPrincipalSolicitacao}>
        <header className={styles.headerSolicitacao}>
          <img src={Home} alt="Vetor de uma casinha " />
          <img src={Vector} alt="Vetor de uma setinha" />
          <p>Reembolsos</p>
          <img src={Seta} alt="Vetor de uma seta" />
          <p>Solicitação De Reembolso</p>
        </header>

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
                <label htmlFor="">Nº Prest.Contas</label>
                <input type="text" name="" id="prestacao-contas" />
              </div>

              <div className={styles.inputMotivo}>
                <label htmlFor="">Descrição/Motivo do Reembolso</label>
                <input type="text" name="" id="Descrição/Motivo" />
              </div>
            </div>

            <div className={styles.barraVertical}></div>


            <div className={styles.grupo2}>

          
          <div className={styles.inputData}>
                <label htmlFor="">Data</label>
                <input type="date" name="" id="" />
              </div>

              <div className={styles.tipoDeDespesa}>
                <label htmlFor=""> Tipo de Despesa </label>

                <select name="" id="">
                  <option value=""> Selecionar</option>
                  <option value="">Alimentação</option>
                  <option value="">Combustível</option>
                  <option value="">Condução</option>
                  <option value="">Estacionamento</option>
                  <option value="">Viagem Administrativa</option>
                  <option value="">Viagem Operacional</option>
                  <option value="">Eventos de representação</option>
                </select>
              </div>

             
              <div className={styles.Custo}>
                <label htmlFor="">Centro de Custo</label>
                <select className={styles.selectCusto} name="" id="">
                  <option value="">
                    1100109002 - FIN CONTROLES INTERNOS MTZ
                  </option>
                  <option value="">
                    1100110002 - FIN VICE-PRESIDENCIA FINANCAS MTZ
                  </option>
                  <option value="">1100110101 - FIN CONTABILIDADE MTZ</option>
                </select>
            
             

              
            
             <section className={styles.sectionSolicitação}> 
                <div className={styles.inputOrdem}>
                  <label htmlFor="">Ord. Int.</label>
                  <input type="number" name="" id="" />
                </div>

                <div className={styles.inputDivisoes}>
                  <label htmlFor="">Div.</label>
                  <input type="number" name="" id="" />
                </div>

                <div className={styles.inputPep}>
                  <label htmlFor="">PEP.</label>
                  <input type="number" name="" id="" />
                </div>

                <div className={styles.inputMoeda}>
                  <label htmlFor="">Moeda</label>
                  <select name="" id="">
                    <option value="">Selecionar</option>
                    <option value="">BRL</option>
                    <option value="">ARS</option>
                    <option value="">USD</option>
                  </select>
                </div>

                <div className={styles.inputDistancia}>
                  <label htmlFor=""> Distancia / KM</label>
                  <input type="text" />
                </div>

                <div className={styles.inputValorKM}>
                  <label htmlFor="">Valor / KM</label>
                  <input type="number" name="" id="" />
                </div>

                <div className={styles.inputvalorFaturado}>
                  <label htmlFor="">Val. Faturado</label>
                  <input type="number" name="" id="" />
                </div>

                <div className={styles.inputDespesa}>
                  <label htmlFor="">valor</label>
                  <input type="number" name="" id="" />
                </div>

                <div className={styles.botoes}>
                  <button className={styles.botaoSalvar}>Salvar<img className={Mais} src="" alt="" />
                  </button>
                  
                  <button className={styles.botãoDeletar}>Deletar</button>
                </div>
                </section>

              </div>
          

            </div>

          </form>

           {/*tag principal qie vai envolver a tabela */}
          {/*thread é a tag que agrupa o cabeçalho*/}
          {/*tr é a linha da tabela*/}
          {/* tbody agrupa o corpo da tabela*/}
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Colaborador(a)</th>
                <th>Empresa</th>
                <th>Nº Prest.</th>
                <th>Data</th>
                <th>Motivo</th>
                <th>Tipo De Destepas</th>
                <th>CTR. Custos</th>
                <th>Ord. Int.</th>
                <th>Div.</th>
                <th>Pep</th>
                <th>Moeda</th>
                <th>Dis. KM</th>
                <th>val faturado</th>
                <th>Despesa</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td> <img src={Lixeira} alt="ícone da lixeira" /></td>
                <td> Aurora Maria </td>
                <td> IBM</td>
                <td> 24</td>
                <td> 21/02/2025</td>
                <td> <img src={Motivo} alt="" /></td>
                <td> Alimentação</td>
                <td> 200.00</td>
                <td>1</td>
                <td>0</td>
                <td>nada</td>
                <td>BRL</td>
                <td>20km</td>
                <td>0.50</td>
                <td>600.00</td>
                <td>1500.00</td>
              </tr>
            </tbody>
          </table>

        </main>

      </div>

    </div>

  );
}

export default solicitacao;
