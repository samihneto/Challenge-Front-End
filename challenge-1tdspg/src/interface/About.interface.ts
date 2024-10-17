import { StaticImageData } from 'next/image';

export interface IPropsCardAbout {
  image: StaticImageData; // Manter StaticImageData para imagens importadas
  name: string;
  rm: string;
  urlGithub: string;
  urlInstagram: string;
  urlLinkedin: string;
}