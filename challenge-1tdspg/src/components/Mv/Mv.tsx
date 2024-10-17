import Image from 'next/image';
import ferramentaImg from "../imgs/content/mv/tools.png";
import cameraIcon from "../imgs/content/mv/camera.png";
import fileIcon from "../imgs/content/mv/file.png";

export default function Mv() {
    return (
        <main className="p-4 flex flex-col items-center">
            <div className="flex flex-col items-center mb-8">
                <Image 
                    className="w-24 mb-4" 
                    src={ferramentaImg} 
                    alt="Ilustração de uma ferramenta" 
                />
                <h1 className="font-bold text-5xl text-[#001A47]">Mecânico Virtual</h1>
            </div>
            <section className="bg-white rounded-lg shadow-lg p-6 w-4/5">
                <p className="mb-4 text-lg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nunc lectus, pharetra scelerisque suscipit sed, pellentesque at metus. Proin in sapien sed quam egestas vestibulum tempor gravida elit. Curabitur arcu enim, placerat eget ex at, porttitor commodo urna. Duis ex diam, pretium eget pulvinar et, accumsan at velit. Vestibulum gravida ultrices tincidunt. Morbi ac sem diam. Etiam rutrum felis sed leo finibus imperdiet. Maecenas lacus magna, egestas non vehicula ac, hendrerit at ex. Donec blandit auctor arcu. Suspendisse mattis nibh sed pharetra commodo. Cras quis elit at ante elementum sodales. Donec consequat faucibus convallis.
                </p>
                <p className="mb-4 text-lg">
                    Donec consequat faucibus convallis. Vivamus quam justo, vulputate in diam nec, cursus commodo ipsum. Ut lobortis vulputate libero vitae aliquam. Morbi porttitor consequat malesuada.
                </p>
                <div className="flex items-center">
                    <input 
                        type="text" 
                        className="border rounded-full p-3 w-full shadow-md mr-2" 
                        placeholder="Digite sua mensagem..." 
                    />
                    <a className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full">
                        <Image 
                            src={cameraIcon} 
                            alt="Ícone câmera" 
                            width={24} 
                            height={24} 
                        />
                    </a>
                    <a className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full ml-2">
                        <Image 
                            src={fileIcon} 
                            alt="Ícone arquivo" 
                            width={24} 
                            height={24} 
                        />
                    </a>
                </div>
            </section>
        </main>
    );
}
