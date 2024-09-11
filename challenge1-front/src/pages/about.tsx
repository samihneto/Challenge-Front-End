import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import About from "../components/About/About";
import styles from '../styles/styles.module.css';

export default function about() {
    return (
        <div>
            <Header />
            <main className={styles.parte__conteudo}>
                <About />
            </main>
            <Footer />
        </div>
    );
}