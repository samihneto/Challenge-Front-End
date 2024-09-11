import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import News from "../components/News/News";
import Recovery from "../components/Recovery/Recovery";
import styles from '../styles/styles.module.css';

export default function recovery() {
    return (
        <div>
            <Header />
            <main className={styles.parte__conteudo}>
                <Recovery />
                <News />
            </main>
            <Footer />
        </div>
    );
}
