import styles from './styles.module.css'

export default function Register() {
    return(
        <main>
    <section className={styles.caixa__entrada}>
        <form name="form__cadastro" id="form__cadastro" method="post" action="" className={styles.caixa__cadastro}>
            <div className={styles.campos}>
                <div className={styles.fileira_esquerda}>
                    <div className={styles.cadastro__nome}>
                        <label htmlFor="input_nome" className={styles.label_input_nome}>Nome</label>
                        <input type="text" name="input_nome" id="input_nome" required />
                    </div>
                    <div className={styles.cadastro__email}>
                        <label htmlFor="input_email" className={styles.label_input_email}>Email</label>
                        <input type="email" name="input_email" id="input_email" required />
                    </div>
                    <div className={styles.cadastro__data}>
                        <label htmlFor="input_data" className={styles.label_input_data}>Data</label>
                        <input type="date" name="input_data" id="input_data" required />
                    </div>
                    <div className={styles.cadastro__telefone}>
                        <label htmlFor="input_tel" className={styles.label_input_tel}>Telefone</label>
                        <input type="tel" name="input_tel" id="input_tel" required />
                    </div>
                </div>
                <div className={styles.fileira_direita}>
                    <div className={styles.cadastro__rg}>
                        <label htmlFor="input_rg" className={styles.label_input_rg}>RG</label>
                        <input type="number" name="input_rg" id="input_rg" required />
                    </div>
                    <div className={styles.cadastro__cpf}>
                        <label htmlFor="input_cpf" className={styles.label_input_cpf}>CPF</label>
                        <input type="number" name="input_cpf" id="input_cpf" required />
                    </div>
                    <div className={styles.cadastro__cep}>
                        <label htmlFor="input_cep" className={styles.label_input_cep}>CEP</label>
                        <input type="number" name="input_cep" id="input_cep" required />
                    </div>
                    <div className={styles.cadastro__endereco}>
                        <label htmlFor="input_endereco" className={styles.label_input_endereco}>Endereço</label>
                        <input type="text" name="input_endereco" id="input_endereco" required />
                    </div>
                </div>
            </div>
            <button className={styles.cadastrar}>CADASTRAR-SE</button>
        </form>
    </section>
</main>
    )
}