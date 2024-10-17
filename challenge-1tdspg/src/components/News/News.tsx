import Image from 'next/image'; // Importa o componente Image do Next.js
import mecanico from '../../imgs/content/news/mecanico.webp';

export default function News() {
    return (
        <section className="flex flex-col lg:flex-row items-start justify-center bg-white p-16 shadow-lg rounded-lg gap-10 w-11/12 lg:w-4/4 mx-auto my-16">
            <div className="flex-shrink-0">
                <Image 
                    className="rounded-lg" 
                    src={mecanico} 
                    alt="Imagem de mecânico" 
                    width={600} 
                    height={400} 
                />
            </div>
            <div className="flex flex-col justify-start w-full max-w-lg">
                <h1 className="text-[#001A47] font-bold text-5xl mb-2">O Projeto</h1>
                <hr className="mb-4" />
                <p className="text-[#001A47] font-medium text-lg mb-4">
                    O Projeto Mecânico Virtual é uma iniciativa criada com o intuito de facilitar o acesso de clientes da Porto Seguro
                    à serviços de mecânica. O intuito do nosso Bot é criar uma fácil identificação do problema e o grau de seriedade para
                    assim poder dar uma resposta rápida e segura ao nosso cliente.
                    <br />
                    Os serviços do MV variam desde a identificação do problema quanto para encontrar o mecânico mais próximo e agendar sua
                    consulta o mais rápido possível!
                </p>
                <a href="/agenda">
                    <button className="bg-[#001A47] text-white font-jura text-base rounded-lg w-48 h-12 hover:scale-110 transition-transform duration-300">
                        Comece uma consulta
                    </button>
                </a>
            </div>
        </section>
    );
}
