import styles from './styles.module.css'
import { useState } from 'react';
import { FaComments, FaTimes } from 'react-icons/fa'; // Importa os ícones
import Send from '../../img/content/agenda/send.png'

export default function Chat() {
        const [isOpen, setIsOpen] = useState(false);
      
        const openModal = () => {
          setIsOpen(true);
        };
      
        const closeModal = () => {
          setIsOpen(false);
        };
    return (
        <div>
        {/* Botão de abrir o modal */}
        <button onClick={openModal} className={styles.open__button}>
          <FaComments />
        </button>
  
        {/* O Modal */}
        {isOpen && (
          <div className={styles.modal__overlay}>
            <div className={styles.modal__content}>
              {/* Botão de fechar o modal */}
              <button onClick={closeModal} className={styles.close__button}>
                <FaTimes />
              </button>
              <h2 className={styles.chat__titulo}>Chat</h2>
              <p className={styles.chat__texto}>Seu conteúdo do chat aqui...</p>
              <div className={styles.chat__msg}>
                <input type="text" className={styles.chat__input} />
                <img className={styles.chat__send} src={Send} alt="" />
              </div>
            </div>
          </div>
        )}
      </div>
    )
}