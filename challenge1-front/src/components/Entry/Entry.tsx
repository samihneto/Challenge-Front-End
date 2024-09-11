import styles from './styles.module.css'

export default function Entry() {
    return (
        <main className={styles.entry__conteudo}>
            <a href="/login">
                <button className={styles.botao__login}>LOGIN</button>
            </a>
            <h1>-ou-</h1>
            <a href="/register">
                <button className={styles.botao__cadastro}>
                    CADASTRO
                </button>
            </a>

        </main>
    )
}