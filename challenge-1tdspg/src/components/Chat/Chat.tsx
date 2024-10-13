import styles from './styles.module.css'
import { useState } from 'react';
import { FaComments, FaTimes } from 'react-icons/fa';
import Send from '../../img/content/agenda/send.png'

export default function Chat() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div>
      <button onClick={toggleModal} className={styles.open__button}>
        <FaComments />
      </button>

      {modal && (
        <div className={styles.modal__overlay}>
          <div className={styles.modal__content}>
            <button onClick={toggleModal} className={styles.close__button}>
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