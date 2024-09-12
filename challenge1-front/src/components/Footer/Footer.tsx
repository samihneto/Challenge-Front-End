import styles from './styles.module.css'
import portoLogo from "../../img/footer/porto_logo.png";
import googlePlay from "../../img/footer/googleplay.png";
import appStore from "../../img/footer/appstore.png";
import telefoneIcon from "../../img/footer/icones_contato/telefone.png";
import siteIcon from "../../img/footer/icones_contato/site.png";
import emailIcon from "../../img/footer/icones_contato/email.png";
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className={styles.rodape}>
            <img className={styles.rodape__logo} src={portoLogo} alt="Logotipo da Porto Seguro" />
            <img className={styles.rodape__play} src={googlePlay} alt="Imagem da Google Play" />
            <img className={styles.rodape__app} src={appStore} alt="Imagem da App Store" />

            <div className={styles.redes__sociais}>
                <h2 className={styles.redes__titulo}>REDES SOCIAIS</h2>
                <div className={styles.redes__icones}>
                    <ul>
                        <li>
                            <a href="">
                                <FaInstagram className={styles.icones}  />
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
                                <FaLinkedin className={styles.icones}  />
                            </a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <a href="">
                                <FaGithub className={styles.icones}  />
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

            <div className={styles.contatos}>
                <div className={styles.contatos__telefone}>
                    <img src={telefoneIcon} alt="Icone de Telefone" />
                    <h3 className={styles.texto__telefone}>(11) 99999-9999</h3>
                </div>
                <div className={styles.contatos__site}>
                    <img src={siteIcon} alt="Icone de Informação" />
                    <h3 className={styles.texto__site}>wwww.exemplo.com.br</h3>
                </div>
                <div className={styles.contatos__email}>
                    <img src={emailIcon} alt="Icone de Envelope" />
                    <h3 className={styles.texto__email}>exemplo@gmail.com</h3>
                </div>
            </div>
        </footer>
    );
}