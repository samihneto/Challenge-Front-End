import Entry from "../components/Entry/Entry"
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import News from "../components/News/News"
import styles from '../styles/styles.module.css'

export default function Home() {
    return (
        <div>
            <Header />
            <main className={styles.parte__conteudo}>
                <Entry />
                <News />
            </main>
            <Footer />
        </div>
    )
}