import ChatMV from "../components/ChatMV/ChatMV";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import styles from '../styles/styles.module.css';

export default function agenda() {
    return (
        <div>
            <Header />
            <main className={styles.parte__conteudo}>
                <ChatMV />
            </main>
            <Footer />
        </div>
    );
}
