import styles from './styles.module.css';
import logoMV from "../../img/header/logo_mv.png";
import chatIcon from "../../img/header/chat.png";

export default function Header() {
    return (
        <header className={styles.cabecalho}>
            <img className={styles.logo} src={logoMV} alt="Logotipo do Mecânico Virtual" />
            <nav className={styles.navegacao}>
                <ul className={styles.paginas}>
                    <li><a className={styles.link} href="/">HOME</a></li>
                    <li><a className={styles.link} href="/mv">MV</a></li>
                    <li><a className={styles.link} href="/agenda">AGENDAR</a></li>
                    <li><a className={styles.link} href="/about">SOBRE NÓS</a></li>
                </ul>
            </nav>
            <input type="text" className={styles.procurar} placeholder="O quê você procura?" />
            <img src={chatIcon} alt="Imagem de Chat" />
        </header>
    );
}