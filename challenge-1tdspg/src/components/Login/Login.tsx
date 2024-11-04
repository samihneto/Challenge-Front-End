"use client";

import { useState } from 'react';
import Link from 'next/link'; // Importa Link do Next.js para navegações internas

export default function Login() {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };

    return (
        <>


            <button onClick={toggleModal} className="w-40 h-12 bg-blue-900 text-white rounded-md font-semibold shadow-md hover:scale-105 transition-transform">
                LOGIN
            </button>

            {modal && (
                <div
                    className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 flex justify-center items-center z-50"
                    onClick={toggleModal}
                >
                    <div
                        className="bg-white p-8 rounded-lg shadow-lg w-96"
                        onClick={(e) => e.stopPropagation()} // Impede o fechamento ao clicar dentro do modal
                    >
                        <section className="flex flex-col items-center justify-center gap-10">
                            <form name="login__form" id="login__form" action="" method="post">
                                <div className="grid gap-5">
                                    <input
                                        type="text"
                                        name="login__usuario"
                                        id="login__usuario"
                                        required
                                        placeholder="Digite seu usuário"
                                        className="border-none rounded-full p-4 w-full h-12 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                                    />
                                    <div className="flex flex-col gap-2">
                                        <input
                                            type="password"
                                            name="login__senha"
                                            id="login__senha"
                                            required
                                            placeholder="Digite sua senha"
                                            className="border-none rounded-full p-4 w-full h-12 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                                        />
                                        <div className="flex flex-row items-center gap-4">
                                            <div className="flex items-center">
                                                <input
                                                    type="checkbox"
                                                    name="login__check"
                                                    id="login__check"
                                                    className="mr-2"
                                                />
                                                <label htmlFor="login__check" className="text-sm font-sans">
                                                    Lembrar de mim
                                                </label>
                                            </div>
                                            {/* Link para recuperação de senha usando Link do Next.js */}
                                            <Link href="/recovery" className="text-sm text-blue-500 hover:underline">
                                                Esqueceu a senha?
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <button
                                    className="font-sans text-lg bg-[#001A47] text-white rounded-lg w-full h-12 hover:scale-105 transition-transform "
                                    type="submit"
                                >
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
