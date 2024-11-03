"use client";
import { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import { TipoAgendamento } from "@/interface/types"; 
import ChatMV from "../../components/ChatMV/ChatMV";

export default function Agenda() {
    const [agendamentos, setAgendamentos] = useState<TipoAgendamento[]>([]);
    const [agendamentoAtual, setAgendamentoAtual] = useState<TipoAgendamento | null>(null);
    const [modal, setModal] = useState(false);
    const [agendar, setAgendar] = useState({
        id: 0,
        nota: "",
        dataAgendamento: "",
    });

    const fetchAgendamentos = async () => {
        try {
            const res = await fetch("http://localhost:3000/dados/dados-api");
            if (!res.ok) throw new Error("Erro ao buscar agendamentos");
            const data = await res.json();
            setAgendamentos(data.agendamentos);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchAgendamentos(); // Chama a função de busca ao carregar o componente
    }, []);

    const toggleModal = () => {
        setModal(!modal);
        setAgendamentoAtual(null); // Limpa o estado do agendamento atual ao fechar
        setAgendar({ id: 0, nota: "", dataAgendamento: "" }); // Reseta o estado do formulário
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setAgendar({ ...agendar, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const method = agendamentoAtual ? "PUT" : "POST";
        const endpoint = "http://localhost:3000/dados/dados-api";
        
        try {
            const response = await fetch(endpoint, {
                method: method,
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(agendar),
            });

            if (response.ok) {
                await fetchAgendamentos(); 
                toggleModal(); 
            } else {
                console.error("Erro ao processar o agendamento");
            }
        } catch (error) {
            console.error("Erro ao enviar requisição:", error);
        }
    };

    // const handleEdit = (agendamento: TipoAgendamento) => {
    //     setAgendamentoAtual(agendamento); 
    //     setAgendar(agendamento); 
    //     toggleModal(); 
    // };

    const handleDelete = async (id: number) => {
        try {
            const response = await fetch("http://localhost:3000/dados/dados-api", {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ id }),
            });
            
            if (response.ok) {
                fetchAgendamentos(); // Atualiza a tabela após exclusão
            } else {
                console.error("Erro ao excluir agendamento");
            }
        } catch (error) {
            console.error("Erro ao enviar requisição de exclusão:", error);
        }
    };

    return (
        <div className="flex flex-col justify-center bg-[#00102c]">
            <ChatMV />
            <div className="flex flex-col justify-center items-center gap-10">
                <button
                    className="bg-blue-900 text-white text-2xl w-52 h-16 rounded-xl font-sans transition-transform transform hover:scale-105"
                    onClick={toggleModal}
                >
                    AGENDAR
                </button>
                <table className="mb-10">
                    <thead>
                        <tr>
                            <th className="text-white p-2 font-semibold font-archivo">ID</th>
                            <th className="text-white p-2 font-semibold font-archivo">NOTA</th>
                            <th className="text-white p-2 font-semibold font-archivo">DATA</th>
                            <th className="text-white p-2 font-semibold font-archivo">AÇÕES</th>
                        </tr>
                    </thead>
                    <tbody>
                        {agendamentos.map((agendamento) => (
                            <tr key={agendamento.id}>
                                <td className="text-white p-2 text-center px-4">{agendamento.id}</td>
                                <td className="text-white p-2 px-4">{agendamento.nota}</td>
                                <td className="text-white p-2 px-4">{agendamento.dataAgendamento}</td>
                                <td className="text-white p-2 px-4">
                                    {/* <button 
                                        onClick={() => handleEdit(agendamento)} 
                                        className="text-blue-500">Editar
                                    </button> */}
                                    <button 
                                        onClick={() => handleDelete(agendamento.id)} 
                                        className="text-red-500 ml-2">Excluir
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan={4} className="flex text-white pt-5">
                                Quantidade de Chamados: {agendamentos.length}
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>

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
                                {agendamentoAtual ? "Editar Agendamento" : "Adicionar Agendamento"}
                            </h1>

                            <form className="space-y-4 w-full" onSubmit={handleSubmit}>
                                <input
                                    type="text"
                                    name="nota"
                                    placeholder="Escreva sua nota"
                                    className="w-full px-4 py-2 border-2 border-blue-500 rounded-lg text-base shadow-sm focus:outline-none focus:border-blue-700"
                                    value={agendar.nota}
                                    onChange={handleChange}
                                />
                                <input
                                    type="date"
                                    name="dataAgendamento"
                                    className="w-full px-4 py-2 bg-blue-200 border-none rounded-lg text-base text-blue-900 shadow-sm focus:outline-none focus:bg-blue-300"
                                    value={agendar.dataAgendamento}
                                    onChange={handleChange}
                                />
                                <div className="flex justify-center">
                                    <button className="bg-blue-900 text-white px-6 py-3 rounded-lg shadow-md hover:scale-105 transition-transform">
                                        {agendamentoAtual ? "Confirmar Edição" : "Adicionar Agendamento"}
                                    </button>
                                </div>
                            </form>
                        </section>
                    </div>
                </div>
            )}
        </div>
    );
}
