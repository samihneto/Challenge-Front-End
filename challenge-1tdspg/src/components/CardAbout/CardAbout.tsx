import { IPropsCardAbout } from '../../interface/About.interface';
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';


export default function CardAbout(props: IPropsCardAbout) {
    
    return (
        <section>
            <img src={props.image} alt="" />
            <h2>{props.name}</h2>
            <h3>{props.rm}</h3>
            <div>
                <a href={props.urlInstagram}><FaLinkedin /></a>
                <a href={props.urlLinkedin}><FaInstagram /></a>
                <a href={props.urlGithub} target="_blank"><FaGithub /></a>
            </div>
        </section>
    )
}