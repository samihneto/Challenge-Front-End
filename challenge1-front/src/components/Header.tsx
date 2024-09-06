import "../styles/header.css";
import logoMV from "../img/header/logo_mv.png";
import chatIcon from "../img/header/chat.png";

export default function Header() {
    return (
        <header className="cabecalho">
            <img className="logo" src={logoMV} alt="Logotipo do Mecânico Virtual" />
            <nav className="navegacao">
                <ul className="paginas">
                    <li><a className="link" href="/">HOME</a></li>
                    <li><a className="link" href="/mv">MV</a></li>
                    <li><a className="link" href="/agenda">AGENDAR</a></li>
                    <li><a className="link" href="/about">SOBRE NÓS</a></li>
                </ul>
            </nav>
            <input type="text" className="procurar" placeholder="O quê você procura?" />
            <img src={chatIcon} alt="Imagem de Chat" />
        </header>
    );
}