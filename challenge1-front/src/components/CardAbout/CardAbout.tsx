import styles from './styles.module.css'
import instagramIcon from "../../img/content/about/instagram-preto.png";
import linkedinIcon from "../../img/content/about/linkedin-preto.png";
import githubIcon from "../../img/content/about/github.png";
import { IPropsCardAbout } from '../../interface/About.interface';


export default function CardAbout(props: IPropsCardAbout) {
    
    return (
        <section className={styles.caixa__um}>
            <img className={styles.about__img} src={props.image} alt="" />
            <h2 className={styles.about__nome}>{props.name}</h2>
            <h3 className={styles.about__rm}>{props.rm}</h3>
            <div className={styles.caixa__icones}>
                <a href={props.urlInstagram}><img className={styles.icones} src={instagramIcon} alt="Ícone Instagram" /></a>
                <a href={props.urlLinkedin}><img className={styles.icones} src={linkedinIcon} alt="Ícone Linkedin" /></a>
                <a href={props.urlGithub} target="_blank"><img className={styles.icones} src={githubIcon} alt="Ícone Github" /></a>
            </div>
        </section>
    )
}