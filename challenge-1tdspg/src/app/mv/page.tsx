import ferramentaImg from "../img/content/mv/tools.png";
import cameraIcon from "../img/content/mv/camera.png";
import fileIcon from "../img/content/mv/file.png";

export default function Mecv() {
    return (
        <div>
            <main className="mv">
                <div className="parte_superior">
                    <img className="mv__ferramenta" src={ferramentaImg} alt="Ilustração de uma ferramenta" />
                    <h1 className="mv__titulo">Mecânico Virtual</h1>
                </div>
                <section className="bot_box">
                    <p className="txt__bot">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nunc lectus, pharetra scelerisque suscipit sed, pellentesque at metus. Proin in sapien sed quam egestas vestibulum tempor gravida elit. Curabitur arcu enim, placerat eget ex at, porttitor commodo urna. Duis ex diam, pretium eget pulvinar et, accumsan at velit. Vestibulum gravida ultrices tincidunt. Morbi ac sem diam. Etiam rutrum felis sed leo finibus imperdiet. Maecenas lacus magna, egestas non vehicula ac, hendrerit at ex. Donec blandit auctor arcu. Suspendisse mattis nibh sed pharetra commodo. Cras quis elit at ante elementum sodales. Donec consequat faucibus convallis.
                    </p>
                    <p className="txt__user">
                        Donec consequat faucibus convallis. Vivamus quam justo, vulputate in diam nec, cursus commodo ipsum. Ut lobortis vulputate libero vitae aliquam. Morbi porttitor consequat malesuada.
                    </p>
                    <div className="bot__chat">
                        <input type="text" className="bot__input" placeholder="Digite sua mensagem..." />
                        <a className="bot__btn">
                            <img src={cameraIcon} alt="Ícone câmera" />
                        </a>
                        <a className="bot__btn">
                            <img src={fileIcon} alt="Ícone arquivo" />
                        </a>
                    </div>
                </section>
            </main>
        </div>
    )
}