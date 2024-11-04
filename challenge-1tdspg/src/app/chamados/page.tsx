"use client";
import { TipoChamado } from "@/interface/types";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Chamados() {
    const [chamados, setChamados] = useState<TipoChamado[]>([]);
    const [newChamado, setNewChamado] = useState<TipoChamado>({
        clienteUserId: 0,
        dataAbertura: new Date().toISOString().split('T')[0], // Define a data atual
        idChamdo: 2040,
        veiculoIdVeiculo: 0,
        oficinaUserId: 0,
        status: ""
    });
    const [isEditing, setIsEditing] = useState(false);
    const [editingId, setEditingId] = useState<string | number | null>(null);

    // Método Get
    useEffect(() => {
        const chamadaApiJava = async () => {
            const response = await fetch("http://localhost:8080/mecanico/chamado");
            const data = await response.json();
            setChamados(data);
        }

        chamadaApiJava();
    }, []);
    // Pegar valores do input
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setNewChamado({ ...newChamado, [name]: value });
    };
    // Adicionar um Chamado
    const handleAddChamado = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        const response = await fetch("http://localhost:8080/mecanico/chamado", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newChamado),
        });
        if (response.ok) {
            const data = await response.json();
            setChamados([...chamados, data]);
            resetForm();
            toggleModal();
            window.location.reload();
        }
    };

    // Método para editar um Chamado
    const handleEditChamado = (chamado: TipoChamado) => {
        setNewChamado(chamado);
        setIsEditing(true);
        setEditingId(chamado.idChamdo);
    };

    // Atualizar um Chamado
    const handleUpdateChamado = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!editingId) return;

        const response = await fetch(`http://localhost:8080/mecanico/chamado/${editingId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newChamado),
        });
        if (response.ok) {
            const updatedData = await response.json();
            setChamados(chamados.map(c => (c.idChamdo === editingId ? updatedData : c)));
            resetForm();
            toggleModal();
        }
    };

    // Método para excluir um chamado
    const handleDeleteChamado = async (id: string | number) => {
        const response = await fetch(`http://localhost:8080/mecanico/chamado/${String(id)}`, {
            method: "DELETE",
        });
        if (response.ok) {
            setChamados(chamados.filter(c => String(c.idChamdo) !== String(id)));
        }
    };
    // Resetar formulário
    const resetForm = () => {
        setNewChamado({
            clienteUserId: 0,
            dataAbertura: "",
            idChamdo: 0,
            veiculoIdVeiculo: 0,
            oficinaUserId: 0,
            status: ""
        });
        setIsEditing(false);
        setEditingId(null);
    };

    const [modal, setModal] = useState(false);
    const toggleModal = () => {
        setModal(!modal);
    };

    return (
        <div className="flex flex-col justify-center items-center p-4 gap-y-6">
            <h1 className="text-white text-5xl font-black">Tabela de Chamados</h1>
            <table className="rounded-xl">
                <thead className="border-b-2 border-separate border-spacing-px">
                    <tr className="mb-3">
                        <th className="text-white p-2 font-semibold font-archivo">ID CLIENTE</th>
                        <th className="text-white p-2 font-semibold font-archivo">DATA ABERTURA</th>
                        <th className="text-white p-2 font-semibold font-archivo">ID CHAMADO</th>
                        <th className="text-white p-2 font-semibold font-archivo">ID VEÍCULO</th>
                        <th className="text-white p-2 font-semibold font-archivo">ID OFICINA</th>
                        <th className="text-white p-2 font-semibold font-archivo">STATUS</th>
                        <th className="text-white p-2 font-semibold font-archivo">Editar | Excluir</th>
                        <th className="text-white p-2 font-semibold font-archivo">Link</th>
                    </tr>
                </thead>
                <tbody>
                    {chamados.map(c => (
                        <tr key={c.idChamdo}>
                            <td className="text-white font-archivo font-medium text-xl p-2">{c.clienteUserId}</td>
                            <td className="text-white font-archivo font-medium text-xl p-2">{c.dataAbertura}</td>
                            <td className="text-white font-archivo font-medium text-xl p-2">{c.idChamdo}</td>
                            <td className="text-white font-archivo font-medium text-xl p-2">{c.veiculoIdVeiculo}</td>
                            <td className="text-white font-archivo font-medium text-xl p-2">{c.oficinaUserId}</td>
                            <td className="text-white font-archivo font-medium text-xl p-2">{c.status}</td>
                            <td className="text-white font-archivo font-medium text-xl p-2">
                                <button onClick={() => handleEditChamado(c)} className="bg-blue-500 font-archivo font-medium text-xl p2 text-black p-1 hover:scale-105">Editar</button>
                                <button onClick={() => handleDeleteChamado(c.idChamdo)} className="bg-red-500 font-archivo font-medium text-xl p2 text-white p-1 ml-2 hover:scale-105">Excluir</button>
                            </td>
                            <td>
                                <Link className="underline text-white font-archivo font-medium text-xl p2" href={`/chamados/${String(c.idChamdo)}`}>
                                    Ver Chamado
                                </Link>
                            </td>

                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={8} className="flex text-white pt-5">
                            Quantidade de Chamados: {chamados.length}
                        </td>
                    </tr>
                </tfoot>
            </table>
            <button onClick={toggleModal}
                className="bg-blue-400 text-white rounded-lg p-3">ADICIONAR/ATUALIZAR</button>
            {modal && (
                <div onClick={toggleModal} className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div onClick={(e) => e.stopPropagation()} className=" bg-white shadow-lg rounded-lg p-8">
                        <form onSubmit={isEditing ? handleUpdateChamado : handleAddChamado} className="flex flex-col gap-y-4 mt-4">
                            <div className="flex flex-col">
                                <label htmlFor="clienteUserId" className="font-bold text-[#00102c] text-xl">ID Cliente</label>
                                <input
                                    type="text"
                                    name="clienteUserId"
                                    placeholder="ID Cliente"
                                    onChange={handleChange}
                                    value={newChamado.clienteUserId}
                                    required
                                    className="p-2 bg-gray-200 rounded-lg focus:outline-none"
                                />
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="dataAbertura" className="font-bold text-[#00102c] text-xl">Data Abertura</label>
                                <input
                                    type="date" // Mude de "text" para "date"
                                    name="dataAbertura"
                                    onChange={handleChange}
                                    value={newChamado.dataAbertura}
                                    required
                                    className="p-2 bg-gray-200 rounded-lg focus:outline-none"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="veiculoIdVeiculo" className="font-bold text-[#00102c] text-xl">ID Veículo</label>
                                <input
                                    type="text"
                                    name="veiculoIdVeiculo"
                                    placeholder="ID Veículo"
                                    onChange={handleChange}
                                    value={newChamado.veiculoIdVeiculo}
                                    required
                                    className="p-2 bg-gray-200 rounded-lg focus:outline-none"
                                />
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="oficinaUserId" className="font-bold text-[#00102c] text-xl">ID Oficina</label>
                                <input
                                    type="text"
                                    name="oficinaUserId"
                                    placeholder="ID Oficina"
                                    onChange={handleChange}
                                    value={newChamado.oficinaUserId}
                                    required
                                    className="p-2 bg-gray-200 rounded-lg focus:outline-none"
                                />
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="status" className="font-bold text-[#00102c] text-xl">Status</label>
                                <input
                                    type="text"
                                    name="status"
                                    placeholder="Status"
                                    onChange={handleChange}
                                    value={newChamado.status}
                                    required
                                    className="p-2 bg-gray-200 rounded-lg focus:outline-none"
                                />
                            </div>

                            <button type="submit" className="bg-blue-500 text-white p-2 rounded-lg hover:scale-105">
                                {isEditing ? "Atualizar Chamado" : "Adicionar Chamado"}
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
