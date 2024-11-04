"use client";

import { useState } from 'react';
import Login from '../Login/Login';
import Register from '../Register/Register';

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
                            <Login />
                            <h1 className="my-4 text-lg font-sans">-ou-</h1>
                            <Register />
                        </main>
                    </div>
                </div>
            )}
        </>
    );
}
