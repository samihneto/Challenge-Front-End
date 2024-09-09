import styles from '.styles.module.css'

export default function Login() {
    return (
        <main>
            <section className={styles.caixa__entrada}>
                <form name="login__form" id={styles.login__form} action="" method="post">
                    <div className={styles.inputs}>
                        <input
                            type="text"
                            name="login__usuario"
                            id={styles.login__usuario}
                            required
                            placeholder="Digite seu usuário"
                        />
                        <div className={styles.inputs__senha}>
                            <input
                                type="password"
                                name="login__senha"
                                id={styles.login__senha}
                                required
                                placeholder="Digite sua senha"
                            />
                            <div className="senha__inf">
                                <div className="lembrar">
                                    <input
                                        type="checkbox"
                                        name="login__check"
                                        id={styles.login__check}
                                    />
                                    <label
                                        htmlFor="login__check"
                                        className={styles.label__check}
                                    >
                                        Lembrar de mim
                                    </label>
                                </div>
                                <a href="../pages/recuperarsenha.html" className={styles.esqueceu}>
                                    Esqueceu a senha?
                                </a>
                            </div>
                        </div>
                    </div>

                    <button className={styles.enviar} type="submit">
                        LOGIN
                    </button>
                </form>
            </section>
        </main>
    )
}