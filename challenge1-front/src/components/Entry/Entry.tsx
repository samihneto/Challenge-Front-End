import styles from './styles.module.css'

export default function Entry() {
    return (
        <main className={styles.entry__conteudo}>
            <button className={styles.botao__login}>LOGIN</button>
            <h1>-ou-</h1>
            <button className={styles.botao__cadastro}> CADASTRO
                <link rel="stylesheet" href="/register" />
            </button>
        </main>
    )
}