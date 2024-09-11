import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import News from "../components/News/News";
import Register from "../components/Register/Register";
import styles from '../styles/styles.module.css';

export default function register() {
    return (
        <div>
            <Header />
        <main className={styles.parte__conteudo}>
            <Register />
            <News />
        </main>
        <Footer />
        </div>
    );
}
