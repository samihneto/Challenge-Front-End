import { useState } from 'react';
import styles from './styles.module.css';

export default function EntryModal() {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
        <>
            <button onClick={openModal} className={styles.openModalButton}>
                Entrar
            </button>

            {isOpen && (
                <div className={styles.overlay} onClick={closeModal}>
                    <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                        <button className={styles.closeButton} onClick={closeModal}>
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
