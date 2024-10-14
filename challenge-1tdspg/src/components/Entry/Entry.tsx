import { useState } from 'react';

export default function EntryModal() {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    }

    return (
        <>
            <button onClick={toggleModal}>
                Entrar
            </button>

            {modal && (
                <div onClick={toggleModal}>
                    <div onClick={(e) => e.stopPropagation()}>
                        <button onClick={toggleModal}>
                            &times;
                        </button>
                        <main>
                            <a href="/login">
                                <button>LOGIN</button>
                            </a>
                            <h1>-ou-</h1>
                            <a href="/register">
                                <button>CADASTRO</button>
                            </a>
                        </main>
                    </div>
                </div>
            )}
        </>
    );
}
