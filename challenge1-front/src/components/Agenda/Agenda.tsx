import styles from './styles.module.css'
import Send from '../../img/content/agenda/send.png'

export default function Agenda() {
    return (
        <main>
            <section className={styles.agenda__conteudo}>
                <div className={styles.conteudo__board}>
                    <h1 className={styles.board__titulo}>Mecânico Virtual</h1>
                    <p className={styles.board__texto}>
                        Morbi non sapien elit. Proin sed mauris eu dolor rhoncus condimentum sit amet quis nisi. Phasellus viverra mauris tempus, mattis purus eu, volutpat dolor. Mauris auctor sapien eu lobortis imperdiet. Quisque id bibendum arcu, ac feugiat ex. Nullam mollis lacus vitae dignissim lacinia. Vivamus et diam urna. Vivamus pellentesque augue tellus, at tincidunt enim scelerisque a.
                        Sed ac interdum leo. Maecenas eget enim ut ex tincidunt tempus. Integer mauris turpis, fringilla sed quam et, ultricies mollis lorem. Fusce aliquet tortor at velit mattis, eu laoreet sem commodo. Vivamus porttitor efficitur leo, et tincidunt odio suscipit et. Duis ultrices vestibulum erat, et rutrum ligula accumsan dapibus. Vestibulum scelerisque tristique consequat. Aenean convallis justo sed lacus convallis rutrum. Integer in tristique est, in sagittis sem. Nulla in maximus ante.
                    </p>
                    <div className={styles.board__msg}>
                        <input className={styles.board__input} type="text" />
                        <button className={styles.board__button}>
                            <img className={styles.board__send} src={Send} alt="" />
                        </button>
                    </div>
                </div>
                <div className={styles.conteudo__agenda}>
                    <h1 className={styles.agenda__titulo}>Agendar</h1>
                    <div className={styles.agenda__entrada}>
                        <h2 className={styles.agenda__nota}>Escreva sua nota</h2>
                        <input type="date" className={styles.date} />
                    </div>
                    <div className={styles.agenda__entrada}>
                        <h2 className={styles.agenda__nota}>Escreva sua nota</h2>
                        <input type="date" className={styles.date} />
                    </div>
                    <div className={styles.agenda__entrada}>
                        <h2 className={styles.agenda__nota}>Escreva sua nota</h2>
                        <input type="date" className={styles.date} />
                    </div>
                    <div className={styles.agenda__entrada}>
                        <h2 className={styles.agenda__nota}>Escreva sua nota</h2>
                        <input type="date" className={styles.date} />
                    </div>
                </div>
            </section>
        </main>
    )
}