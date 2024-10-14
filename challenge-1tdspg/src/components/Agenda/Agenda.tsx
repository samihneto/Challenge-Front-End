import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

export default function Agenda() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <button
        className="bg-blue-900 text-white text-2xl w-52 h-16 rounded-xl font-sans transition-transform transform hover:scale-105"
        onClick={toggleModal}
      >
        AGENDAR
      </button>

      {modal && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg w-3/4 md:w-2/3 lg:w-1/2 relative">
            <button
              className="absolute top-4 right-4 text-blue-900 text-xl"
              onClick={toggleModal}
            >
              <FaTimes />
            </button>

            <section className="flex flex-col justify-center items-center">
              <h1 className="text-4xl font-bold mb-8 text-blue-900">
                Agendar
              </h1>

              <div className="space-y-4 w-full">
                <div className="flex flex-col md:flex-row gap-4 justify-center">
                  <input
                    type="text"
                    placeholder="Escreva sua nota"
                    className="w-full md:w-1/2 px-4 py-2 border-2 border-blue-500 rounded-lg text-base shadow-sm focus:outline-none focus:border-blue-700"
                  />
                  <input
                    type="date"
                    className="w-full md:w-1/2 px-4 py-2 bg-blue-200 border-none rounded-lg text-base text-blue-900 shadow-sm focus:outline-none focus:bg-blue-300"
                  />
                </div>

                <div className="flex flex-col md:flex-row gap-4 justify-center">
                  <input
                    type="text"
                    placeholder="Escreva sua nota"
                    className="w-full md:w-1/2 px-4 py-2 border-2 border-blue-500 rounded-lg text-base shadow-sm focus:outline-none focus:border-blue-700"
                  />
                  <input
                    type="date"
                    className="w-full md:w-1/2 px-4 py-2 bg-blue-200 border-none rounded-lg text-base text-blue-900 shadow-sm focus:outline-none focus:bg-blue-300"
                  />
                </div>
              </div>
            </section>
          </div>
        </div>
      )}
    </>
  );
}
