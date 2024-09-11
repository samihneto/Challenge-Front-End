import styles from './styles.module.css'

export default function News() {
    return (
            <section className={styles.conteudo}>
                <div className={styles.imagem}>
                    <img className={styles.img} src="https://futuretransport.com.br/wp-content/uploads/2018/06/renault-porto-seguro-678x381.jpg" alt="" />
                </div>
                <div className={styles.texto}>
                    <h1 className={styles.conteudo__titulo}>O Projeto</h1>
                    <hr />
                    <p className={styles.conteudo__texto}>
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
    )
}