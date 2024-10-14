import Image, { StaticImageData } from 'next/image';
import samir from '../../public/samir.jpg';
import levy from '../../public/levy.jpg';
import andre from '../../public/andre.jpg';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface IPropsCardAbout {
  image: StaticImageData;
  name: string;
  rm: string;
  urlGithub: string;
  urlInstagram: string;
  urlLinkedin: string;
}

export default function About() {
  const membros: IPropsCardAbout[] = [
    {
      image: andre,
      name: 'André Geraldi Marcolongo',
      rm: 'rm555285',
      urlGithub: 'https://github.com/andremarko',
      urlInstagram: '',
      urlLinkedin: 'https://www.linkedin.com/in/andrem7/',
    },
    {
      image: levy,
      name: 'Felipe Levy Stephens Fidelix',
      rm: 'rm556426',
      urlGithub: 'https://github.com/felipe-2833',
      urlInstagram: '',
      urlLinkedin: 'https://www.linkedin.com/in/felipe-fidelix-316980264/',
    },
    {
      image: samir,
      name: 'Samir Hage Neto',
      rm: 'rm557260',
      urlGithub: 'https://github.com/samihneto',
      urlInstagram: '',
      urlLinkedin: 'https://www.linkedin.com/in/samir-neto/',
    },
  ];

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
    <main className="w-full max-w-screen-lg mx-auto mb-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-white text-center font-extrabold text-5xl mt-5 sm:text-4xl md:text-6xl lg:text-7xl">
        Sobre nós
      </h1>
      <p className="text-white text-lg font-light mt-4 mb-8 text-center sm:text-base md:text-lg lg:text-xl">
        Nós somos uma equipe criada na Instituição FIAP Paulista, composta por
        alunos dedicados ao estudo e ao progresso de novas tecnologias. O nosso
        foco como equipe é trazer soluções rápidas e de boa acessibilidade para
        nossos clientes, sempre buscando por conhecer novos caminhos e interagir
        com novas pessoas. Sinta-se livre para nos comunicar, caso interessados
        em nossos serviços!
      </p>
      <div className="w-full overflow-hidden">
        <Slider {...settings}>
          {membros.map((membro, index) => (
            <div key={index} className="flex justify-center">
              <div className="text-center">
                <Image
                  src={membro.image}
                  alt={membro.name}
                  width={200}
                  height={200}
                  className="rounded-full mx-auto"
                />
                <h2 className="text-white mt-4 font-semibold text-xl md:text-2xl lg:text-3xl">
                  {membro.name}
                </h2>
                <p className="text-white text-sm md:text-base">{membro.rm}</p>
                <div className="mt-2 space-x-4">
                  {membro.urlGithub && (
                    <a
                      href={membro.urlGithub}
                      className="text-blue-500 hover:text-blue-300"
                    >
                      GitHub
                    </a>
                  )}
                  {membro.urlLinkedin && (
                    <a
                      href={membro.urlLinkedin}
                      className="text-blue-500 hover:text-blue-300"
                    >
                      LinkedIn
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </main>
  );
}
