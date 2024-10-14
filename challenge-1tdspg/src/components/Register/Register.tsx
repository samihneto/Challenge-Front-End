import { useState } from 'react';

export default function Register() {
    const [isModalOpen, setIsModalOpen] = useState(true);

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            {isModalOpen && (
                <div onClick={closeModal}>
                    <div onClick={(e) => e.stopPropagation()}>
                        <section>
                            <form name="form__cadastro" id="form__cadastro" method="post" action="">
                                <div>
                                    <div>
                                        <label htmlFor="input_nome">Nome</label>
                                        <input type="text" name="input_nome" required />
                                    </div>
                                    <div>
                                        <label htmlFor="input_email">Email</label>
                                        <input type="email" name="input_email" required />
                                    </div>
                                    <div>
                                        <label htmlFor="input_data">Data</label>
                                        <input type="date" name="input_data" required />
                                    </div>
                                    <div>
                                        <label htmlFor="input_tel">Telefone</label>
                                        <input type="tel" name="input_tel" required />
                                    </div>
                                    <div>
                                        <label htmlFor="input_rg">RG</label>
                                        <input type="number" name="input_rg" required />
                                    </div>
                                    <div>
                                        <label htmlFor="input_cpf">CPF</label>
                                        <input type="number" name="input_cpf" required />
                                    </div>
                                    <div>
                                        <label htmlFor="input_cep">CEP</label>
                                        <input type="number" name="input_cep" required />
                                    </div>
                                    <div>
                                        <label htmlFor="input_endereco">Endereço</label>
                                        <input type="text" name="input_endereco" required />
                                    </div>
                                </div>
                                <button>CADASTRAR-SE</button>
                            </form>
                        </section>
                    </div>
                </div>
            )}
        </>
    );
}
