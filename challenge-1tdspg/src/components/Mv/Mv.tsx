import ferramentaImg from "../img/content/mv/tools.png";
import cameraIcon from "../img/content/mv/camera.png";
import fileIcon from "../img/content/mv/file.png";

export default function Mv() {
    return (
        <main>
            <div>
                <img src={ferramentaImg} alt="Ilustração de uma ferramenta" />
                <h1>Mecânico Virtual</h1>
            </div>
            <section>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nunc lectus, pharetra scelerisque suscipit sed, pellentesque at metus. Proin in sapien sed quam egestas vestibulum tempor gravida elit. Curabitur arcu enim, placerat eget ex at, porttitor commodo urna. Duis ex diam, pretium eget pulvinar et, accumsan at velit. Vestibulum gravida ultrices tincidunt. Morbi ac sem diam. Etiam rutrum felis sed leo finibus imperdiet. Maecenas lacus magna, egestas non vehicula ac, hendrerit at ex. Donec blandit auctor arcu. Suspendisse mattis nibh sed pharetra commodo. Cras quis elit at ante elementum sodales. Donec consequat faucibus convallis.
                </p>
                <p>
                    Donec consequat faucibus convallis. Vivamus quam justo, vulputate in diam nec, cursus commodo ipsum. Ut lobortis vulputate libero vitae aliquam. Morbi porttitor consequat malesuada.
                </p>
                <div>
                    <input type="text" placeholder="Digite sua mensagem..." />
                    <a>
                        <img src={cameraIcon} alt="Ícone câmera" />
                    </a>
                    <a>
                        <img src={fileIcon} alt="Ícone arquivo" />
                    </a>
                </div>
            </section>
        </main>
    )
}