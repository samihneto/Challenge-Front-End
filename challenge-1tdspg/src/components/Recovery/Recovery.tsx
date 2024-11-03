"use client";
import { useState } from 'react';

export default function Recovery() {
    const [isModalOpen, setIsModalOpen] = useState(true);

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50" onClick={closeModal}>
                    <div className="bg-white rounded-lg p-10 shadow-lg" onClick={(e) => e.stopPropagation()}>
                        <section className="flex flex-col items-center justify-center gap-8">
                            <form name="recuperar__form" action="" method="post" className="flex flex-col gap-6">
                                <div className="flex flex-col gap-6">
                                    <input
                                        type="text"
                                        name="recuperar__usuario"
                                        required
                                        placeholder="Digite seu usuário"
                                        className="border-none rounded-full p-4 w-72 h-12 shadow-md"
                                    />
                                    <input
                                        type="email"
                                        name="recuperar__email"
                                        required
                                        placeholder="Digite seu email"
                                        className="border-none rounded-full p-4 w-72 h-12 shadow-md"
                                    />
                                </div>
                                <button className="font-jura text-lg border-none rounded-lg bg-[#001A47] text-white w-64 h-12 cursor-pointer hover:scale-110 transition-transform duration-300" type="submit">
                                    RECUPERAR SENHA
                                </button>
                            </form>
                        </section>
                    </div>
                </div>
            )}
        </>
    );
}
