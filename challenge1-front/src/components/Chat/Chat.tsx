import styles from './styles.module.css'

export default function Chat() {
    return (
        <div className={styles.bloco__chat}>
            <div className={styles.mensagens}>

            </div>
            <div>
                <input className={styles.input__escreva} type="text" />
                <button className={styles.input__enviar}>
                    <img src="" alt="" />
                </button>
            </div>
        </div>
    )
}