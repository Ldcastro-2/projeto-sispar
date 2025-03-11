import {useNavigate} from "react-router-dom";
import Capa from "../../assets/Tela Login/Img-login.png";
import Logo from "../../assets/Tela Login/Logo-WS.png";
import styles from "./Login.module.scss";

function Login() {

  const navigate =  useNavigate()

  const irParaReembolsos = () => {
    navigate("/reembolso")
  }



  return (
    <main className={styles.mainLogin}>
      <section className={styles.containerLogin}>
        <img src={Capa} alt="Foto de um navio cargueiro" />
      </section>

      <section className={styles.containerForm}>
        <div className={styles.boxLogo}>
          <img src={Logo} alt="Logo da wilson Sons" />
          <h1>Boas vindas ao Novo Portal Sispar</h1>

          <p className={styles.pLoging}>Sistema de emissão de Boletos e Parcelamento</p>
        </div>

        <form className={styles.fromLogin} action="">
          <input type="email" name="email" id="email" placeholder="Email" />

          <input
            type="password" name="passsword" id="password" placeholder="Senha"/>
            <a href="a" className={styles.forgotPassword}>Esqueci minha senha</a>

          <div className= {styles.boxButton}>

            <button onClick={irParaReembolsos} className={styles.buttonPrimary} >Entrar</button>
            <button className={styles.buttonSecondary}>Criar Conta</button>
            
          </div>
        </form>
      </section>
    </main>
  );
}

export default Login;
