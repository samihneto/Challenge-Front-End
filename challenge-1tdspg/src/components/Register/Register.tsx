"use client";
import { useState } from 'react';

export default function Register() {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };

    return (
        <>
            <button onClick={toggleModal} className="w-40 h-12 bg-blue-100 text-blue-900 rounded-md font-semibold shadow-md hover:scale-105 transition-transform">
                CADASTRO
            </button>
            {modal && (
                <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50" onClick={toggleModal}>
                    <div className="bg-white rounded-lg p-12 shadow-lg" onClick={(e) => e.stopPropagation()}>
                        <section className="flex flex-col items-center justify-center gap-4">
                            <form name="form__cadastro" method="post" className="flex flex-col gap-10">
                                <div className="flex flex-col gap-6">
                                    <div className="flex flex-col">
                                        <label htmlFor="input_nome" className="font-sans font-medium text-lg text-[#001A47]">Nome</label>
                                        <input type="text" name="input_nome" id="input_nome" required className="border-none rounded-full p-2 w-64 h-10 shadow-md focus:outline-none" />
                                    </div>
                                    <div className="flex flex-col">
                                        <label htmlFor="input_email" className="font-sans font-medium text-lg text-[#001A47]">Email</label>
                                        <input type="email" name="input_email" id="input_email" required className="border-none rounded-full p-2 w-64 h-10 shadow-md focus:outline-none" />
                                    </div>
                                    <div className="flex flex-col">
                                        <label htmlFor="input_data" className="font-sans font-medium text-lg text-[#001A47]">Data</label>
                                        <input type="date" name="input_data" id="input_data" required className="border-none rounded-full p-2 w-64 h-10 shadow-md focus:outline-none" />
                                    </div>
                                    <div className="flex flex-col">
                                        <label htmlFor="input_tel" className="font-sans font-medium text-lg text-[#001A47]">Telefone</label>
                                        <input type="tel" name="input_tel" id="input_tel" required className="border-none rounded-full p-2 w-64 h-10 shadow-md focus:outline-none" />
                                    </div>
                                    <div className="flex flex-col">
                                        <label htmlFor="input_rg" className="font-sans font-medium text-lg text-[#001A47]">RG</label>
                                        <input type="text" name="input_rg" id="input_rg" required className="border-none rounded-full p-2 w-64 h-10 shadow-md focus:outline-none" />
                                    </div>
                                    <div className="flex flex-col">
                                        <label htmlFor="input_cpf" className="font-sans font-medium text-lg text-[#001A47]">CPF</label>
                                        <input type="text" name="input_cpf" id="input_cpf" required className="border-none rounded-full p-2 w-64 h-10 shadow-md focus:outline-none" />
                                    </div>
                                    <div className="flex flex-col">
                                        <label htmlFor="input_cep" className="font-sans font-medium text-lg text-[#001A47]">CEP</label>
                                        <input type="text" name="input_cep" id="input_cep" required className="border-none rounded-full p-2 w-64 h-10 shadow-md focus:outline-none" />
                                    </div>
                                    <div className="flex flex-col">
                                        <label htmlFor="input_endereco" className="font-sans font-medium text-lg text-[#001A47]">Endereço</label>
                                        <input type="text" name="input_endereco" id="input_endereco" required className="border-none rounded-full p-2 w-64 h-10 shadow-md focus:outline-none" />
                                    </div>
                                </div>
                                <button className="border-none w-36 h-12 rounded-lg bg-[#001A47] text-white font-sans text-lg cursor-pointer hover:scale-105 transition-transform duration-300" type="submit">
                                    CADASTRAR-SE
                                </button>
                            </form>
                        </section>
                    </div>
                </div>
            )}
        </>
    );
}
