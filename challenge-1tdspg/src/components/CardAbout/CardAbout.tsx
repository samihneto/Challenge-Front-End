import Image, { StaticImageData } from 'next/image';
import Link from 'next/link'; // Importa o componente Link do Next.js
import { IPropsCardAbout } from '@/interface/About.interface';
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';

export default function CardAbout(props: IPropsCardAbout) {
  return (
    <section className="flex flex-col md:flex-row justify-around items-center text-center bg-white w-full p-8 border-l-2 border-r-2 border-gray-300 rounded-2xl my-6">
      <Image
        className="w-1/6 md:w-2/12 rounded-full"
        src={props.image as unknown as StaticImageData} 
        alt={props.name}
        width={150} 
        height={150} 
      />
      <div className="flex flex-col items-center">
        <h2 className="font-archivo font-bold text-3xl md:text-4xl text-[#00102c] truncate">{props.name}</h2>
        <h3 className="font-teko font-bold text-sm md:text-lg text-[#00102c]">{props.rm}</h3>
      </div>
      <div className="flex gap-4 mt-4 md:mt-0">
        {props.urlInstagram && (
          <Link href={props.urlInstagram} target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-[#00102c] text-4xl md:text-5xl" />
          </Link>
        )}
        {props.urlLinkedin && (
          <Link href={props.urlLinkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-[#00102c] text-4xl md:text-5xl" />
          </Link>
        )}
        {props.urlGithub && (
          <Link href={props.urlGithub} target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-[#00102c] text-4xl md:text-5xl" />
          </Link>
        )}
      </div>
    </section>
  );
}
