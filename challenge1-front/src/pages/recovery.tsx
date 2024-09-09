import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import "../styles/recovery.css";

export default function Recovery() {
    return (
        <div>
            <Header />
            <main>
                <section className="caixa__entrada">
                    <form name="recuperar__form" id="recuperar__form" action="" method="post">
                        <div className="inputs">
                            <input
                                type="text"
                                name="recuperar__usuario"
                                id="recuperar__usuario"
                                required
                                placeholder="Digite seu usuário"
                            />
                            <input
                                type="email"
                                name="recuperar__email"
                                id="recuperar__email"
                                required
                                placeholder="Digite seu email"
                            />
                        </div>
                        <button className="enviar" type="submit">RECUPERAR SENHA</button>
                    </form>
                </section>
            </main>
            <Footer />
        </div>
    );
}
