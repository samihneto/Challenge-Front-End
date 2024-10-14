import { useState } from 'react';

export default function Recovery() {
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
                            <form name="recuperar__form" action="" method="post">
                                <div>
                                    <input
                                        type="text"
                                        name="recuperar__usuario"
                                        required
                                        placeholder="Digite seu usuário"
                                    />
                                    <input
                                        type="email"
                                        name="recuperar__email"
                                        required
                                        placeholder="Digite seu email"
                                    />
                                </div>
                                <button type="submit">RECUPERAR SENHA</button>
                            </form>
                        </section>
                    </div>
                </div>
            )}
        </>
    );
}
