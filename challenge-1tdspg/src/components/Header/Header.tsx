import Image from 'next/image'; // Importa o componente Image do Next.js
import logoMV2 from "../../imgs/header/logo_mv2.png";
import Chat from '../Chat/Chat';
import Entry from '../Entry/Entry';

export default function Header() {
    return (
        <header className="flex items-center justify-center gap-24 p-4 bg-[#00102c] w-full">
            <Image className="w-52" src={logoMV2} alt="Logotipo do Mecânico Virtual" width={208} height={50} />
            <nav>
                <ul className="flex gap-12">
                    <li><a className="text-white text-2xl font-sans no-underline" href="/">HOME</a></li>
                    <li><a className="text-white text-2xl font-sans no-underline" href="/agenda">MV</a></li>
                    <li><a className="text-white text-2xl font-sans no-underline" href="/about">SOBRE NÓS</a></li>
                </ul>
            </nav>
            <input 
                type="text" 
                className="border-2 border-white bg-[#00102c] text-white rounded-full w-96 h-12 pl-5 font-sans text-sm focus:outline-none" 
                placeholder="O quê você procura?" 
            />
            <Entry />
            <Chat />
        </header>
    );
}
