import styles from './styles.module.css'

export default function Recovery() {
    return (
        <main>
            <section className={styles.caixa__entrada}>
                <form name="recuperar__form" id="recuperar__form" action="" method="post">
                    <div className={styles.inputs}>
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
                    <button className={styles.enviar} type="submit">RECUPERAR SENHA</button>
                </form>
            </section>
        </main>
    )
}