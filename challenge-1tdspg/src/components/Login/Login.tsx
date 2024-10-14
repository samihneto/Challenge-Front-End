import { useState } from 'react';

export default function Login() {
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
                            <form
                                name="login__form"
                                action=""
                                method="post"
                            >
                                <div>
                                    <input
                                        type="text"
                                        name="login__usuario"
                                        required
                                        placeholder="Digite seu usuário"
                                    />
                                    <div>
                                        <input
                                            type="password"
                                            name="login__senha"
                                            required
                                            placeholder="Digite sua senha"
                                        />
                                        <div className="senha__inf">
                                            <div className="lembrar">
                                                <input
                                                    type="checkbox"
                                                    name="login__check"
                                                />
                                                <label
                                                    htmlFor="login__check"
                                                >
                                                    Lembrar de mim
                                                </label>
                                            </div>
                                            <a href="/recovery">
                                                Esqueceu a senha?
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <button type="submit">
                                    LOGIN
                                </button>
                            </form>
                        </section>
                    </div>
                </div>
            )}
        </>
    );
}
