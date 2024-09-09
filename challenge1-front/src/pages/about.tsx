import andre from "../img/content/about/andre.jpg";
import levy from "../img/content/about/levy.jpg";
import samir from "../img/content/about/samir.jpg";
import repository from "../img/content/about/repository.png";
import twitterIcon from "../img/content/about/twitter-preto.png";
import instagramIcon from "../img/content/about/instagram-preto.png";
import linkedinIcon from "../img/content/about/linkedin-preto.png";
import githubIcon from "../img/content/about/github.png";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import "../styles/about.css"

export default function About() {
    return (
        <div>
            <Header />
            <main className="about">
                <h1 className="about__titulo">Sobre nós</h1>

                <section className="caixa__um">
                    <img className="about__img" src={andre} alt="Foto de André" />
                    <h2 className="about__nome">ANDRÉ GERALDI MARCOLONGO</h2>
                    <h3 className="about__rm">RM555285</h3>
                    <div className="caixa__icones">
                        <a href=""><img className="icones" src={twitterIcon} alt="Icone Twitter" /></a>
                        <a href=""><img className="icones" src={instagramIcon} alt="Icone Instagram" /></a>
                        <a href=""><img className="icones" src={linkedinIcon} alt="Icone Linkedin" /></a>
                        <a href="https://github.com/andremarko" target="_blank"><img className="icones" src={githubIcon} alt="Icone Github" /></a>
                    </div>
                </section>

                <section className="caixa__dois">
                    <img className="about__img" src={levy} alt="Foto de Felipe Levy" />
                    <h2 className="about__nome">FELIPE LEVY STEPHENS FYDELIX</h2>
                    <h3 className="about__rm">RM556426</h3>
                    <div className="caixa__icones">
                        <a href=""><img className="icones" src={twitterIcon} alt="Icone Twitter" /></a>
                        <a href=""><img className="icones" src={instagramIcon} alt="Icone Instagram" /></a>
                        <a href=""><img className="icones" src={linkedinIcon} alt="Icone Linkedin" /></a>
                        <a href="https://github.com/felipe-2833" target="_blank"><img className="icones" src={githubIcon} alt="Icone Github" /></a>
                    </div>
                </section>

                <section className="caixa__tres">
                    <img className="about__img" src={samir} alt="Foto de Samir" />
                    <h2 className="about__nome">SAMIR HAGE NETO</h2>
                    <h3 className="about__rm">RM557260</h3>
                    <div className="caixa__icones">
                        <a href=""><img className="icones" src={twitterIcon} alt="Icone Twitter" /></a>
                        <a href=""><img className="icones" src={instagramIcon} alt="Icone Instagram" /></a>
                        <a href=""><img className="icones" src={linkedinIcon} alt="Icone Linkedin" /></a>
                        <a href="https://github.com/samihneto" target="_blank"><img className="icones" src={githubIcon} alt="Icone Github" /></a>
                    </div>
                </section>

                <section className="caixa__quatro">
                    <img className="about__img" src={repository} alt="Imagem do Repositório" />
                    <h2 className="about__nome">NOSSO REPOSITÓRIO</h2>
                    <div className="caixa__icones">
                        <a href="https://github.com/samihneto/Challenge-Front-End" target="_blank"><img className="icones" src={githubIcon} alt="Icone GitHub" /></a>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}