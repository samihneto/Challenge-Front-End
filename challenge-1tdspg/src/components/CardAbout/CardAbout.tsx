import { IPropsCardAbout } from '../../interface/About.interface';
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';

export default function CardAbout(props: IPropsCardAbout) {
  return (
    <section className="flex flex-col md:flex-row justify-around items-center text-center bg-white w-full p-8 border-l-2 border-r-2 border-gray-300 rounded-2xl">
      <img className="w-1/6 md:w-1/12 rounded-full" src={props.image} alt={props.name} />
      <div className="flex flex-col items-center">
        <h2 className="font-teko text-3xl md:text-4xl text-blue-900 truncate">{props.name}</h2>
        <h3 className="font-teko text-sm md:text-lg text-blue-900">{props.rm}</h3>
      </div>
      <div className="flex gap-4 mt-4 md:mt-0">
        <a href={props.urlInstagram}>
          <FaInstagram className="text-blue-900 text-4xl md:text-5xl" />
        </a>
        <a href={props.urlLinkedin}>
          <FaLinkedin className="text-blue-900 text-4xl md:text-5xl" />
        </a>
        <a href={props.urlGithub} target="_blank">
          <FaGithub className="text-blue-900 text-4xl md:text-5xl" />
        </a>
      </div>
    </section>
  );
}
