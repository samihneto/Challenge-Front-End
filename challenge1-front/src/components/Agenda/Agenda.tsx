import { useState } from 'react';
import styles from './styles.module.css'
import { FaTimes } from 'react-icons/fa';

export default function Agenda() {
    const [modal, setModal] = useState(false);
    const toggleModal = () => {
        setModal(!modal);
    };


    return (
        <>
            <button onClick={toggleModal}
                className={styles.btn__modal}>
                AGENDAR
            </button>
            {modal &&
                <div className={styles.modal__overlay}>
                    <div className={styles.modal__content}>
                        <button onClick={toggleModal} className={styles.close__button}>
                            <FaTimes />
                        </button>
                        <section className={styles.agenda__conteudo}>
                            <div className={styles.conteudo__agenda}>
                                <h1 className={styles.agenda__titulo}>Agendar</h1>
                                <div className={styles.agenda__entrada}>
                                    <input type="text" className={styles.agenda__nota} placeholder='Escreva sua nota' />
                                    <input type="date" className={styles.date} />
                                </div>
                                <div className={styles.agenda__entrada}>
                                    <input type="text" className={styles.agenda__nota} placeholder='Escreva sua nota' />
                                    <input type="date" className={styles.date} />
                                </div>
                                <div className={styles.agenda__entrada}>
                                    <input type="text" className={styles.agenda__nota} placeholder='Escreva sua nota' />
                                    <input type="date" className={styles.date} />
                                </div>
                                <div className={styles.agenda__entrada}>
                                    <input type="text" className={styles.agenda__nota} placeholder='Escreva sua nota' />
                                    <input type="date" className={styles.date} />
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            }
        </>


    )
}