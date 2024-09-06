import Footer from "../components/Footer";
import Header from "../components/Header";
import "../styles/agenda.css";

export default function Agenda() {
    return (
        <div>
            <Header />
            <main>
                <section className="agenda__conteudo">
                    <div className="conteudo__board">
                        <h1 className="board__titulo">Quadro de Avisos</h1>
                        <p className="board__texto">
                            Morbi non sapien elit. Proin sed mauris eu dolor rhoncus condimentum sit amet quis nisi. Phasellus viverra mauris tempus, mattis purus eu, volutpat dolor. Mauris auctor sapien eu lobortis imperdiet. Quisque id bibendum arcu, ac feugiat ex. Nullam mollis lacus vitae dignissim lacinia. Vivamus et diam urna. Vivamus pellentesque augue tellus, at tincidunt enim scelerisque a.
                            Sed ac interdum leo. Maecenas eget enim ut ex tincidunt tempus. Integer mauris turpis, fringilla sed quam et, ultricies mollis lorem. Fusce aliquet tortor at velit mattis, eu laoreet sem commodo. Vivamus porttitor efficitur leo, et tincidunt odio suscipit et. Duis ultrices vestibulum erat, et rutrum ligula accumsan dapibus. Vestibulum scelerisque tristique consequat. Aenean convallis justo sed lacus convallis rutrum. Integer in tristique est, in sagittis sem. Nulla in maximus ante.
                        </p>
                    </div>
                    <div className="conteudo__agenda">
                        <h1 className="agenda__titulo">Agendar</h1>
                        <p className="txt__agenda">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit distinctio maxime animi quasi ex Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum cupiditate omnis delectus ut voluptatibus necessitatibus culpa hic fugiat accusamus itaque, voluptas expedita. Voluptatibus, exercitationem ex eligendi nemo possimus eius.
                        </p>
                        <input type="date" className="date" placeholder="Digite uma data..." />
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
