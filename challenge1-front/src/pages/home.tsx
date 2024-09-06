import Footer from "../components/Footer"
import Header from "../components/Header"
import "../styles/home.css"

export default function Home() {
    return (
        <div>
            <Header />
            <main>
                <section className="conteudo">
                    <div className="imagem">
                        <img className="img" src="https://futuretransport.com.br/wp-content/uploads/2018/06/renault-porto-seguro-678x381.jpg" alt="" />
                    </div>
                    <div className="texto">
                        <h1 className="conteudo__titulo">O Projeto</h1>
                        <hr />
                        <p className="conteudo__texto">
                            Lorem ipsum dolor sit amet consectetur. Lorem eget cursus at vitae amet aenean ut est enim. Donec fames habitasse cursus malesuada in.
                            Rutrum molestie ac ac mi morbi curabitur gravida ac. Volutpat id porta non fringilla arcu pellentesque. Euismod dui non tortor
                            scelerisque felis mattis bibendum. Quisque blandit pharetra donec ac nisi velit nunc ornare a. Et purus semper ultrices elementum neque
                            ornare tortor venenatis fermentum. Accumsan arcu iaculis sit pellentesque ultricies viverra. Nam viverra tortor risus urna. Ut et
                            faucibus ac id porta vitae commodo felis. Urna eu sit vestibulum tristique viverra. Nibh sed nibh viverra senectus justo felis sed.
                            Posuere odio blandit ut elit eleifend. Dignissim pulvinar arcu euismod amet cum. Ut tortor donec at in elit nisl cursus. Vel sem nam
                            diam ut dui gravida enim. Sapien ornare tincidunt hendrerit quam massa.
                        </p>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}