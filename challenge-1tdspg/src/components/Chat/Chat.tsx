import { useState } from 'react';
import { FaComments, FaTimes } from 'react-icons/fa';

export default function Chat() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleModal}
        className="fixed bottom-5 right-5 bg-blue-900 text-white text-3xl p-4 rounded-full shadow-lg hover:scale-110 transition-transform"
      >
        <FaComments />
      </button>

      {modal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
            <button
              onClick={toggleModal}
              className="absolute top-3 right-3 text-blue-900 text-2xl"
            >
              <FaTimes />
            </button>

            <h2 className="text-blue-900 text-2xl font-bold mb-4">Chat</h2>
            <p className="text-gray-700 text-sm mb-4">Seu conteúdo do chat aqui...</p>

            <div className="flex items-center gap-2">
              <input
                type="text"
                className="w-full border border-gray-300 rounded-full px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <button className="bg-blue-900 text-white p-2 rounded-full">
                <img src="/send.png" alt="Enviar" className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}