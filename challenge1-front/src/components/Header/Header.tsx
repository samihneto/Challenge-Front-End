import styles from './styles.module.css';
import logoMV2 from "../../img/header/logo_mv2.png";
import Chat from '../Chat/Chat';
import Entry from '../Entry/Entry';

export default function Header() {
    return (
        <header className={styles.cabecalho}>
            <img className={styles.logo} src={logoMV2} alt="Logotipo do Mecânico Virtual" />
            <nav className={styles.navegacao}>
                <ul className={styles.paginas}>
                    <li><a className={styles.link} href="/">HOME</a></li>
                    {/* <li><a className={styles.link} href="/mv">MV</a></li> */}
                    <li><a className={styles.link} href="/agenda">MV</a></li>
                    <li><a className={styles.link} href="/about">SOBRE NÓS</a></li>
                </ul>
            </nav>
            <input type="text" className={styles.procurar} placeholder="O quê você procura?"  />
            <Entry />
            <Chat />
        </header>
        
    );
}