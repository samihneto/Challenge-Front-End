import { IPropsCardAbout } from '../../interface/About.interface'
import styles from './styles.module.css'
import samir from '../../img/content/about/samir.jpg'
import levy from '../../img/content/about/levy.jpg'
import andre from '../../img/content/about/andre.jpg'
// import repo from '../../img/content/about/repository.png'
import CardAbout from '../CardAbout/CardAbout'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'

export default function About() {
    const membros: IPropsCardAbout[] = [
      { image: andre, name: "André Geraldi Marcolongo", rm: "rm555285", urlGithub: "https://www.google.com/", urlInstagram: "", urlLinkedin: "" },
      { image: levy, name: "Felipe Levy Stephens Fidelix", rm: "rm556426", urlGithub: "https://www.youtube.com/", urlInstagram: "", urlLinkedin: "" },
      { image: samir, name: "Samir Hage Neto", rm: "rm557260", urlGithub: "", urlInstagram: "", urlLinkedin: "" },
    ]
  
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1, // Deixe como 1 se você deseja que apareça um card por vez
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
  
    return (
      <main className={styles.about}>
        <h1 className={styles.about__titulo}>Sobre nós</h1>
        <div style={{ width: '100%', overflow: 'hidden' }}> {/* Remove overflow extra */}
          <Slider {...settings}>
            {membros.map((membro: IPropsCardAbout, index: number) => {
              return (
                <div key={index}>
                  <CardAbout
                    image={membro.image}
                    name={membro.name}
                    rm={membro.rm}
                    urlInstagram={membro.urlInstagram}
                    urlLinkedin={membro.urlLinkedin}
                    urlGithub={membro.urlGithub}
                  />
                </div>
              );
            })}
          </Slider>
        </div>
      </main>
    );
  }