import Footer from "../components/Footer";
import Header from "../components/Header"
import "../login.css"

export default function Login() {
    return (
        <div>
            <Header />
            <main>
                <section className="caixa__entrada">
                    <form name="login__form" id="login__form" action="" method="post">
                        <div className="inputs">
                            <input
                                type="text"
                                name="login__usuario"
                                id="login__usuario"
                                required
                                placeholder="Digite seu usuário"
                            />
                            <div className="inputs__senha">
                                <input
                                    type="password"
                                    name="login__senha"
                                    id="login__senha"
                                    required
                                    placeholder="Digite sua senha"
                                />
                                <div className="senha__inf">
                                    <div className="lembrar">
                                        <input
                                            type="checkbox"
                                            name="login__check"
                                            id="login__check"
                                        />
                                        <label
                                            htmlFor="login__check"
                                            className="label__check"
                                        >
                                            Lembrar de mim
                                        </label>
                                    </div>
                                    <a href="../pages/recuperarsenha.html" className="esqueceu">
                                        Esqueceu a senha?
                                    </a>
                                </div>
                            </div>
                        </div>

                        <button className="enviar" type="submit">
                            LOGIN
                        </button>
                    </form>
                </section>
            </main>
            <Footer />
        </div>
    );
}