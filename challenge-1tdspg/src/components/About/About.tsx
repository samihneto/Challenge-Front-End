import { IPropsCardAbout } from '../../interface/About.interface'
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
      { image: andre, name: "André Geraldi Marcolongo", rm: "rm555285", urlGithub: "https://github.com/andremarko", urlInstagram: "", urlLinkedin: "https://www.linkedin.com/in/andrem7/" },
      { image: levy, name: "Felipe Levy Stephens Fidelix", rm: "rm556426", urlGithub: "https://github.com/felipe-2833", urlInstagram: "", urlLinkedin: "https://www.linkedin.com/in/felipe-fidelix-316980264/" },
      { image: samir, name: "Samir Hage Neto", rm: "rm557260", urlGithub: "https://github.com/samihneto", urlInstagram: "", urlLinkedin: "https://www.linkedin.com/in/samir-neto/" },
    ]
  
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
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
      <main>
        <h1>Sobre nós</h1>
        <p>
          Nós somos uma equipe criada na Instituição FIAP Paulista, composta por alunos dedicados ao estudo e ao progresso de novas tecnologias.
          <br />
          O nosso foco como equipe é trazer soluções rápidas e de boa acessibilidade para nossos clientes, sempre buscando por conhecer novos caminhos
          e interagir com novas pessoas.
          <br />
          Sinta-se livre para nos comunicar, caso interessados em nossos serviços!
        </p>
        <div style={{ width: '100%', overflow: 'hidden' }}>
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