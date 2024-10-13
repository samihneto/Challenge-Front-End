import styles from './styles.module.css'
import mecanico from '../../img/content/news/mecanico.webp'

export default function News() {
    return (
        <section className={styles.conteudo}>
            <div className={styles.imagem}>
                <img className={styles.img} src={mecanico} alt="" />
            </div>
            <div className={styles.texto}>
                <h1 className={styles.conteudo__titulo}>O Projeto</h1>
                <hr />
                <p className={styles.conteudo__texto}>
                    O Projeto Mecânico Virtual é uma iniciativa criada com o intuito de facilitar o acesso de clientes da Porto Seguro
                    à serviços de mecânica. O intuito do nosso Bot é criar uma fácil identificação do problema e o grau de seriedade para
                    assim poder dar uma resposta rápida e segura ao nosso cliente.
                    <br />
                    Os serviços do MV variam desde a identificação do problema quanto para encontrar o mecânico mais próximo e agendar sua
                    consulta o mais rápido possível!
                </p>
                <a href="/agenda">
                <button className={styles.btn__bot}>
                    Comece uma consulta
                </button>
            </a>

            </div>
        </section>
    )
}