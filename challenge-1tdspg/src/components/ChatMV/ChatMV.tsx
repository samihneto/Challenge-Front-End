import Send from '../../imgs/content/agenda/send.png';
import Image from 'next/image';
import Agenda from '../Agenda/Agenda';

export default function ChatMV() {
    return (
        <section className="flex flex-col items-center gap-8 p-10 lg:flex-row lg:gap-12">
            <div className="flex flex-col items-center justify-center gap-6 bg-white p-10 shadow-lg rounded-2xl w-full lg:w-2/3">
                <h1 className="text-4xl lg:text-6xl font-bold text-blue-900">Mecânico Virtual</h1>
                <p className="text-base lg:text-lg font-light text-blue-900 p-5 border-2 border-blue-900 rounded-lg">
                    Morbi non sapien elit. Proin sed mauris eu dolor rhoncus condimentum sit amet quis nisi. Phasellus viverra mauris tempus, mattis purus eu, volutpat dolor. Mauris auctor sapien eu lobortis imperdiet. Quisque id bibendum arcu, ac feugiat ex. Nullam mollis lacus vitae dignissim lacinia. Vivamus et diam urna. Vivamus pellentesque augue tellus, at tincidunt enim scelerisque a. Sed ac interdum leo.
                </p>
                <div className="flex items-center gap-4">
                    <input
                        className="w-full lg:w-96 p-4 rounded-full shadow-md focus:ring-2 focus:ring-blue-600 outline-none"
                        type="text"
                        placeholder="Digite sua mensagem..."
                    />
                    <button className="bg-blue-100 p-3 rounded-full hover:scale-110 transition-transform">
                        <Image src={Send} alt="Enviar" width={32} height={32} />
                    </button>
                </div>
                <Agenda />
            </div>
        </section>
    )
}
