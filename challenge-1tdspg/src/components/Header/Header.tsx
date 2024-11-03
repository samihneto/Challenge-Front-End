import Image from 'next/image'; 
import logoMV2 from "@/assets/imgs/header/logo_mv2.png";
import Chat from '../Chat/Chat';
import Entry from '../Entry/Entry';
import Link from 'next/link';

export default function Header() {
    return (
        <header className="flex items-center justify-center gap-x-12 gap-y-24 p-4 bg-[#00102c] w-full">
            <Image className="w-52" src={logoMV2} alt="Logotipo do Mecânico Virtual" width={208} height={50} />
            <nav className='flex items-center'>
                <ul className="flex space-x-4 ">
                    <li>
                        <Link href="/" className="text-white text-2xl font-sans no-underline hover:font-semibold w-20 flex justify-center items-center">
                            HOME
                        </Link>
                    </li>
                    <li>
                        <Link href="/agenda" className="text-white text-2xl font-sans no-underline hover:font-semibold w-20 flex justify-center items-center">
                            MV
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" className="text-white text-2xl font-sans no-underline hover:font-semibold w-36 flex justify-center items-center">
                            SOBRE NÓS
                        </Link>
                    </li>
                    <li>
                        <Link href="/chamados" className="text-white text-2xl font-sans no-underline hover:font-semibold w-36 flex justify-center items-center">
                            CHAMADOS
                        </Link>
                    </li>
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
