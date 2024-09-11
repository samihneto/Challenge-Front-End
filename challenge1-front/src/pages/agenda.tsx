import Agenda from "../components/Agenda/Agenda";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import styles from '../styles/styles.module.css';

export default function agenda() {
    return (
        <div>
            <Header />
            <main className={styles.parte__conteudo}>
                <Agenda />
            </main>
            <Footer />
        </div>
    );
}
