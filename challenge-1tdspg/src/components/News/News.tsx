import mecanico from '../../img/content/news/mecanico.webp'

export default function News() {
    return (
        <section>
            <div>
                <img src={mecanico} alt="" />
            </div>
            <div>
                <h1>O Projeto</h1>
                <hr />
                <p>
                    O Projeto Mecânico Virtual é uma iniciativa criada com o intuito de facilitar o acesso de clientes da Porto Seguro
                    à serviços de mecânica. O intuito do nosso Bot é criar uma fácil identificação do problema e o grau de seriedade para
                    assim poder dar uma resposta rápida e segura ao nosso cliente.
                    <br />
                    Os serviços do MV variam desde a identificação do problema quanto para encontrar o mecânico mais próximo e agendar sua
                    consulta o mais rápido possível!
                </p>
                <a href="/agenda">
                <button>
                    Comece uma consulta
                </button>
            </a>

            </div>
        </section>
    )
}