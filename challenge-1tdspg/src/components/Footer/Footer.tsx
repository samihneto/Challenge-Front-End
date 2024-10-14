import Image from 'next/image'; // Importa o componente Image do Next.js
import portoLogo from "../../img/footer/porto_logo.png";
import googlePlay from "../../img/footer/googleplay.png";
import appStore from "../../img/footer/appstore.png";
import telefoneIcon from "../../img/footer/icones_contato/telefone.png";
import siteIcon from "../../img/footer/icones_contato/site.png";
import emailIcon from "../../img/footer/icones_contato/email.png";
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-[#00102c] flex justify-center items-center p-4 gap-4">
            <Image className="w-24" src={portoLogo} alt="Logotipo da Porto Seguro" width={96} height={24} />
            <Image className="w-60 border-l-2 border-white pl-4" src={googlePlay} alt="Imagem da Google Play" width={240} height={80} />
            <Image className="w-52 pt-2 pb-2 pr-4" src={appStore} alt="Imagem da App Store" width={208} height={80} />

            <div className="flex flex-col items-center border-l-2 border-white pl-4">
                <h2 className="text-white text-2xl mb-2 font-sans">REDES SOCIAIS</h2>
                <div className="flex gap-4">
                    <a href="">
                        <FaInstagram className="text-white text-3xl" />
                    </a>
                    <a href="">
                        <FaLinkedin className="text-white text-3xl" />
                    </a>
                    <a href="">
                        <FaGithub className="text-white text-3xl" />
                    </a>
                </div>
            </div>

            <div className="flex flex-col gap-2 pl-4 border-l-2 border-white">
                <div className="flex items-center gap-2">
                    <Image className="w-5" src={telefoneIcon} alt="Ícone de Telefone" width={20} height={20} />
                    <h3 className="text-white text-sm font-sans">(11) 99999-9999</h3>
                </div>
                <div className="flex items-center gap-2">
                    <Image className="w-5" src={siteIcon} alt="Ícone de Informação" width={20} height={20} />
                    <h3 className="text-white text-sm font-sans">wwww.exemplo.com.br</h3>
                </div>
                <div className="flex items-center gap-2">
                    <Image className="w-5" src={emailIcon} alt="Ícone de Envelope" width={20} height={20} />
                    <h3 className="text-white text-sm font-sans">exemplo@gmail.com</h3>
                </div>
            </div>
        </footer>
    );
}
