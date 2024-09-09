import styles from './styles.module.css'
import andre from "../../img/content/about/andre.jpg";
import levy from "../../img/content/about/levy.jpg";
import samir from "../../img/content/about/samir.jpg";
import repository from "../../img/content/about/repository.png";
import twitterIcon from "../../img/content/about/twitter-preto.png";
import instagramIcon from "../../img/content/about/instagram-preto.png";
import linkedinIcon from "../../img/content/about/linkedin-preto.png";
import githubIcon from "../../img/content/about/github.png";

export default function About() {
    return (
        <main className={styles.about}>
            <h1 className={styles.about__titulo}>Sobre nós</h1>

            <section className={styles.caixa__um}>
                <img className={styles.about__img} src={andre} alt="Foto de André" />
                <h2 className={styles.about__nome}>ANDRÉ GERALDI MARCOLONGO</h2>
                <h3 className={styles.about__rm}>RM555285</h3>
                <div className={styles.caixa__icones}>
                    <a href=""><img className={styles.icones} src={twitterIcon} alt="Ícone Twitter" /></a>
                    <a href=""><img className={styles.icones} src={instagramIcon} alt="Ícone Instagram" /></a>
                    <a href=""><img className={styles.icones} src={linkedinIcon} alt="Ícone Linkedin" /></a>
                    <a href="https://github.com/andremarko" target="_blank"><img className={styles.icones} src={githubIcon} alt="Ícone Github" /></a>
                </div>
            </section>

            <section className={styles.caixa__dois}>
                <img className={styles.about__img} src={levy} alt="Foto de Felipe Levy" />
                <h2 className={styles.about__nome}>FELIPE LEVY STEPHENS FYDELIX</h2>
                <h3 className={styles.about__rm}>RM556426</h3>
                <div className={styles.caixa__icones}>
                    <a href=""><img className={styles.icones} src={twitterIcon} alt="Ícone Twitter" /></a>
                    <a href=""><img className={styles.icones} src={instagramIcon} alt="Ícone Instagram" /></a>
                    <a href=""><img className={styles.icones} src={linkedinIcon} alt="Ícone Linkedin" /></a>
                    <a href="https://github.com/felipe-2833" target="_blank"><img className={styles.icones} src={githubIcon} alt="Ícone Github" /></a>
                </div>
            </section>

            <section className={styles.caixa__tres}>
                <img className={styles.about__img} src={samir} alt="Foto de Samir" />
                <h2 className={styles.about__nome}>SAMIR HAGE NETO</h2>
                <h3 className={styles.about__rm}>RM557260</h3>
                <div className={styles.caixa__icones}>
                    <a href=""><img className={styles.icones} src={twitterIcon} alt="Ícone Twitter" /></a>
                    <a href=""><img className={styles.icones} src={instagramIcon} alt="Ícone Instagram" /></a>
                    <a href=""><img className={styles.icones} src={linkedinIcon} alt="Ícone Linkedin" /></a>
                    <a href="https://github.com/samihneto" target="_blank"><img className={styles.icones} src={githubIcon} alt="Ícone Github" /></a>
                </div>
            </section>

            <section className={styles.caixa__quatro}>
                <img className={styles.about__img} src={repository} alt="Imagem do Repositório" />
                <h2 className={styles.about__nome}>NOSSO REPOSITÓRIO</h2>
                <div className={styles.caixa__icones}>
                    <a href="https://github.com/samihneto/Challenge-Front-End" target="_blank"><img className={styles.icones} src={githubIcon} alt="Ícone GitHub" /></a>
                </div>
            </section>
        </main>
    )
}