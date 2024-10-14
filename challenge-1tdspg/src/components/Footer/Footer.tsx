import portoLogo from "../../img/footer/porto_logo.png";
import googlePlay from "../../img/footer/googleplay.png";
import appStore from "../../img/footer/appstore.png";
import telefoneIcon from "../../img/footer/icones_contato/telefone.png";
import siteIcon from "../../img/footer/icones_contato/site.png";
import emailIcon from "../../img/footer/icones_contato/email.png";
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer>
            <img src={portoLogo} alt="Logotipo da Porto Seguro" />
            <img src={googlePlay} alt="Imagem da Google Play" />
            <img src={appStore} alt="Imagem da App Store" />

            <div>
                <h2>REDES SOCIAIS</h2>
                <div>
                    <ul>
                        <li>
                            <a href="">
                                <FaInstagram />
                            </a>
                        </li>
                    </ul>
                    {/* <ul>
                        <li>
                            <a href="">
                                <img src={tiktok} alt="Icone do Tiktok" />
                            </a>
                        </li>
                    </ul> */}
                    {/* <ul>
                        <li>
                            <a href="">
                                <img src={facebook} alt="Icone do Facebook" />
                            </a>
                        </li>
                    </ul> */}
                    <ul>
                        <li>
                            <a href="">
                                <FaLinkedin  />
                            </a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <a href="">
                                <FaGithub />
                            </a>
                        </li>
                    </ul>
                    {/* <ul>
                        <li>
                            <a href="">
                                <img src={twitter} alt="Icone do Twitter" />
                            </a>
                        </li>
                    </ul> */}
                </div>
            </div>

            <div>
                <div>
                    <img src={telefoneIcon} alt="Icone de Telefone" />
                    <h3>(11) 99999-9999</h3>
                </div>
                <div>
                    <img src={siteIcon} alt="Icone de Informação" />
                    <h3>wwww.exemplo.com.br</h3>
                </div>
                <div>
                    <img src={emailIcon} alt="Icone de Envelope" />
                    <h3>exemplo@gmail.com</h3>
                </div>
            </div>
        </footer>
    );
}