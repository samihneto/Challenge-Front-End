import { useState } from 'react';
import styles from './styles.module.css';

export default function Recovery() {
    const [isModalOpen, setIsModalOpen] = useState(true);

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            {isModalOpen && (
                <div className={styles.overlay} onClick={closeModal}>
                    <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                        <section className={styles.caixa__entrada}>
                            <form name="recuperar__form" id={styles.recuperar__form} action="" method="post">
                                <div className={styles.inputs}>
                                    <input
                                        type="text"
                                        name="recuperar__usuario"
                                        id={styles.recuperar__usuario}
                                        required
                                        placeholder="Digite seu usuário"
                                    />
                                    <input
                                        type="email"
                                        name="recuperar__email"
                                        id={styles.recuperar__email}
                                        required
                                        placeholder="Digite seu email"
                                    />
                                </div>
                                <button className={styles.enviar} type="submit">RECUPERAR SENHA</button>
                            </form>
                        </section>
                    </div>
                </div>
            )}
        </>
    );
}
