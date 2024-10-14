import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

export default function Agenda() {
    const [modal, setModal] = useState(false);
    const toggleModal = () => {
        setModal(!modal);
    };


    return (
        <>
            <button onClick={toggleModal}
                >
                AGENDAR
            </button>
            {modal &&
                <div >
                    <div>
                        <button>
                            <FaTimes />
                        </button>
                        <section>
                            <div>
                                <h1 >Agendar</h1>
                                <div >
                                    <input type="text"  placeholder='Escreva sua nota' />
                                    <input type="date"  />
                                </div>
                                <div >
                                    <input type="text"  placeholder='Escreva sua nota' />
                                    <input type="date"  />
                                </div>
                                <div>
                                    <input type="text"  placeholder='Escreva sua nota' />
                                    <input type="date"  />
                                </div>
                                <div >
                                    <input type="text"  placeholder='Escreva sua nota' />
                                    <input type="date"  />
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            }
        </>


    )
}