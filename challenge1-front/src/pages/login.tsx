import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header"
import Login from "../components/Login/Login";
import News from "../components/News/News";
import styles from '../styles/styles.module.css'

export default function login() {
    return (
        <div>
            <Header />
            <main className={styles.parte__conteudo}>
                <Login />
                <News />
            </main>
            <Footer />
        </div>
    );
}