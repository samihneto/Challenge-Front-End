import { useState } from 'react';
import styles from './styles.module.css';

export default function EntryModal() {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    }

    return (
        <>
            <button onClick={toggleModal} className={styles.openModalButton}>
                Entrar
            </button>

            {modal && (
                <div className={styles.overlay} onClick={toggleModal}>
                    <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                        <button className={styles.closeButton} onClick={toggleModal}>
                            &times;
                        </button>
                        <main className={styles.entry__conteudo}>
                            <a href="/login">
                                <button className={styles.botao__login}>LOGIN</button>
                            </a>
                            <h1 className={styles.ouTexto}>-ou-</h1>
                            <a href="/register">
                                <button className={styles.botao__cadastro}>CADASTRO</button>
                            </a>
                        </main>
                    </div>
                </div>
            )}
        </>
    );
}
