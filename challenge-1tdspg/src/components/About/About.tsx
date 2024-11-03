"use client"; // Adiciona esta linha para marcar o componente como Client-side

import dynamic from 'next/dynamic';
import { StaticImageData } from 'next/image';
import samir from '@/assets/imgs/content/about/samir.jpg';
import levy from '@/assets/imgs/content/about/levy.jpg';
import andre from '@/assets/imgs/content/about/andre.jpg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CardAbout from '../CardAbout/CardAbout';

// Carregar o Slider dinamicamente para evitar erros no SSR
const Slider = dynamic(() => import('react-slick'), { ssr: false });

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
      urlInstagram: '.',
      urlLinkedin: 'https://www.linkedin.com/in/andrem7/',
    },
    {
      image: levy,
      name: 'Felipe Levy Stephens Fidelix',
      rm: 'rm556426',
      urlGithub: 'https://github.com/felipe-2833',
      urlInstagram: '.',
      urlLinkedin: 'https://www.linkedin.com/in/felipe-fidelix-316980264/',
    },
    {
      image: samir,
      name: 'Samir Hage Neto',
      rm: 'rm557260',
      urlGithub: 'https://github.com/samihneto',
      urlInstagram: '.',
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
    <main className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 mt-14 mb-24">
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
