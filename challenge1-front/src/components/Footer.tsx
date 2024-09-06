import "../styles/footer.css";
import instagram from "../img/footer/redes/instagram.png";
import tiktok from "../img/footer/redes/tiktok.png";
import facebook from "../img/footer/redes/facebook.png";
import linkedin from "../img/footer/redes/linkedin.png";
import youtube from "../img/footer/redes/youtube.png";
import twitter from "../img/footer/redes/twitter.png";
import portoLogo from "../img/footer/porto_logo.png";
import googlePlay from "../img/footer/googleplay.png";
import appStore from "../img/footer/appstore.png";
import telefoneIcon from "../img/footer/icones_contato/telefone.png";
import siteIcon from "../img/footer/icones_contato/site.png";
import emailIcon from "../img/footer/icones_contato/email.png";

export default function Footer() {
    return (
        <footer className="rodape">
            <img className="rodape__logo" src={portoLogo} alt="Logotipo da Porto Seguro" />
            <img className="rodape__play" src={googlePlay} alt="Imagem da Google Play" />
            <img className="rodape__app" src={appStore} alt="Imagem da App Store" />

            <div className="redes__sociais">
                <h2 className="redes__titulo">REDES SOCIAIS</h2>
                <div className="redes__icones">
                    <ul>
                        <li>
                            <a href="">
                                <img src={instagram} alt="Icone do Instagram" />
                            </a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <a href="">
                                <img src={tiktok} alt="Icone do Tiktok" />
                            </a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <a href="">
                                <img src={facebook} alt="Icone do Facebook" />
                            </a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <a href="">
                                <img src={linkedin} alt="Icone do Linkedin" />
                            </a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <a href="">
                                <img src={youtube} alt="Icone do Youtube" />
                            </a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <a href="">
                                <img src={twitter} alt="Icone do Twitter" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="contatos">
                <div className="contatos__telefone">
                    <img src={telefoneIcon} alt="Icone de Telefone" />
                    <h3 className="texto__telefone">(11) 99999-9999</h3>
                </div>
                <div className="contatos__site">
                    <img src={siteIcon} alt="Icone de Informação" />
                    <h3 className="texto__site">wwww.exemplo.com.br</h3>
                </div>
                <div className="contatos__email">
                    <img src={emailIcon} alt="Icone de Envelope" />
                    <h3 className="texto__email">exemplo@gmail.com</h3>
                </div>
            </div>
        </footer>
    );
}