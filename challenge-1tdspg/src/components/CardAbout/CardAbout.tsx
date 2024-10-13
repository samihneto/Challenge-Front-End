import styles from './styles.module.css'

import { IPropsCardAbout } from '../../interface/About.interface';
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';


export default function CardAbout(props: IPropsCardAbout) {
    
    return (
        <section className={styles.caixa__um}>
            <img className={styles.about__img} src={props.image} alt="" />
            <h2 className={styles.about__nome}>{props.name}</h2>
            <h3 className={styles.about__rm}>{props.rm}</h3>
            <div className={styles.caixa__icones}>
                <a href={props.urlInstagram}><FaLinkedin className={styles.icones}  /></a>
                <a href={props.urlLinkedin}><FaInstagram className={styles.icones}  /></a>
                <a href={props.urlGithub} target="_blank"><FaGithub className={styles.icones}  /></a>
            </div>
        </section>
    )
}