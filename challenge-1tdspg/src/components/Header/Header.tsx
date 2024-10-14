import logoMV2 from "../../img/header/logo_mv2.png";
import Chat from '../Chat/Chat';
import Entry from '../Entry/Entry';

export default function Header() {
    return (
        <header>
            <img src={logoMV2} alt="Logotipo do Mecânico Virtual" />
            <nav>
                <ul>
                    <li><a href="/">HOME</a></li>
                    {/* <li><a className={styles.link} href="/mv">MV</a></li> */}
                    <li><a href="/agenda">MV</a></li>
                    <li><a href="/about">SOBRE NÓS</a></li>
                </ul>
            </nav>
            <input type="text" placeholder="O quê você procura?"  />
            <Entry />
            <Chat />
        </header>
        
    );
}