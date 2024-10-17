"use client";

import { useState } from 'react';
import Link from 'next/link'; // Importe o componente Link do Next.js

export default function EntryModal() {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };

    return (
        <>
            <button 
                onClick={toggleModal} 
                className="px-5 py-2 text-lg font-sans font-bold text-white bg-blue-900 rounded-md hover:scale-110 transition-transform"
            >
                Entrar
            </button>

            {modal && (
                <div 
                    className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-70 flex justify-center items-center z-50" 
                    onClick={toggleModal}
                >
                    <div 
                        className="bg-white w-96 p-8 rounded-lg relative shadow-lg" 
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button 
                            className="absolute top-4 right-4 text-2xl" 
                            onClick={toggleModal}
                        >
                            &times;
                        </button>
                        <main className="flex flex-col items-center justify-center">
                            {/* Substituindo as tags <a> por <Link> do Next.js */}
                            <Link href="/login">
                                <button className="w-40 h-12 bg-blue-900 text-white rounded-md font-semibold shadow-md hover:scale-105 transition-transform">
                                    LOGIN
                                </button>
                            </Link>
                            <h1 className="my-4 text-lg font-sans">-ou-</h1>
                            <Link href="/register">
                                <button className="w-40 h-12 bg-blue-100 text-blue-900 rounded-md font-semibold shadow-md hover:scale-105 transition-transform">
                                    CADASTRO
                                </button>
                            </Link>
                        </main>
                    </div>
                </div>
            )}
        </>
    );
}
